import { Link } from 'react-router-dom'
import { useRecipes } from '../context/RecipeContext'
import type { RecipeCategory } from '../data/recipes'
import '../App.css'

const categories: {
  name: RecipeCategory
  slug: string
  icon: string
  description: string
}[] = [
  { name: 'Cakes', slug: 'cakes', icon: '🎂', description: 'Celebration cakes and comforting classics' },
  { name: 'Cookies', slug: 'cookies', icon: '🍪', description: 'Crisp, chewy, and buttery favourites' },
  { name: 'Breads', slug: 'breads', icon: '🥖', description: 'Fresh loaves and sweet enriched breads' },
  { name: 'Snacks', slug: 'snacks', icon: '🧁', description: 'Small bakes and anytime treats' },
]

function RecipesPage() {
  const { recipes } = useRecipes()

  return (
    <section className="recipes section" style={{paddingTop: '100px'}}>
        <div className="container">
          <h1 className="section-title">Recipe Categories</h1>
          <p className="section-subtitle">Choose a collection to discover your next bake</p>

          <div className="category-preview-grid category-directory">
            {categories.map((category) => {
              const count = recipes.filter(
                (recipe) => recipe.category === category.name,
              ).length

              return (
                <Link
                  key={category.slug}
                  to={`/recipes/${category.slug}`}
                  className="category-preview-card"
                >
                  <div className="category-icon">{category.icon}</div>
                  <h2>{category.name}</h2>
                  <p>{category.description}</p>
                  <span className="category-recipe-count">
                    {count} {count === 1 ? 'recipe' : 'recipes'}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
  )
}

export default RecipesPage
