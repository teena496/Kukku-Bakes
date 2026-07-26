import { Link, Navigate, useParams } from 'react-router-dom'
import { useRecipes } from '../context/RecipeContext'
import type { RecipeCategory } from '../data/recipes'
import '../App.css'

const categoryDetails: Record<string, {
  name: RecipeCategory
  icon: string
  description: string
}> = {
  cakes: {
    name: 'Cakes',
    icon: '🎂',
    description: 'Celebration cakes, comforting classics, and beautifully decorated bakes.',
  },
  cookies: {
    name: 'Cookies',
    icon: '🍪',
    description: 'Crisp, chewy, buttery cookies made for sharing.',
  },
  breads: {
    name: 'Breads',
    icon: '🥖',
    description: 'Soft enriched loaves, artisan breads, and sweet pull-apart favourites.',
  },
  snacks: {
    name: 'Snacks',
    icon: '🧁',
    description: 'Small bakes and delicious treats for any time of day.',
  },
}

function CategoryPage() {
  const { category } = useParams()
  const { recipes } = useRecipes()
  const details = category ? categoryDetails[category.toLowerCase()] : undefined

  if (!details) {
    return <Navigate to="/recipes" replace />
  }

  const categoryRecipes = recipes.filter(
    (recipe) => recipe.category === details.name,
  )

  return (
    <section className="recipes section category-page">
      <div className="container">
        <Link to="/recipes" className="category-back-link">
          ← All categories
        </Link>

        <header className="category-page-header">
          <span className="category-page-icon" aria-hidden="true">
            {details.icon}
          </span>
          <div>
            <h1 className="section-title">{details.name}</h1>
            <p className="section-subtitle">{details.description}</p>
          </div>
        </header>

        {categoryRecipes.length > 0 ? (
          <div className="features-grid">
            {categoryRecipes.map((recipe) => (
              <Link
                key={recipe.id}
                to={`/recipe/${recipe.id}`}
                className="feature-card recipe-card-link"
              >
                <div className="card-image-wrapper">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="card-image"
                  />
                </div>
                <div className="card-content">
                  <h2>{recipe.title}</h2>
                  <p>{recipe.description}</p>
                  <div className="recipe-card-meta">
                    <span>Prep: {recipe.prepTime}</span>
                    <span>Bake: {recipe.cookTime}</span>
                  </div>
                  <span className="view-recipe-link">View Recipe →</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="category-empty">No recipes have been added here yet.</p>
        )}
      </div>
    </section>
  )
}

export default CategoryPage
