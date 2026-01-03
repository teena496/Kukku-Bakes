import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Recipe } from '../data/recipes';

interface RecipeContextType {
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => Promise<void>;
  updateRecipe: (recipe: Recipe) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export function RecipeProvider({ children }: { children: ReactNode }) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = 'http://localhost:5137/api/Recipes';

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }
      const data = await response.json();
      setRecipes(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching recipes:', err);
      // Fallback to empty or keep loading false
      setError('Failed to load recipes. Please check backend connection.');
    } finally {
      setLoading(false);
    }
  };

  const addRecipe = async (recipe: Recipe) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
      });

      if (!response.ok) {
        throw new Error('Failed to add recipe');
      }

      const newRecipe = await response.json();
      setRecipes((prev) => [...prev, newRecipe]);
    } catch (err) {
      console.error('Error adding recipe:', err);
      alert('Failed to add recipe. See console for details.');
    }
  };

  const updateRecipe = async (recipe: Recipe) => {
    try {
      const response = await fetch(`${API_URL}/${recipe.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
      });

      if (!response.ok) {
        throw new Error('Failed to update recipe');
      }

      setRecipes((prev) => prev.map((r) => (r.id === recipe.id ? recipe : r)));
    } catch (err) {
      console.error('Error updating recipe:', err);
      alert('Failed to update recipe. See console for details.');
    }
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, updateRecipe, loading, error }}>
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipes() {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error('useRecipes must be used within a RecipeProvider');
  }
  return context;
}
