import { useState } from 'react';
import { useRecipes } from '../context/RecipeContext';
import type { Recipe, RecipeCategory } from '../data/recipes';
import '../App.css';

function AdminPage() {
  const { recipes, addRecipe, updateRecipe } = useRecipes();
  
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialFormState = {
    title: '',
    description: '',
    image: '',
    prepTime: '',
    cookTime: '',
    servings: 4,
    category: 'Cakes' as RecipeCategory,
  };

  const [formData, setFormData] = useState(initialFormState);

  const [ingredientsList, setIngredientsList] = useState<{ item: string; amount: string }[]>([
    { item: '', amount: '' }
  ]);
  const [steps, setSteps] = useState<string>('');

  const openAddModal = () => {
    setFormData(initialFormState);
    setIngredientsList([{ item: '', amount: '' }]);
    setSteps('');
    setEditingId(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEdit = (recipe: Recipe) => {
    setEditingId(recipe.id);
    setFormData({
      title: recipe.title,
      description: recipe.description,
      image: recipe.image,
      prepTime: recipe.prepTime,
      cookTime: recipe.cookTime,
      servings: recipe.servings,
      category: recipe.category,
    });
    setIngredientsList(recipe.ingredients.map(i => ({ item: i.item, amount: i.amount })));
    setSteps(recipe.steps.map(s => s.instruction).join('\n'));
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const recipeData: Recipe = {
      id: editingId || '00000000-0000-0000-0000-000000000000',
      ...formData,
      ingredients: ingredientsList.filter(i => i.item.trim() !== ''),
      steps: steps.split('\n').filter(line => line.trim() !== '').map((line, index) => ({
        stepNumber: index + 1,
        instruction: line.trim(),
      }))
    };

    if (editingId) {
      await updateRecipe(recipeData);
      alert('Recipe updated successfully!');
    } else {
      await addRecipe(recipeData);
      alert('Recipe added successfully!');
    }
    closeModal();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const data = new FormData();
    data.append('file', file);

    try {
      const response = await fetch('http://localhost:5137/api/Recipes/upload-image', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) throw new Error('Upload failed');

      const result = await response.json();
      setFormData(prev => ({ ...prev, image: result.url }));
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Make sure backend is running.');
    }
  };

  const handleIngredientChange = (index: number, field: 'item' | 'amount', value: string) => {
    const newIngredients = [...ingredientsList];
    newIngredients[index][field] = value;
    setIngredientsList(newIngredients);
  };

  const addIngredientRow = () => {
    setIngredientsList([...ingredientsList, { item: '', amount: '' }]);
  };

  const removeIngredientRow = (index: number) => {
    setIngredientsList(ingredientsList.filter((_, i) => i !== index));
  };

  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 className="section-title" style={{ margin: 0 }}>Manage Recipes</h2>
        <button className="btn btn-primary" onClick={openAddModal}>
          + Add New Recipe
        </button>
      </div>

      {/* Recipe Grid */}
      <div className="recipe-grid">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <div className="recipe-image-container">
              <img src={recipe.image} alt={recipe.title} className="recipe-image" />
              <span className="recipe-category">{recipe.category}</span>
            </div>
            <div className="recipe-content">
              <h3 className="recipe-title">{recipe.title}</h3>
              <p className="recipe-description">{recipe.description.substring(0, 80)}...</p>
              <div className="recipe-meta">
                <span>⏱️ {recipe.prepTime}</span>
                <span>🔥 {recipe.cookTime}</span>
              </div>
              <button 
                onClick={() => handleEdit(recipe)}
                className="btn btn-secondary"
                style={{ marginTop: '10px', padding: '6px 16px', fontSize: '0.9rem', width: 'auto' }}
              >
                Edit Recipe
              </button>
            </div>
          </div>
        ))}
        {recipes.length === 0 && (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#666' }}>
            No recipes found. Click "Add New Recipe" to get started!
          </p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 1000,
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          padding: '20px'
        }}>
          <div className="modal-content" style={{
            backgroundColor: 'white', padding: '30px', borderRadius: '15px',
            maxWidth: '700px', width: '100%', maxHeight: '90vh', overflowY: 'auto',
            position: 'relative'
          }}>
            <button 
              onClick={closeModal}
              style={{
                position: 'absolute', top: '15px', right: '15px',
                background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer'
              }}
            >
              &times;
            </button>
            
            <h2 className="section-title" style={{ marginTop: 0 }}>
              {editingId ? 'Edit Recipe' : 'Add New Recipe'}
            </h2>

            <form onSubmit={handleSubmit} className="admin-form">
              
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
                <label style={{ display: 'block', marginBottom: '5px' }}>Image Upload</label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleImageUpload} 
                  style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                {formData.image && (
                  <div style={{ marginTop: '10px' }}>
                    <p style={{ fontSize: '0.9em', color: '#666' }}>Image uploaded: {formData.image}</p>
                    <img src={formData.image} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '5px' }} />
                  </div>
                )}
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
                <label style={{ display: 'block', marginBottom: '5px' }}>Ingredients</label>
                {ingredientsList.map((ing, index) => (
                  <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                    <input
                      type="text"
                      placeholder="Item (e.g. Flour)"
                      value={ing.item}
                      onChange={(e) => handleIngredientChange(index, 'item', e.target.value)}
                      required
                      style={{ flex: 2, padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />
                    <input
                      type="text"
                      placeholder="Amount (e.g. 2 cups)"
                      value={ing.amount}
                      onChange={(e) => handleIngredientChange(index, 'amount', e.target.value)}
                      required
                      style={{ flex: 1, padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />
                    {ingredientsList.length > 1 && (
                      <button 
                        type="button" 
                        onClick={() => removeIngredientRow(index)}
                        style={{ padding: '8px', background: '#ff4d4d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                      >
                        X
                      </button>
                    )}
                  </div>
                ))}
                <button 
                  type="button" 
                  onClick={addIngredientRow}
                  style={{ padding: '8px 15px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                >
                  + Add Ingredient
                </button>
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
                {editingId ? 'Update Recipe' : 'Add Recipe'}
              </button>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default AdminPage;
