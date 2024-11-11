import React, { useState } from 'react';
import { Input} from '../index';
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { HiX } from "react-icons/hi"; // Icons for menu open/close
import { IoMenu } from "react-icons/io5";
import useDarkMode from '../../hooks/useDarkMode';


const Navbar: React.FC = () => {
  const {isDarkMode, toggleDarkMode}=useDarkMode();

  

  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State for search bar expansion in mobile view
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className='w-full max-w-[1340px] min-w-[390px] flex items-center bg-white mt-4 lg:mt-6 lg:mx-24 pb-4  '>
     
      <div className='container h-12  space-x-2 lg:space-x-10 py-4 flex justify-between items-center'>
        {/* Mobile Menu Icon */}
        <div className='flex  space-x-2'>
          <div className='md:hidden flex items-center'>
            <button 
              className="text-xl p-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <HiX /> : < IoMenu  />}
            </button>
          </div>
              {/* Mobile Menu Links */}
          {isMenuOpen && (
            <nav className='md:hidden bg-white absolute top-16 w-full shadow-md'>
              <ul onClick={() => setIsMenuOpen(false)} className='flex flex-col  space-y-4 p-4'>
                <li><Link to="/shop" >Shop</Link></li>
                <li><Link to="/on-sale" >On Sale</Link></li>
                <li><Link to="/new-arrival" >New Arrival</Link></li>
                <li><Link to="/brands" >Brands</Link></li>
                {/* <li><button onClick={toggleDarkMode}>{isDarkMode?"🌙":"🔆"}</button></li> */}
              </ul>
            </nav>
          )}
          {/* Brand Name */}
          <div className='text-2xl font-bold'><Link to='/'>HamroSewa</Link></div>
        </div>
        {/* Desktop Navigation Links */}
        <nav className='hidden md:flex space-x-4 md:space-x-6 text-sm lg:text-lg font-satoshi'>
          <Link to="/shop">Shop</Link> 
          <Link to="/on-sale">On Sale</Link>
          <Link to="/new-arrival">New Arrival</Link>
          <Link to="/brands">Brands</Link>
        </nav>

        {/* Search Bar */}
        <div className={`flex items-center flex-grow space-x-2 md:space-x-4 px-4 border border-stone-300 bg-gray-50/30 rounded-full ${isSearchOpen ? 'flex' : 'hidden'} md:flex`}>
          <button>
            <IoSearchOutline aria-label="Search Icon" />  
          </button>
          <Input
            type="text"
            placeholder='Search For Products'
            className="ml-2 flex-grow bg-[#F2F0F1] border-none placeholder-gray-[#00000066] focus:outline-none focus:ring-0"
          />
        </div>
        <div className='flex space-x-4'>
          {/* Search Button for Mobile */}
          <button 
            className={`cursor-pointer  md:hidden ${isSearchOpen ? 'hidden' : 'flex'}`} 
            onClick={() => setIsSearchOpen(true)} 
            aria-label="Expand Search"
          >
          <IoSearchOutline/>
          </button>

          {/* Cart and Profile Icons */}
          <div className='flex space-x-2 md:space-x-4 pr-6 ml-2'>
            <Link to='/yourcart' className='bg-transparent' aria-label="Shopping Cart">
              <LuShoppingCart />
            </Link>
            <button className="font-semibold bg-transparent" aria-label="Profile">
              <CgProfile />
            </button>
          </div>
          <div className=' shadow-lg  '>
        <button onClick={toggleDarkMode}>{isDarkMode? "🌙" : "🔆"}</button>

      </div>
        </div>
      </div>

      
    </header>
  );
}

export default Navbar;
