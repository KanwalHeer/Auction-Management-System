'use client'
import { useState } from 'react';
import Link from 'next/link';
import { MdMenu, MdClose } from 'react-icons/md';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 p-2">
      <div className="container mx-auto flex justify-center items-center">
       
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-4`}
        >
          <Link href="/" className="text-white hover:text-green-100">
            Home
          </Link>
         
          <Link href="/auctionList" className="text-white hover:text-green-100">
            Auctions
          </Link>
          <Link href="/createAuction" className="text-white hover:text-green-100">
            Create Action
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
