import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../App.css'

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location])

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Kukku Bakes Logo" className="hero-logo" />
          <h1>Kukku Bakes</h1>
          <p className="hero-subtitle">Home Sweet Bakery</p>
          <p className="hero-description">
            Indulge in the warmth of freshly baked goodness. From artisan breads to decadent pastries, 
            every creation is made with love, premium ingredients, and a passion for perfection.
          </p>
          <div className="cta-buttons">
            <Link to="/recipes" className="btn btn-primary">
              Explore Our Recipes
            </Link>
            <a href="#contact" className="btn btn-secondary">
              Order Now
            </a>
          </div>
        </div>
      </section>

      {/* Recipe Categories Preview */}
      <section id="recipes-preview" className="section" style={{backgroundColor: 'var(--white)'}}>
        <div className="container">
          <h2 className="section-title">Our Specialties</h2>
          <p className="section-subtitle">Explore our delicious categories</p>
          
          <div className="category-preview-grid">
            <Link to="/recipes" className="category-preview-card">
              <div className="category-icon">🎂</div>
              <h3>Cakes</h3>
              <p>Decadent & Delicious</p>
            </Link>
            <Link to="/recipes" className="category-preview-card">
              <div className="category-icon">🍪</div>
              <h3>Cookies</h3>
              <p>Crispy & Chewy</p>
            </Link>
            <Link to="/recipes" className="category-preview-card">
              <div className="category-icon">🥖</div>
              <h3>Breads</h3>
              <p>Fresh & Artisan</p>
            </Link>
            <Link to="/recipes" className="category-preview-card">
              <div className="category-icon">🧁</div>
              <h3>Snacks</h3>
              <p>Sweet & Savory</p>
            </Link>
          </div>

          <div style={{textAlign: 'center', marginTop: 'var(--spacing-md)'}}>
             <Link to="/recipes" className="btn btn-secondary">View All Recipes</Link>
          </div>
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
              <a href="#contact" className="btn btn-primary">
                Visit Us Today
              </a>
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
    </div>
  )
}

export default HomePage
