'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';


interface Auction {
  id: number;
  name: string;
  description: string;
  startingPrice: number;
  currentPrice: number;
  endTime: string;
  imageUrl: string;
}

const AuctionList: React.FC = () => {
  const [auctions, setAuctions] = useState<Auction[]>([]);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!apiUrl) {
          throw new Error('API URL is not defined');
        }

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch auctions');
        }
        const data = await response.json();
        setAuctions(data);
      } catch (error) {
        console.error('Error fetching auctions:', error);
      }
    };

    fetchAuctions();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Available Auctions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {auctions.map((auction) => (
          <div
            key={auction.id}
            className="border border-gray-200 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
          
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{auction.name}</h3>
              <p className="text-gray-600 mb-1">Starting Price: ${auction.startingPrice}</p>
              <p className="text-gray-600 mb-4">Ends on: {new Date(auction.endTime).toLocaleDateString()}</p>
              <Link
                href={`/auctionList/${auction.id}`}
                className="inline-block text-blue-500 hover:text-blue-700 font-semibold transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuctionList;
