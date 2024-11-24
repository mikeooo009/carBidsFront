import React, { createContext, useState, useEffect, useContext } from 'react';
import WebSocket from 'isomorphic-ws';

const WebSocketContext = createContext();

export const WebSocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [bids, setBids] = useState([]);
    const [highestBid, setHighestBid] = useState(0);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080'); // Update URL for production
        setSocket(ws);

        ws.onopen = () => {
            console.log('Connected to WebSocket server');
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log('Received:', data);

            if (data.event === 'newBid') {
                setBids((prev) => [...prev, data]);
                setHighestBid(data.bidAmount);
            } else if (data.event === 'joinedAuction') {
                console.log(data.message);
            } else if (data.event === 'auctionEnd') {
                alert(`Auction Ended: ${data.message}`);
            }
        };

        ws.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return () => ws.close();
    }, []);

    const sendMessage = (message) => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify(message));
        }
    };

    return (
        <WebSocketContext.Provider value={{ bids, highestBid, sendMessage }}>
            {children}
        </WebSocketContext.Provider>
    );
};

export const useWebSocket = () => useContext(WebSocketContext);
