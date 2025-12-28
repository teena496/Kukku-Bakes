import '../App.css'

function ContactPage() {
  return (
    <section className="contact section" style={{paddingTop: '100px', minHeight: 'calc(100vh - 200px)'}}>
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
  )
}

export default ContactPage
