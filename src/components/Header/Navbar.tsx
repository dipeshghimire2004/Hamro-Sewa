import React from 'react';
import { Input, Button } from '../index';
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className='w-full bg-white shadow-lg'>
      <div className='container mx-auto space-x-4 py-4 flex justify-between items-center'>
        {/* Brand Name */}
        <div className='text-2xl ml-3 font-bold'>Hamro Sewa</div>

        {/* Navigation Links */}
        <nav className='hidden md:flex space-x-4 md:space-x-6 text-sm lg:text-lg font-satoshi'>
          <Link to="/shop">Shop</Link> 
          <Link to="/on-sale">On Sale</Link>
          <Link to="/new-arrival">New Arrival</Link>
          <Link to="/brands">Brands</Link>
        </nav>

        {/* Search Bar */}
        <div className='flex items-center flex-grow space-x-2 md:space-x-4 px-4 border border-stone-300 bg-gray-50/30 rounded-full'>
          <CiSearch aria-label="Search Icon" />
          <Input
            type="text"
            placeholder='Search For Products'
            className="ml-2 flex-grow bg-transparent border-none placeholder-gray-400 focus:outline-none focus:ring-0"
          />
        </div>
        <div className='space-x-2 md:space-x-4 pr-6'>
        {/* Shopping Cart and Profile Buttons */}
        <Button bgColor="bg-black"  >
          <LuShoppingCart />
        </Button>
        <button className="font-semibold bg-transparent" aria-label="Profile">
          <CgProfile />
        </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
