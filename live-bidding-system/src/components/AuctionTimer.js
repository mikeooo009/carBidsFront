import React from 'react';
import Navbar from './Navbar';
import CarListing from './CarListing';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1>Car Auctions</h1>
        <CarListing />
      </div>
    </div>
  );
}

export default App;
