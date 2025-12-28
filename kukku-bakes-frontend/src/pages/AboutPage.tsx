import '../App.css'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <section className="about section" style={{paddingTop: '100px', minHeight: 'calc(100vh - 200px)'}}>
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
              <Link to="/contact" className="btn btn-primary">
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
  )
}

export default AboutPage
