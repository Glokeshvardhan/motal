import React from 'react';

const ContactPage = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row">
        {/* Contact Information */}
        <div className="col-md-6">
          <div className="bg-light p-4 rounded shadow">
            <h4 className="mb-3">Our Location</h4>
            <p>535501, Belgam, parvathipuram, Manyam Dist</p>
            <p><strong>Email:</strong> gottalokesh@gmail.com</p>
            <p><strong>Phone:</strong> +91 9346295263</p>
            <p><strong>Working Hours:</strong> 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-6">
          <div className="bg-light p-4 rounded shadow">
            <h4 className="mb-3">Get in Touch</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Your message here..."></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary px-5">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>

  

     

      {/* Google Map Section */}
      <div className="my-5">
        <h4 className="text-center mb-3">Find Us on the Map</h4>
        <div style={{ height: '400px', borderRadius: '10px', overflow: 'hidden' }}>
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.7184396548214!2d83.3133957107512!3d17.710756183162733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39436d41958883%3A0xe0af48edae5bd5ea!2sNovotel%20Visakhapatnam%20Varun%20Beach!5e0!3m2!1sen!2sin!4v1739808304829!5m2!1sen!2sin"
            style={{ width: '100%', height: '100%' }} 
            allowFullScreen
            title="Novotel Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
