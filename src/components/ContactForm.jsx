// src/components/ContactForm.jsx
function ContactForm() {
  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <div>
          <h2>Request a Quote</h2>
          <p>
            Share your requirements and the team will get back with a customized
            logistics solution.
          </p>
          <ul className="contact-info">
            <li>Phone: +91-XXXXXXXXXX</li>
            <li>Email: info@shubhaamlogistics.com</li>
            <li>Head Office: Your address here</li>
          </ul>
        </div>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Company" />
          </div>
          <textarea rows="4" placeholder="Tell us about your shipment" />
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
