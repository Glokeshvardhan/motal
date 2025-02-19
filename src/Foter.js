import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* Hotel Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h3 className="text-uppercase mb-3">Loki'Resorts</h3>
            <p>
              Welcome to our hotel, where luxury and comfort meet. Experience a memorable stay with world-class amenities and exceptional service. We aim to make your visit as delightful and relaxing as possible.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h3 className="text-uppercase mb-3">Quick Links</h3>
            <ul className="list-unstyled">
              <li><a href="/about-us" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/rooms" className="text-white text-decoration-none">Rooms</a></li>
              <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h3 className="text-uppercase mb-3">Follow Us</h3>
            <div>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm me-2">
                <i className="bi bi-facebook"></i> Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm me-2">
                <i className="bi bi-twitter"></i> Twitter
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm me-2">
                <i className="bi bi-instagram"></i> Instagram
              </a>
              <a href="https://www.linkedin.com/in/gotta-lokesh-014960274/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm">
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h3 className="text-uppercase mb-3">Contact Us</h3>
            <ul className="list-unstyled">
              <li><i className="bi bi-geo-alt me-2"></i> 535501, Belgam, parvathipuram, Manyam Dist</li>
              <li><i className="bi bi-telephone me-2"></i> +91 9346295263</li>
              <li><i className="bi bi-envelope me-3"></i>gottalokesh@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="row mb-4">
          <div className="col-md-12 text-center">
            <h3 className="text-uppercase mb-3">Subscribe to Our Newsletter</h3>
            <p>Get the latest updates, special offers, and exclusive deals directly in your inbox!</p>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Your Email Address" />
              <button className="btn btn-outline-light" type="button">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4 pt-3 border-top">
          <p className="mb-0">&copy; {new Date().getFullYear()} Loki'Resorts. All Rights Reserved.</p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="/terms" className="text-white text-decoration-none">Terms & Conditions</a>
            </li>
            <li className="list-inline-item">
              <a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
