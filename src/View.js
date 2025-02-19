import React, { useState } from 'react';
import './App.css'; // Import the CSS file for custom styles

const View = () => {
  const [formData, setFormData] = useState({
    washroom: false,
    room: false,
    floor: false,
    parking: false,
    food: false,
    other: false,
    complaints: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your Service Request has been submitted!');
    console.log('Service Request Details:', formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Request Additional Services</h2>
      <form className="service-form p-4 border rounded shadow" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Select the Services You Need</label>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="washroom"
              checked={formData.washroom}
              onChange={handleChange}
            />
            <label className="form-check-label">Washroom</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="room"
              checked={formData.room}
              onChange={handleChange}
            />
            <label className="form-check-label">Room</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="floor"
              checked={formData.floor}
              onChange={handleChange}
            />
            <label className="form-check-label">Floor</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="parking"
              checked={formData.parking}
              onChange={handleChange}
            />
            <label className="form-check-label">Parking</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="food"
              checked={formData.food}
              onChange={handleChange}
            />
            <label className="form-check-label">Food</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="other"
              checked={formData.other}
              onChange={handleChange}
            />
            <label className="form-check-label">Other (Specify Below)</label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Complaints (if any)</label>
          <textarea
            className="form-control"
            rows="3"
            name="complaints"
            value={formData.complaints}
            onChange={handleChange}
            placeholder="Write your complaints here..."
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Additional Information</label>
          <textarea
            className="form-control"
            rows="3"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Provide any additional information"
          ></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary px-4 w-100 w-md-auto">
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default View;
