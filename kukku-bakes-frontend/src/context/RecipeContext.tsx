import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { recipes as initialRecipes } from '../data/recipes';
import type { Recipe } from '../data/recipes';

interface RecipeContextType {
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export function RecipeProvider({ children }: { children: ReactNode }) {
  // Initialize from localStorage if available, otherwise use default data
  const [recipes, setRecipes] = useState<Recipe[]>(() => {
    const savedRecipes = localStorage.getItem('kukku-recipes');
    return savedRecipes ? JSON.parse(savedRecipes) : initialRecipes;
  });

  useEffect(() => {
    localStorage.setItem('kukku-recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (recipe: Recipe) => {
    setRecipes((prev) => [...prev, recipe]);
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
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
