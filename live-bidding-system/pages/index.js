import Link from 'next/link';

export default function Home() {
    // Simulate auction data; replace with real data from an API or state
    const auctions = []; // Replace with an array of auction objects if available

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">Live Car Auctions</h1>

            {auctions.length === 0 ? (
                <p className="mt-4 text-red-500">The list is empty.</p>
            ) : (
                <ul className="mt-4">
                    {auctions.map((auction) => (
                        <li key={auction.id}>
                            <Link href={`/auction/${auction.id}`} className="text-blue-500">
                                Auction {auction.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
