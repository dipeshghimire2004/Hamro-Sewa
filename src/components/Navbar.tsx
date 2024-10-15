import React from 'react';
import { Input, Button } from './index';
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Navbar: React.FC = () => {
  return (
    <header className='bg-white shadow-lg space-x-4'>
      <div className='container mx-auto py-4 flex justify-between items-center'>
        <div className='text-2xl font-bold'>Hamro Sewa</div>
        <nav className='flex space-x-6 text-sm'>
          
            <Link to="/shop">Shop</Link> 
            <Link to="/on-sale">On Sale</Link>
            <Link to="/new-arrival">New Arrival</Link>
            <Link to="/brands">Brands</Link>
          
        </nav>
        <div className='flex space-x-4 items-center px-4 border border-stone-300 bg-gray-200 rounded-xl'>
          <CiSearch aria-label="Search Icon" />
          <Input
            type="text"
            placeholder='Search For Products' 
            className=" border-transparent rounded bg-transparent px-4 py-1 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <Button className='bg-transparent' aria-label="Shopping Cart">
            <LuShoppingCart />
          </Button>
          <Button className="font-semibold bg-transparent" aria-label="Profile">
            <CgProfile />
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
