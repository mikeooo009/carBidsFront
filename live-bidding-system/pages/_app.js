import Navbar from '@/components/Navbar';
import React, { useState, useEffect } from 'react';

function Auction() {
    const [bids, setBids] = useState([]);

    useEffect(() => {
        const socket = new WebSocket('wss://wxve1j1fe8.execute-api.us-east-1.amazonaws.com/dev/');

        socket.onopen = () => {
            console.log('WebSocket connected');
            const message = {
                action: 'placeBid',
                auctionId: 1,
                userId: 2,
                bidAmount: 6000
            };
            socket.send(JSON.stringify(message));
        };

        socket.onmessage = (event) => {
            console.log('Message from server:', event.data);
            const data = JSON.parse(event.data);

            // Update the bids
            setBids((prevBids) => [...prevBids, data]);
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        return () => socket.close(); // Clean up on unmount
    }, []);

    return (
        <div>
          <Navbar />
            <h1>Car Auctions</h1>
            <h2>Current Bids</h2>
            <ul>
                {bids.map((bid, index) => (
                    <li key={index}>
                        User {bid.userId} bid ${bid.bidAmount} on Auction {bid.auctionId}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Auction;
