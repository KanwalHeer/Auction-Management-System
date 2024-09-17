'use client';
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
 
  // Set toggle state
  const [toggleMenu, setToggleMenu] = useState(false);
  // Toggle function
  const toggleMenuHandle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div>
      {/* Navbar for md and lg screens */}
      <div className="hidden md:flex lg:flex items-center justify-center py-6 text-blue-700 font-bold px-6">
        {/* Links on the left side */}
        <div className="flex space-x-8">
          <Link href={'/'} className="text-lg hover:border-b-2 hover:border-blue-800">Home</Link>
          <Link href={'/auctionList'} className="text-lg hover:border-b-2 hover:border-blue-800">Auctions</Link>
          <Link href={'/createAuction'} className="text-lg hover:border-b-2 hover:border-blue-800">Creat Auction</Link>
        </div>
      </div>
      {/* Navbar for small screens */}
      <div className="flex md:hidden justify-center items-end p-3 text-blue-700 font-bold rounded-md">
      <div>
        <button onClick={toggleMenuHandle} className="text-2xl">
          {toggleMenu ? <FaTimes /> : <FaBars />}
        </button>
        </div>
      </div>

      {/* Menu for small screens */}
      {toggleMenu && (
        <div className="lg:hidden text-white font-bold bg-blue-700/30 p-4">
          <Link href={'/'} className="block px-4 py-2 hover:bg-blue-700 text-lg">Home</Link>
          <Link href={'/auctionList'} className="block px-4 py-2 hover:bg-blue-700 text-lg">Auctions</Link>
          <Link href={'/createAuction'} className="block px-4 py-2 hover:bg-blue-700 text-lg">Creat Auction</Link>
          
        </div>
      )}
    </div>
  );
}
