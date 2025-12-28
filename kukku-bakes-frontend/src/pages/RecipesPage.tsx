import { useNavigate } from 'react-router-dom'
import { useRecipes } from '../context/RecipeContext'
import type { RecipeCategory, Recipe } from '../data/recipes'
import '../App.css'

function RecipesPage() {
  const navigate = useNavigate()
  const { recipes } = useRecipes()

  // Group recipes by category
  const categories: RecipeCategory[] = ['Cakes', 'Cookies', 'Breads', 'Snacks'];
  
  const getRecipesByCategory = (category: RecipeCategory): Recipe[] => {
    return recipes.filter(recipe => recipe.category === category);
  }

  return (
    <section className="recipes section" style={{paddingTop: '100px'}}>
        <div className="container">
          <h2 className="section-title">Recipes</h2>
          <p className="section-subtitle">Discover our favorite recipes within each category</p>
          
          {categories.map((category) => (
            <div key={category} className="category-section">
              <h3 className="category-title">{category}</h3>
              <div className="features-grid">
                {getRecipesByCategory(category).map((recipe) => (
                  <div 
                    key={recipe.id} 
                    className="feature-card" 
                    onClick={() => navigate(`/recipe/${recipe.id}`)} 
                    style={{cursor: 'pointer'}}
                  >
                    <div className="card-image-wrapper">
                         <img src={recipe.image} alt={recipe.title} className="card-image" />
                    </div>
                    <div className="card-content">
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                        <span className="view-recipe-link">View Recipe →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default RecipesPage
