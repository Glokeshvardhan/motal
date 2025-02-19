import React from 'react'
import { NavLink } from 'react-router-dom';

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

const Home = () => {
  return (
    <div>
     



      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active ">
            <img src={he} className="full-screen-image pt-5 " alt="" />
          </div>

        </div>
      </div>


      <div class='container w-100 owq'></div>



      <div class="unique-carousel bg-black p-2">
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

      <div class='container w-100 owq'></div>


      <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-10">
          <div className="row d-flex justify-content-center">
          
            <div className="col-12 col-sm-6 col-md-4 p-2">
              <div className="bg-white text-center p-3 shadow rounded">
                <NavLink to="/Contact">
                <img src={vsa} className="img-fluid p-2" alt="Security" />
                </NavLink>
                <b className="d-block mt-2">Security</b>
              </div>
            </div>

          
            <div className="col-12 col-sm-6 col-md-4 p-2">
              <div className="bg-white text-center p-3 shadow rounded">
                <NavLink to="/Readmore1">
                <img src={vsaa} className="img-fluid p-2" alt="Maintenance" />
                </NavLink>
                <b className="d-block mt-2">Maintenance</b>
              </div>
            </div>

        
            <div className="col-12 col-sm-6 col-md-4 p-2">
              <div className="bg-white text-center p-3 shadow rounded">
               <NavLink to= "/Contact">
                <img src={vsaaa} className="img-fluid p-2" alt="Customer Service" />
                </NavLink>
                <b className="d-block mt-2">Customer Services</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className="container-fluid w-100 p-4 bg-light">
      <div className="container p-4 rounded shadow bg-white">
        {/* Header Section */}
        <h2 className="text-dark fw-bold">Guest Review</h2>

        <div className="d-flex align-items-center gap-3">
          <div
            className="rounded-circle text-white fw-bold d-flex align-items-center justify-content-center"
            style={{
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, #007bff, #00d4ff)',
              fontSize: '1.2rem',
            }}
          >
            8.5
          </div>
          <div className="fw-semibold fs-5">Very Good</div>
          <span className="text-muted fs-6">124 reviews</span>
          <small className="text-primary ms-auto">Read all reviews</small>
        </div>

        {/* Categories Section */}
        <h5 className="pt-4">Categories</h5>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            {/* Staff */}
            <div className="mb-3 p-3 shadow-sm rounded bg-white">
              <div className="d-flex align-items-center justify-content-between">
                <b>Staff</b>
                <i className="bi bi-arrow-up fs-5 text-success"></i>
              </div>
              <div className="progress" style={{ height: '10px' }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: '88%',
                    background: 'linear-gradient(90deg, #007bff 0%, #00d4ff 100%)',
                  }}
                ></div>
              </div>
              <span className="text-muted small">8.8</span>
            </div>

            {/* Comfort */}
            <div className="mb-3 p-3 shadow-sm rounded bg-white">
              <div className="d-flex align-items-center justify-content-between">
                <b>Comfort</b>
                <i className="bi bi-arrow-up fs-5 text-success"></i>
              </div>
              <div className="progress" style={{ height: '10px' }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: '88%',
                    background: 'linear-gradient(90deg, #007bff 0%, #00d4ff 100%)',
                  }}
                ></div>
              </div>
              <span className="text-muted small">8.8</span>
            </div>

            {/* Free Wifi */}
            <div className="mb-3 p-3 shadow-sm rounded bg-white">
              <div className="d-flex align-items-center justify-content-between">
                <b>Free Wifi</b>
                <i className="bi bi-arrow-up fs-5 text-success"></i>
              </div>
              <div className="progress" style={{ height: '10px' }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: '80%',
                    background: 'linear-gradient(90deg, #007bff 0%, #00d4ff 100%)',
                  }}
                ></div>
              </div>
              <span className="text-muted small">8.1</span>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            {/* Facilities */}
            <div className="mb-3 p-3 shadow-sm rounded bg-white">
              <div className="d-flex align-items-center justify-content-between">
                <b>Facilities</b>
                <i className="bi bi-arrow-up fs-5 text-success"></i>
              </div>
              <div className="progress" style={{ height: '10px' }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: '87%',
                    background: 'linear-gradient(90deg, #007bff 0%, #00d4ff 100%)',
                  }}
                ></div>
              </div>
              <span className="text-muted small">8.7</span>
            </div>

            {/* Value for Money */}
            <div className="mb-3 p-3 shadow-sm rounded bg-white">
              <div className="d-flex align-items-center justify-content-between">
                <b>Value for Money</b>
                <i className="bi bi-arrow-up fs-5 text-success"></i>
              </div>
              <div className="progress" style={{ height: '10px' }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: '80%',
                    background: 'linear-gradient(90deg, #007bff 0%, #00d4ff 100%)',
                  }}
                ></div>
              </div>
              <span className="text-muted small">8.1</span>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-12">
            {/* Cleanliness */}
            <div className="mb-3 p-3 shadow-sm rounded bg-white">
              <div className="d-flex align-items-center justify-content-between">
                <b>Cleanliness</b>
                <i className="bi bi-arrow-up fs-5 text-success"></i>
              </div>
              <div className="progress" style={{ height: '10px' }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: '87%',
                    background: 'linear-gradient(90deg, #007bff 0%, #00d4ff 100%)',
                  }}
                ></div>
              </div>
              <span className="text-muted small">8.7</span>
            </div>

            {/* Location */}
            <div className="mb-3 p-3 shadow-sm rounded bg-white">
              <div className="d-flex align-items-center justify-content-between">
                <b>Location</b>
                <i className="bi bi-arrow-up fs-5 text-success"></i>
              </div>
              <div className="progress" style={{ height: '10px' }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: '88%',
                    background: 'linear-gradient(90deg, #007bff 0%, #00d4ff 100%)',
                  }}
                ></div>
              </div>
              <span className="text-muted small">8.8</span>
            </div>
          </div>
        </div>
      </div>
    </div>



     
      <div class='container w-100 owq'></div>



     






      <div class='container w-100 owq'></div>

      <div className="container-fluid py-4" style={{ backgroundColor: "rgb(0, 136, 113)" }}>
  <div className="row justify-content-center">
    {/* Card 1 */}
    <div className="col-12 col-sm-6 col-md-4 p-3">
      <div className="card text-left shadow-lg border-0">
        <img src={cmr} className="img-fluid p-2 pa" alt="Maintenance" />
        
        <NavLink to="/Moreinfo" className="btn btn-primary mnb  mb-3 w-75 mx-auto">More Info</NavLink>
        <div className="card-body">
          <h4 className='p-2'>Comfort room:</h4>

          <p className="card-text">a room that provides sanctuary from stress, and/or can be a place for persons to experience feelings within acceptable boundaries. </p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-12 col-sm-6 col-md-4 p-3">
      <div className="card text-left shadow-lg border-0">
        <img src={cmr1} className="img-fluid p-2 pa" alt="Maintenance" />
        <NavLink to="/Moreinfo"className="btn btn-primary mnb  mb-3 w-75 mx-auto">More Info</NavLink>
        <div className="card-body">
        <h4 className='p-2'>Executive room:</h4>

          <p className="card-text">An executive room is a hotel room that's designed for business travelers and offers extra space, amenities, and services.</p>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-12 col-sm-6 col-md-4 p-3">
      <div className="card text-left shadow-lg border-0">
        <img src={cmr2} className="img-fluid p-2 pa" alt="Maintenance" />
        <NavLink to="/Moreinfo" className="btn btn-primary mnb  mb-3 w-75 mx-auto">More Info</NavLink>
        <div className="card-body">
        <h4 className='p-2'>Garden View Room:</h4>

          <p className="card-text">A "Garden View Room" is a hotel room that offers a direct view of the surrounding gardens, typically featuring a balcony or window overlooking lush greenery.</p>
        </div>
      </div>
    </div>
  </div>
</div>


<div class='container w-100 owq'></div>




    </div>
    )
}

export default Home