import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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
            <li><a onClick={() => scrollToSection('features')}>Our Specialties</a></li>
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
            <button className="btn btn-primary" onClick={() => scrollToSection('features')}>
              Explore Our Treats
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Order Now
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features section">
        <div className="container">
          <h2 className="section-title">Our Specialties</h2>
          <p className="section-subtitle">Handcrafted with love, baked to perfection</p>
          
          <div className="features-grid">
            <div className="feature-card" onClick={() => navigate('/recipe/artisan-bread')} style={{cursor: 'pointer'}}>
              <div className="feature-icon">🥖</div>
              <h3>Artisan Breads</h3>
              <p>
                Freshly baked daily using traditional techniques and the finest ingredients. 
                From sourdough to whole grain, each loaf tells a story.
              </p>
              <span className="view-recipe-link">View Recipe →</span>
            </div>

            <div className="feature-card" onClick={() => navigate('/recipe/chocolate-chip-cookies')} style={{cursor: 'pointer'}}>
              <div className="feature-icon">🍪</div>
              <h3>Cookies & Treats</h3>
              <p>
                From classic chocolate chip to innovative seasonal flavors, 
                our cookies are the perfect blend of crispy and chewy.
              </p>
               <span className="view-recipe-link">View Recipe →</span>
            </div>

             <div className="feature-card" onClick={() => navigate('/recipe/blueberry-muffins')} style={{cursor: 'pointer'}}>
              <div className="feature-icon">🧁</div>
              <h3>Blueberry Muffins</h3>
              <p>
                Soft, moist, and bursting with fresh blueberries. A perfect breakfast treat or afternoon snack.
              </p>
               <span className="view-recipe-link">View Recipe →</span>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🥐</div>
              <h3>French Pastries</h3>
              <p>
                Buttery croissants, delicate éclairs, and elegant tarts that transport 
                you to a Parisian patisserie with every bite.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎂</div>
              <h3>Wedding Cakes</h3>
              <p>
                Make your special day unforgettable with stunning wedding cakes 
                that are as beautiful as they are delicious.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🥧</div>
              <h3>Seasonal Pies</h3>
              <p>
                Homemade pies featuring seasonal fruits and time-honored recipes 
                that remind you of grandma's kitchen.
              </p>
            </div>
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
