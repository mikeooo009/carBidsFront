import React, { useState } from 'react';

function AddCarPage() {
  const [carDetails, setCarDetails] = useState({
    name: '',
    startDate: '',
    endDate: '',
    imageUrl: '',
    carId: '', // auto-generated car ID
  });

  const [carsList, setCarsList] = useState([]); // List to store the cars

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Auto-generate a car ID (in a real-world app, this would come from a backend)
    const carId = Math.floor(Math.random() * 10000); // Simulate an auto-generated ID

    // Save the car data to the list
    const newCar = {
      ...carDetails,
      carId, // Include the generated car ID
    };

    setCarsList([...carsList, newCar]); // Add the new car to the list

    // Clear the form fields
    setCarDetails({
      name: '',
      startDate: '',
      endDate: '',
      imageUrl: '',
      carId: '',
    });
  };

  return (
    <div style={containerStyle}>
      <h1>Add Car Auction</h1>

      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroupStyle}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={carDetails.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label>Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={carDetails.imageUrl}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label>Start Date:</label>
          <input
            type="datetime-local"
            name="startDate"
            value={carDetails.startDate}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label>End Date:</label>
          <input
            type="datetime-local"
            name="endDate"
            value={carDetails.endDate}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <button type="submit" style={buttonStyle}>
          Add Car
        </button>
      </form>

      <h2>Car Auctions List</h2>
      <ul>
        {carsList.map((car) => (
          <li key={car.carId} style={carItemStyle}>
            <strong>{car.name}</strong> (ID: {car.carId})
            <br />
            <img
              src={car.imageUrl}
              alt={car.name}
              style={{ width: '100px', height: 'auto' }}
            />
            <p>Start Date: {new Date(car.startDate).toLocaleString()}</p>
            <p>End Date: {new Date(car.endDate).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Style objects for the page
const containerStyle = {
  textAlign: 'center',
  marginTop: '20px',
  padding: '20px',
};

const formStyle = {
  marginBottom: '20px',
};

const inputGroupStyle = {
  marginBottom: '10px',
};

const inputStyle = {
  padding: '10px',
  width: '250px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
};

const carItemStyle = {
  margin: '10px 0',
  border: '1px solid #ddd',
  padding: '10px',
  borderRadius: '8px',
};

export default AddCarPage;
