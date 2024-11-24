import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const CarAuctionPage = () => {
  const router = useRouter();
  const { carId } = router.query; // Fetch the carId from the URL
  const [carDetails, setCarDetails] = useState(null); // To store car details
  const [bids, setBids] = useState([]); // To store the list of bids
  const [bidAmount, setBidAmount] = useState(''); // To store the new bid

  // Default image URL
  const defaultImage = "https://images.carswitch.com/575857toyota/1807528186785247.jpg?fit=crop&w=611&h=456&auto=format,compress&sat=30&vib=10&q=46";

  useEffect(() => {
    // Simulate fetching car details from API based on carId (You can replace this with real API)
    const fetchedCarDetails = {
      carId: carId,
      carName: "Toyota Corolla 2022",
      carImage: "", // Empty string means no image available, will use default
    };

    setCarDetails(fetchedCarDetails);

    // Simulate fetching bids (Replace with real data fetching logic)
    const fetchedBids = [
      { userId: 2, bidAmount: 5000, timestamp: "2024-11-23T10:30:00" },
      { userId: 3, bidAmount: 5500, timestamp: "2024-11-23T10:45:00" },
    ];

    setBids(fetchedBids);
  }, [carId]);

  const handlePlaceBid = () => {
    if (!bidAmount || isNaN(bidAmount)) {
      alert('Please enter a valid bid amount');
      return;
    }

    // Handle placing a new bid
    const newBid = {
      userId: 4, // You can dynamically assign the user ID
      bidAmount: bidAmount,
      timestamp: new Date().toISOString(),
    };

    setBids([...bids, newBid]); // Add the new bid to the list of bids
    setBidAmount(''); // Clear the bid input field
  };

  if (!carDetails) {
    return <div>Loading car details...</div>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Auction for {carDetails.carName}</h1>
      <img
        src={carDetails.carImage || defaultImage}
        alt="Car"
        style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
      />
      <div>
        <h2>Place Your Bid</h2>
        <input
          type="number"
          placeholder="Enter your bid"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <button onClick={handlePlaceBid} style={{ padding: '10px 20px', fontSize: '16px', marginLeft: '10px' }}>
          Place Bid
        </button>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>Current Bids</h2>
        <ul>
          {bids.map((bid, index) => (
            <li key={index}>
              <strong>User {bid.userId}</strong> placed a bid of ${bid.bidAmount} at {new Date(bid.timestamp).toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarAuctionPage;
