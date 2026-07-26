import { useState, useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import '../App.css'

function MainLayout() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
        <div className="container nav-container">
          <Link to="/" className="logo-container">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Kukku Bakes Logo" className="logo" />
            <span className="brand-name">Kukku Bakes</span>
          </Link>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/recipes">Recipes</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Kukku Bakes"
                className="footer-logo"
              />
              <span>Kukku Bakes</span>
            </Link>
            <p>
              Celebration cakes and homemade cookies, thoughtfully baked to
              make life’s sweetest moments even more special.
            </p>
          </div>

          <div className="footer-column">
            <h2>Explore</h2>
            <nav className="footer-links" aria-label="Footer navigation">
              <Link to="/">Home</Link>
              <Link to="/recipes">Recipes</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          <div className="footer-column footer-connect">
            <h2>Follow Along</h2>
            <p>See my latest cakes, cookies, and baking inspiration.</p>
            <a
              href="https://www.instagram.com/kukku_bakes/"
              target="_blank"
              rel="noreferrer"
              className="instagram-link"
              aria-label="Follow Kukku Bakes on Instagram"
            >
              <span aria-hidden="true">◎</span>
              @kukku_bakes
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kukku Bakes. All rights reserved.</p>
          <p>Made with <span aria-label="love">♥</span> and a lot of flour</p>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
