import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';
import type { Recipe, RecipeCategory } from '../data/recipes';
import '../App.css';

function AdminPage() {
  const navigate = useNavigate();
  const { addRecipe } = useRecipes();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    prepTime: '',
    cookTime: '',
    servings: 4,
    category: 'Cakes' as RecipeCategory,
  });

  const [ingredients, setIngredients] = useState<string>('');
  const [steps, setSteps] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newRecipe: Recipe = {
      id: Date.now().toString(), // Simple ID generation
      ...formData,
      ingredients: ingredients.split('\n').filter(line => line.trim() !== '').map((line) => ({
        item: line.trim(),
        amount: 'N/A', // Simple default for now since input is just one line
      })),
      steps: steps.split('\n').filter(line => line.trim() !== '').map((line, index) => ({
        stepNumber: index + 1,
        instruction: line.trim(),
      }))
    };

    addRecipe(newRecipe);
    alert('Recipe added successfully!');
    navigate('/recipes');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      <h2 className="section-title">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="admin-form" style={{ maxWidth: '600px', margin: '0 auto' }}>
        
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Title</label>
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Category</label>
          <select 
            name="category" 
            value={formData.category} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          >
            <option value="Cakes">Cakes</option>
            <option value="Cookies">Cookies</option>
            <option value="Breads">Breads</option>
            <option value="Snacks">Snacks</option>
          </select>
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Description</label>
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Image URL</label>
          <input 
            type="text" 
            name="image" 
            value={formData.image} 
            onChange={handleChange} 
            required 
            placeholder="https://example.com/image.jpg"
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        <div className="form-row" style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Prep Time</label>
            <input 
              type="text" 
              name="prepTime" 
              value={formData.prepTime} 
              onChange={handleChange} 
              placeholder="e.g. 30 mins"
              style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Cook Time</label>
            <input 
              type="text" 
              name="cookTime" 
              value={formData.cookTime} 
              onChange={handleChange} 
              placeholder="e.g. 1 hour"
              style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Servings</label>
            <input 
              type="number" 
              name="servings" 
              value={formData.servings} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Ingredients (One per line)</label>
          <textarea 
            value={ingredients} 
            onChange={(e) => setIngredients(e.target.value)} 
            rows={5}
            required
            placeholder="2 cups Flour&#10;1 cup Sugar"
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Steps (One per line)</label>
          <textarea 
            value={steps} 
            onChange={(e) => setSteps(e.target.value)} 
            rows={5}
            required
            placeholder="Mix ingredients&#10;Bake at 350F"
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
          Add Recipe
        </button>

      </form>
    </div>
  );
}

export default AdminPage;
