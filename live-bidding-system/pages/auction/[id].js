import { useState } from 'react';
import { useRouter } from 'next/router';
import { useWebSocket } from '../../context/WebSocketContext';

export default function Auction() {
    const router = useRouter();
    const { id } = router.query;
    const { bids, highestBid, sendMessage } = useWebSocket();
    const [bidAmount, setBidAmount] = useState('');

    const placeBid = () => {
        sendMessage({
            action: 'placeBid',
            auctionId: parseInt(id, 10),
            userId: 1, // Replace with dynamic user ID
            bidAmount: parseInt(bidAmount, 10),
        });
        setBidAmount('');
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">Auction {id}</h1>
            <h2 className="mt-4 text-2xl">Highest Bid: ${highestBid}</h2>

            <div className="mt-4">
                <input
                    type="number"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    placeholder="Enter your bid"
                    className="p-2 border rounded"
                />
                <button
                    onClick={placeBid}
                    className="ml-2 p-2 bg-blue-500 text-white rounded"
                >
                    Place Bid
                </button>
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-bold">Bid History:</h3>
                <ul>
                    {bids.map((bid, index) => (
                        <li key={index}>
                            ${bid.bidAmount} (User {bid.userId})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
