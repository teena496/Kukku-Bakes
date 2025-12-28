import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { recipes } from '../data/recipes'
import type { RecipeCategory, Recipe } from '../data/recipes'
import '../App.css'

function HomePage() {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  // Group recipes by category
  const categories: RecipeCategory[] = ['Cakes', 'Cookies', 'Breads', 'Snacks'];
  
  const getRecipesByCategory = (category: RecipeCategory): Recipe[] => {
    return recipes.filter(recipe => recipe.category === category);
  }

  return (
    <div className="home-page">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo-container">
            <img src="/logo.png" alt="Kukku Bakes Logo" className="logo" />
            <span className="brand-name">Kukku Bakes</span>
          </div>
          <ul className="nav-links">
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('recipes')}>Recipes</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <img src="/logo.png" alt="Kukku Bakes Logo" className="hero-logo" />
          <h1>Kukku Bakes</h1>
          <p className="hero-subtitle">Home Sweet Bakery</p>
          <p className="hero-description">
            Indulge in the warmth of freshly baked goodness. From artisan breads to decadent pastries, 
            every creation is made with love, premium ingredients, and a passion for perfection.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('recipes')}>
              Explore Our Recipes
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Order Now
            </button>
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section id="recipes" className="recipes section">
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

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                At Kukku Bakes, we believe that baking is more than just mixing ingredients—it's 
                about creating moments of joy and bringing people together. Founded with a passion 
                for traditional baking methods and a commitment to quality, we've been serving our 
                community with love-filled treats.
              </p>
              <p>
                Every morning, our ovens come alive with the aroma of fresh bread, pastries, and 
                cakes. We source the finest local ingredients and use time-tested recipes passed 
                down through generations, while also embracing innovation to create new favorites.
              </p>
              <p>
                Whether you're celebrating a milestone, hosting a gathering, or simply treating 
                yourself, Kukku Bakes is here to make every moment sweeter.
              </p>
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                Visit Us Today
              </button>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80" 
                alt="Fresh baked goods" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">We'd love to hear from you</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <h3>Visit Us</h3>
              <p>123 Baker Street<br />Sweet Town, ST 12345</p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <h3>Call Us</h3>
              <p>(555) 123-4567<br />Mon-Sat: 7am - 7pm</p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <h3>Email Us</h3>
              <p>hello@kukkubakes.com<br />orders@kukkubakes.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Kukku Bakes. All rights reserved.</p>
          <p>Made with ❤️ and lots of flour</p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">📘</a>
            <a href="#" className="social-link" aria-label="Instagram">📷</a>
            <a href="#" className="social-link" aria-label="Twitter">🐦</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
