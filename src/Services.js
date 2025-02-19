import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import se1 from "./img/se1.webp";
import se2 from "./img/se2.jpg";
import se3 from "./img/se3.jpg";
import se4 from "./img/se4.webp";
import se5 from "./img/se5.jpg";
import se6 from "./img/se6.jpg";
import se7 from "./img/se7.webp";
import se8 from "./img/se8.jpg";
import se9 from "./img/se9.jpg";
import { NavLink } from "react-router-dom";



const services = [
  { id: 1, image: se1, title: "WashRoom Services" },
  { id: 2, image: se2, title: "Room Services" },
  { id: 3, image: se3, title: "Floor Services" },
  { id: 4, image: se4, title: "Parking Services" },
  { id: 5, image: se5, title: "Food Services" },
  { id: 6, image: se6, title: "Other Services" },
];

const Services = () => {
  return (
    <div>
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">Our Hotel Services</h2>
        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 col-12">
              <div className="card shadow border-0">
                <img src={service.image} className="card-img-top bos" alt={service.title} />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{service.title}</h5>
                  <NavLink to="/View" className="btn btn-primary mt-2">View Details</NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>




      </div>


      {/* Hotel Services Section */}
      <div className="bg-light p-5 rounded-lg shadow-lg">
        <h4 className="text-center text-info mb-4 animate__animated animate__fadeIn">Our Exclusive Services</h4>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded-lg">
              <img
                src={se7}
                alt="Spa"
                className="card-img-top bos"
              />
              <div className="card-body">
                <h5 className="card-title">Spa & Wellness</h5>
                <p className="card-text text-muted">Indulge in luxurious spa treatments and unwind with our wellness programs.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded-lg">
              <img
                src={se8}
                alt="Gym"
                className="card-img-top bos"
              />
              <div className="card-body">
                <h5 className="card-title">Fitness Center</h5>
                <p className="card-text text-muted">Stay fit with our state-of-the-art fitness center, open 24/7 for guests.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded-lg">
              <img
                src={se9}
                alt="Restaurant"
                className="card-img-top bos"
              />
              <div className="card-body">
                <h5 className="card-title">Gourmet Dining</h5>
                <p className="card-text text-muted">Experience exquisite dining with a variety of gourmet dishes prepared by top chefs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Services;
