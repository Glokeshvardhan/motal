import React from "react";
import r1 from "./img/room1.jpg";
import r2 from "./img/room2.avif";
import r3 from "./img/room3.jpg";
import r4 from "./img/room4.jpg";
import { NavLink } from "react-router-dom";

const Rooms = () => {
  return (
    <div className="container-fluid mot p-2 my-5">

      <section className="container my-5">
        {/* Hero Section for Rooms */}
        <div className="hero-section bg-image text-center text-black py-5">
          <div className="container">
            <h1 className="display-3 fw-bold">Rooms & Suites</h1>
            <p className="lead">Luxurious stays tailored to your needs. Choose your perfect room today!</p>
          </div>
        </div>
        <div className="row flex-column gap-3">
  {/* Room Cards - Dynamic rendering */}
  {[1, 2, 3].map((item) => (
    <div
      key={item}
      className="card nps shadow-sm p-3"
    >
      <div className="d-flex flex-row align-items-center flex-wrap">
        {/* Image Section (Left Side) */}
        <div className="w-50">
          <img
            src={item === 1 ? r1 : item === 2 ? r2 : r3}
            className="img-fluid rounded auto-hover-effect"
            alt="Room"
            style={{ maxHeight: "200px", objectFit: "cover", width: "100%" }}
          />
        </div>
        {/* Text Section (Right Side) */}
        <div className="w-50 ps-3">
          <h5 className="card-title fw-bold">
            {item === 1
              ? "Highly comfort and highinic rooms"
              : item === 2
              ? "Full large room 0f AC"
              : "Garden view room"}
          </h5>
          <div className="d-flex align-items-center">
            <i className="bi bi-currency-rupee"></i>
            <p className="card-text m-0 ms-1">{item === 1 ? "8,000/Day" : item === 2 ? "5,000/Day" : "6,000/Day"}</p>
          </div>
          {/* Star Rating */}
          <div className="d-flex align-items-center">
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill" style={{ color: "#B0B0B0" }}></i>
          </div>
          {/* Read More Button */}
          <div className="d-flex justify-content-center justify-content-md-end mt-3 mt-md-0">
  <NavLink
    className="nav-link active btn btn-primary px-4 py-2"
    to="/Readmore1"
    aria-current="page"
  >
    Read More
  </NavLink>
</div>

        </div>
      </div>
    </div>
  ))}
</div>


        {/* Amenities Section */}
        <div className="container my-5">
          <h2 className="text-center mb-4">Hotel Amenities</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm p-3">
                <i className="bi bi-wifi fs-1 text-primary"></i>
                <h5 className="mt-3">Free Wi-Fi</h5>
                <p>Stay connected with high-speed internet available throughout the hotel.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm p-3">
                <i className="bi bi-thermometer-sun fs-1 text-primary"></i>
                <h5 className="mt-3">Temperature Control</h5>
                <p>Enjoy the perfect temperature with adjustable air conditioning and heating.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm p-3">
                <i className="bi bi-cup fs-1 text-primary"></i>
                <h5 className="mt-3">Room Service</h5>
                <p>Order from our 24/7 room service menu and enjoy delicious meals in the comfort of your room.</p>
              </div>
            </div>
          </div>
        </div>
      </section>




      <div>

      </div>

      <div className="container-fluid p-0">
        <div id="roomCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={r4}
                className="img-fluid rounded"
                alt="Room"
                style={{ maxHeight: "350px", objectFit: "cover", width: "100%" }}
              />              <div className="carousel-caption bg-dark bg-opacity-50 rounded p-2">
                <h1 className="fw-bold">Luxury Stays at Affordable Prices</h1>
                <p>Discover our comfortable and well-equipped rooms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="container my-5 p-4 bg-light rounded shadow">
        <h2 className="text-center fw-bold mb-4">Book Your Stay</h2>
        <form>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label">Check-in Date</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Check-out Date</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Guests</label>
              <select className="form-select">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-primary px-5">Check Availability</button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Rooms;
