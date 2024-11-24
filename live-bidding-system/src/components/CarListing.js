import React, { useState, useEffect } from 'react';
import AuctionTimer from './AuctionTimer';

function CarListing() {
  // Sample car data (this would be dynamic in a real application)
  const cars = [
    {
      id: 1,
      model: "Audi A4, 2.0T Ultra Premium",
      auctionEnd: new Date().getTime() + 3600000, // 1 hour from now
      currentBid: 2000,
      image: 'https://example.com/car1.jpg',
      seller: 'Avenel New Jersey'
    },
    {
      id: 2,
      model: "Audi A4, 3.0T Premium",
      auctionEnd: new Date().getTime() + 7200000, // 2 hours from now
      currentBid: 2500,
      image: 'https://example.com/car2.jpg',
      seller: 'Avenel New Jersey'
    }
  ];

  return (
    <div style={listingContainerStyle}>
      {cars.map((car) => (
        <div key={car.id} style={carCardStyle}>
          <img src={car.image} alt={car.model} style={carImageStyle} />
          <h3>{car.model}</h3>
          <p>Seller: {car.seller}</p>
          <p>Current Bid: ${car.currentBid}</p>
          <AuctionTimer endTime={car.auctionEnd} />
        </div>
      ))}
    </div>
  );
}

const listingContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '20px'
};

const carCardStyle = {
  border: '1px solid #ddd',
  padding: '20px',
  textAlign: 'center',
  borderRadius: '10px'
};

const carImageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '10px'
};

export default CarListing;
