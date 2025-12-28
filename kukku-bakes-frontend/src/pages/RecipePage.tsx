import { useParams, useNavigate } from 'react-router-dom'
import { useRecipes } from '../context/RecipeContext'
import { useEffect } from 'react'
import '../App.css'

function RecipePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { recipes } = useRecipes()
  const recipe = recipes.find(r => r.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!recipe) {
    return (
      <div className="recipe-not-found">
        <h2>Recipe not found</h2>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <div className="recipe-page">
      <nav className="navbar" style={{backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
        <div className="container nav-container">
          <div className="logo-container" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
             <img src="/logo.png" alt="Kukku Bakes Logo" className="logo" />
             <span className="brand-name">Kukku Bakes</span>
          </div>
          <button className="btn btn-secondary" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </nav>

      <div className="container" style={{marginTop: '100px', marginBottom: '50px'}}>
        <div className="recipe-header">
            <div className="recipe-image-container">
                 <img src={recipe.image} alt={recipe.title} className="recipe-hero-image" />
            </div>
            <div className="recipe-info">
                <h1>{recipe.title}</h1>
                <p className="recipe-description">{recipe.description}</p>
                <div className="recipe-meta">
                    <div className="meta-item">
                        <span className="meta-label">Prep Time:</span>
                        <span className="meta-value">{recipe.prepTime}</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">Cook Time:</span>
                        <span className="meta-value">{recipe.cookTime}</span>
                    </div>
                     <div className="meta-item">
                        <span className="meta-label">Servings:</span>
                        <span className="meta-value">{recipe.servings}</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="recipe-content">
            <div className="ingredients-section">
                <h2>Ingredients</h2>
                <ul className="ingredients-list">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="ingredient-item">
                            <span className="ingredient-amount">{ingredient.amount}</span>
                            <span className="ingredient-name">{ingredient.item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="instructions-section">
                <h2>Instructions</h2>
                <div className="steps-list">
                    {recipe.steps.map((step) => (
                        <div key={step.stepNumber} className="step-item">
                            <div className="step-number">{step.stepNumber}</div>
                            <p className="step-instruction">{step.instruction}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>

       <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Kukku Bakes. All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="social-link">📘</a>
            <a href="#" className="social-link">📷</a>
            <a href="#" className="social-link">🐦</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default RecipePage
