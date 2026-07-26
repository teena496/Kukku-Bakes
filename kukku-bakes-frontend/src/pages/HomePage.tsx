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
            I create beautiful celebration cakes and irresistible homemade cookies, carefully baked
            to make every occasion a little sweeter. I also enjoy baking fresh breads for my
            family and everyday home needs.
          </p>
          <div className="cta-buttons">
            <Link to="/recipes" className="btn btn-primary">
              Explore Our Recipes
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Order Now
            </Link>
          </div>
        </div>
      </section>

      {/* Recipe Categories Preview */}
      <section id="recipes-preview" className="section" style={{backgroundColor: 'var(--white)'}}>
        <div className="container">
          <h2 className="section-title">Our Specialties</h2>
          <p className="section-subtitle">Explore our delicious categories</p>
          
          <div className="category-preview-grid">
            <Link to="/recipes/cakes" className="category-preview-card">
              <div className="category-icon">🎂</div>
              <h3>Cakes</h3>
              <p>Made for Every Celebration</p>
            </Link>
            <Link to="/recipes/cookies" className="category-preview-card">
              <div className="category-icon">🍪</div>
              <h3>Cookies</h3>
              <p>Fresh, Buttery & Irresistible</p>
            </Link>
            <Link to="/recipes/breads" className="category-preview-card">
              <div className="category-icon">🥖</div>
              <h3>Breads</h3>
              <p>Wholesome Home Baking</p>
            </Link>
            <Link to="/recipes/snacks" className="category-preview-card">
              <div className="category-icon">🧁</div>
              <h3>Snacks</h3>
              <p>Sweet & Savory</p>
            </Link>
          </div>

          <div style={{textAlign: 'center', marginTop: 'var(--spacing-md)'}}>
             <Link to="/recipes" className="btn btn-secondary view-all-recipes-btn">View All Recipes</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>My Baking Story</h2>
              <p>
                At Kukku Bakes, my passion is creating cakes that make celebrations memorable and
                cookies that bring a little joy to any day. Every bake is prepared with care,
                attention to detail, and quality ingredients.
              </p>
              <p>
                From birthdays and anniversaries to simple family moments, I love turning ideas
                into delicious cakes and sharing comforting batches of homemade cookies. Bread is
                also part of my baking journey, made mainly for my family and our everyday needs.
              </p>
              <p>
                Whether you are planning a special occasion or simply craving a sweet treat,
                Kukku Bakes is here to help make the moment feel special.
              </p>
              <Link to="/contact" className="btn btn-primary visit-us-btn">
                Visit Us Today
              </Link>
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
