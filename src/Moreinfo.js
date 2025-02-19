import React from "react";
import "./App.css"; // Custom styles
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

const Moreinfo = () => {
  return (
    <section className="hotel-info mt-5">
      <div className="container">
        <h2 className="section-title">Discover Our Hotel</h2>
        <p className="section-subtitle">
          Experience the best hospitality with top-notch services.
        </p>

        <div className="grid-container">
          <div className="info-card">
            <h3>Luxury Rooms</h3>
            <p>Experience comfort and elegance in our modern-designed rooms.</p>
          </div>
          <div className="info-card">
            <h3>Fine Dining</h3>
            <p>Enjoy exquisite meals prepared by world-class chefs.</p>
          </div>
          <div className="info-card">
            <h3>Swimming Pool</h3>
            <p>Relax and unwind in our stunning infinity pool.</p>
          </div>
          <div className="info-card">
            <h3>Spa & Wellness</h3>
            <p>Indulge in luxury spa treatments to refresh your senses.</p>
          </div>
          <div className="info-card">
            <h3>Event Spaces</h3>
            <p>Host meetings, weddings, and events in elegant venues.</p>
          </div>
          <div className="info-card">
            <h3>Fitness Center</h3>
            <p>Stay active with our state-of-the-art gym facilities.</p>
          </div>
          <div className="info-card">
            <h3>Kids' Club</h3>
            <p>Fun-filled activities and games for our young guests.</p>
          </div>
          <div className="info-card">
            <h3>Private Beach</h3>
            <p>Enjoy exclusive access to our serene private beach.</p>
          </div>
          <div className="info-card">
            <h3>Parking & Valet</h3>
            <p>Secure parking and valet services for your convenience.</p>
          </div>
          <div className="info-card">
            <h3>24/7 Concierge</h3>
            <p>Personalized services to enhance your stay.</p>
          </div>
        </div>
      </div>


  



<div class="unique-carousel bg-black p-2 mt-5">
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
    </section>
  );
};

export default Moreinfo;
