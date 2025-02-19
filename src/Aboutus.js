import React from 'react';
import au1 from './img/au1.jpg';
import au2 from './img/au2.jpg';
import au3 from './img/au3.jpg';
import au4 from './img/au4.jpg';

const AboutUs = () => {
    return (
        <div>
        <div className="container my-5">
            <h2 className="text-center text-primary fw-bold mb-5 animate__animated animate__fadeIn">About Us</h2>

            {/* Hotel Description Section */}
            <div className="row align-items-center mb-5">
                <div className="col-md-6">
                    <img
                        src={au1}
                        alt="Hotel"
                        className="img-fluid rounded shadow-lg animate__animated animate__fadeIn "
                        style={{ animationDelay: "0.2s" }}
                    />
                </div>
                <div className="col-md-6">
                    <div className="p-4">
                        <h4 className="fw-bold mb-3 text-info animate__animated animate__fadeIn" style={{ animationDelay: "0.5s" }}>Welcome to Our Hotel</h4>
                        <p className="fs-5 animate__animated animate__fadeIn" style={{ animationDelay: "0.7s" }}>
                            Our hotel offers luxurious rooms and world-class services, ensuring that you experience true comfort and relaxation. We aim to create an unforgettable experience for each guest, blending modern design with timeless hospitality.
                        </p>
                        <p className="fs-5 animate__animated animate__fadeIn" style={{ animationDelay: "0.9s" }}>
                            From spacious rooms to exquisite dining, we offer everything you need for a perfect getaway. Let us take care of your needs while you enjoy your stay.
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Values Section */}
            <h4 className="text-center mb-4 text-info animate__animated animate__fadeIn">Our Values</h4>
            <div className="row text-center mb-5">
                <div className="col-md-4 mb-4">
                    <div className="card shadow-lg border-0 rounded-lg hover-shadow animate__animated animate__fadeIn">
                        <i className="bi bi-hand-thumbs-up fs-1 text-success mb-3"></i>
                        <div className="card-body">
                            <h5 className="card-title text-dark">Customer Satisfaction</h5>
                            <p className="card-text text-muted">We prioritize your comfort and strive to exceed your expectations with every stay.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card shadow-lg border-0 rounded-lg hover-shadow animate__animated animate__fadeIn" style={{ animationDelay: "0.5s" }}>
                        <i className="bi bi-bag-heart fs-1 text-danger mb-3"></i>
                        <div className="card-body">
                            <h5 className="card-title text-dark">Exceptional Service</h5>
                            <p className="card-text text-muted">Our staff is dedicated to providing personalized service to meet your every need.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card shadow-lg border-0 rounded-lg hover-shadow animate__animated animate__fadeIn" style={{ animationDelay: "0.7s" }}>
                        <i className="bi bi-brightness-high fs-1 text-warning mb-3"></i>
                        <div className="card-body">
                            <h5 className="card-title text-dark">Elegance & Comfort</h5>
                            <p className="card-text text-muted">We blend modern luxury with comfort to make your stay a delightful experience.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Team Section */}
            <h4 className="text-center mb-4 text-info animate__animated animate__fadeIn">Meet Our Team</h4>
            <div className="row justify-content-center">
                <div className="col-md-4 mb-4">
                    <div className="card shadow-lg rounded-lg border-0">
                        <img
                            src={au2}
                            alt="Team Member"
                            className="card-img-top border-5 mo"
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title text-dark">Lokesh</h5>
                            <p className="card-text text-muted">Hotel Manager</p>
                            <p className="text-muted">With over 3+ years of experience in the hospitality industry, Lokesh ensures a memorable experience for all guests.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card shadow-lg rounded-lg border-0">
                        <img
                            src={au3}
                            alt="Team Member"
                            className="card-img-top  border-5 mo"
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title text-dark">Avinash</h5>
                            <p className="card-text text-muted">Guest Relations</p>
                            <p className="text-muted">Avinash is the friendly face that greets our guests, ensuring they have everything they need during their stay.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card shadow-lg rounded-lg border-0">
                        <img
                            src={au4}
                            alt="Team Member"
                            className="card-img-top  border-5 mo"
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title text-dark">Satya</h5>
                            <p className="card-text text-muted">Executive Chef</p>
                            <p className="text-muted">Satya leads the culinary team with expertise, crafting mouthwatering dishes that guests rave about executive.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>


              {/* Location and Nearby Attractions Section */}
<div className="bg-light p-5 rounded-lg shadow-lg">
    <h4 className="text-center text-info mb-4 animate__animated animate__fadeIn">Explore Our Location</h4>
    <div className="row">
        <div className="col-md-6 mb-4">
            <h5 className="text-dark">Our Location</h5>
            <p className="text-muted">Located in the heart of the city, our hotel offers easy access to popular attractions and transport hubs.</p>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.701699237089!2d-73.9851308!3d40.748817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ae36d65d97%3A0x72bb505eada7b60!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623880555044!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
        <div className="col-md-6 mb-4">
            <h5 className="text-dark">Nearby Attractions</h5>
            <ul className="list-unstyled">
                <li>Empire State Building - 5 mins away</li>
                <li>Central Park - 10 mins away</li>
                <li>Times Square - 15 mins away</li>
                <li>Broadway Theater - 10 mins away</li>
                <li>Museum of Modern Art - 12 mins away</li>
            </ul>
        </div>
    </div>
</div>









{/* Awards and Recognition Section */}
<div className="bg-light p-5 rounded-lg shadow-lg">
    <h4 className="text-center text-info mb-4 animate__animated animate__fadeIn">Awards & Recognition</h4>
    <div className="row">
        <div className="col-md-4 mb-3">
            <div className="card shadow-sm p-3 rounded-lg border-0">
                <i className="bi bi-trophy fs-1 text-warning mb-3"></i>
                <div className="card-body">
                    <h5 className="card-title text-dark">Best Service Award 2024</h5>
                    <p className="card-text text-muted">Recognized for exceptional customer service and guest satisfaction.</p>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-3">
            <div className="card shadow-sm p-3 rounded-lg border-0">
                <i className="bi bi-stars fs-1 text-success mb-3"></i>
                <div className="card-body">
                    <h5 className="card-title text-dark">5-Star Excellence</h5>
                    <p className="card-text text-muted">Rated 5 stars for quality and excellence by independent reviewers.</p>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-3">
            <div className="card shadow-sm p-3 rounded-lg border-0">
                <i className="bi bi-cup-straw fs-1 text-danger mb-3"></i>
                <div className="card-body">
                    <h5 className="card-title text-dark">Top Culinary Experience</h5>
                    <p className="card-text text-muted">Awarded for offering the best dining experience in the city.</p>
                </div>
            </div>
        </div>
    </div>
</div>




<div className="offers bg-light p-4 mt-5 rounded shadow">
        <h3 className="text-success text-center fw-bold">Exclusive Offers</h3>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="p-3 border rounded bg-white shadow-sm">
              <h5 className="text-danger">Winter Escape</h5>
              <p>Get 30% off on all bookings this winter.</p>
              <button className="btn btn-outline-danger">Book Now</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 border rounded bg-white shadow-sm">
              <h5 className="text-primary">Romantic Getaway</h5>
              <p>Enjoy a candlelight dinner & spa with your stay.</p>
              <button className="btn btn-outline-primary">Explore</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 border rounded bg-white shadow-sm">
              <h5 className="text-success">Family Package</h5>
              <p>Special discounts for families & kids' activities.</p>
              <button className="btn btn-outline-success">Learn More</button>
            </div>
          </div>
        </div>
      </div>
       </div>
    );
};

export default AboutUs;
