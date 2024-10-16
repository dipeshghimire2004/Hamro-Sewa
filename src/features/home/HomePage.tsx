import React from 'react';
import { Button } from '../../components/index';
import couple from '../../assets/images/HeroSection.jpeg';

const HomePage: React.FC = () => {
  return (
    <div className="w-full flex  flex-wrap justify-center items-center  bg-[#F2F0F1]">
      {/* Left Section - Text Content */}
      <div className="w-full md:w-1/2 p-6 md:p-12 space-y-6">
        <div className="m-4 space-y-4">
          <h1 className="font-extrabold text-6xl md:text-6xl leading-tight text-gray-900">
            FIND CLOTHES THAT MATCH YOUR STYLE
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Browse through our diverse range of meticulously crafted garments, 
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <button
            type="button"
            className="bg-black hover:bg-gray-900 transition-all px-10 py-3 text-white text-lg rounded-full shadow-lg"
          >
            Shop Now
          </button>
        </div>

        {/* Statistics Section */}
        <div className="flex grid grid-cols-2 lg:grid-cols-3 gap-8 p-4 mb-4">
          <div className="flex flex-col items-center text-center border-r border-stone-400 pr-6">
            <h2 className="text-4xl font-bold text-gray-800">200+</h2>
            <p className="text-gray-600">International Brands</p>
          </div>
          <div className="flex flex-col items-center text-center border-r border-stone-400 pr-6">
            <h2 className="text-4xl font-bold text-gray-800">2,000+</h2>
            <p className="text-gray-600">High Quality Products</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold text-gray-800">30,000+</h2>
            <p className="text-gray-600">Happy Customers</p>
          </div>
        </div>
      </div>

      {/* Image*/}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={couple}
          alt="Stylish Clothing"
          className="max-w-full h-auto w-1/2"
        />
      </div>
      <div className='w-full flex grid grid-cols-3 md:grid-cols-5 bg-black text-white from-neutral-50 text-2xl  '>
        <p>VERSACE</p>
        <p>zARA</p>
        <p>GUCCI</p>
        <p>PRADA</p>
        <p>Calvin Klein</p>
      </div>
    </div>
  );
};

export default HomePage;
