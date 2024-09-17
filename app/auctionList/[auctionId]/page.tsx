'use client'

import React, { useEffect, useState } from 'react';


interface Auction {
  id: number;
  name: string;
  description: string;
  startingPrice: number;
  currentPrice: number;
  endTime: string;
  imageUrl: string;
}

export default function AuctionDetail({ params }: { params: { auctionId: string } }) {
  const [auction, setAuction] = useState<Auction | null>(null);
  const auctionId = parseInt(params.auctionId, 10);

  useEffect(() => {
    const fetchAuction = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!apiUrl) {
          throw new Error('API URL is not defined');
        }

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const auctionDetail = data.find((item: Auction) => item.id === auctionId);
        setAuction(auctionDetail || null);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchAuction();
  }, [auctionId]);

  if (!auction) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Auction Detail</h2>
      <div className="border border-gray-300 p-6 rounded-lg shadow-lg bg-white">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">{auction.name}</h3>
        <p className="text-lg text-gray-700 mb-4">Start Price: <span className="font-semibold">${auction.startingPrice}</span></p>
        <p className="text-lg text-gray-700 mb-4">Current Price: <span className="font-semibold">${auction.currentPrice}</span></p>
        <p className="text-lg text-gray-700 mb-4">End Time: <span className="font-semibold">{new Date(auction.endTime).toLocaleString()}</span></p>
        <p className="text-lg text-gray-700">Description:</p>
        <p className="text-gray-600 mt-2">{auction.description}</p>
      </div>
    </div>
  );
}
