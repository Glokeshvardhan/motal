import React, { useState } from 'react';
import re1 from './img/Read1.webp';



import './App.css'; // Import the CSS file
import he from './img/header1.png'
import hw from './img/header2.jpg'
import hww from './img/header3.webp'
import haa from './img/header4.webp'
import hag from './img/header5.jpeg'
import hea from './img/header6.jpg'
import vsa from './img/header7.jpg'
import vsaa from './img/header8.jpg'
import vsaaa from './img/header9.jpg'
import cmr from './img/header10.jpg'
import cmr1 from './img/header11.webp'
import cmr2 from './img/header12.jpg'


const Readmore1 = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
        roomType: "Standard",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking Details:", formData);
        alert("Booking Submitted Successfully!");
      };
  return (
    <div>
    <section className="container mt-5 pt-5">
      <div className="row align-items-center">
        {/* Left side: Image with left curve and right sharp edge */}
        <div className="col-md-6 text-center">
          <img src={re1} alt="Hotel" className="img-fluid custom-image mt-4"  />
        </div>

        {/* Right side: Text with transparent background */}
        <div className="col-md-6">
          <div className="custom-text p-4">
            <h2>Rooms & Suites:</h2>
            <p>Experience the perfect blend of comfort and luxury with our elegantly designed rooms and suites. Whether you're traveling for business or leisure, our accommodations provide a relaxing retreat with modern amenities and stylish decor.

Each room is thoughtfully furnished with plush bedding, high-speed Wi-Fi, and breathtaking views to ensure a memorable stay. Our suites offer additional space, premium furnishings, and exclusive services for a truly indulgent experience.
.</p>
          </div>
        </div>
      </div>
    </section>

    <div class='container w-100 owq'></div>

    <div class="unique-carousel mot p-4 ">
        <div class="unique-carousel-track ">
          <img src={hw} class="full-screen-image w-25" alt="" />
          <img src={hww} class="full-screen-image w-25" alt="" />
          <img src={haa} class="full-screen-image w-25" alt="" />
          <img src={hag} class="full-screen-image w-25" alt="" />
          <img src={hea} class="full-screen-image w-25" alt="" />
          <img src={hw} class="full-screen-image w-25" alt="" />
          <img src={hww} class="full-screen-image w-25" alt="" />
          <img src={haa} class="full-screen-image w-25" alt="" />
          <img src={hag} class="full-screen-image w-25" alt="" />
          <img src={hea} class="full-screen-image w-25" alt="" />
        </div>
      </div>




      <div className="container mt-5">
      <h2 className="text-center mb-4">Book Your Stay</h2>
      <form className="p-4 border rounded shadow bg-light" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="tel" className="form-control" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Check-in Date</label>
            <input type="date" className="form-control" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Check-out Date</label>
            <input type="date" className="form-control" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Guests</label>
            <input type="number" className="form-control" name="guests" min="1" value={formData.guests} onChange={handleChange} required />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Room Type</label>
            <select className="form-select" name="roomType" value={formData.roomType} onChange={handleChange} required>
              <option value="Standard">Standard</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Suite">Suite</option>
            </select>
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary px-4 w-100 w-md-auto">Book Now</button>
        </div>
      </form>
    </div>



    </div>
  );
};

export default Readmore1;
