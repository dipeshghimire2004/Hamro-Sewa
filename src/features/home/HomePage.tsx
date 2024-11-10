import React from 'react';
import { Button } from '../../components/index';
import couple from '../../assets/images/HeroSection.jpeg';
import Versace from '../../assets/images/Versace.svg'
import zara from '../../assets/images/zara.svg'
import gucci from '../../assets/images/gucci-logo-1 1.svg'
import prada from '../../assets/images/prada-logo.svg'
import calvinKlein from '../../assets/images/CalvinKlien.svg'




const HomePage: React.FC = () => {

  const brandsImages=[
    {
      id:1,
      image:Versace
    },
    {
      id:2,
      image:zara
    },
    {
      id:3,
      image:gucci
    },
    {
      id:4,
      image:prada,
    },
    {
      id:5,
      image:calvinKlein,
    }
  ]

  return (
    <div className="w-360 flex flex-wrap justify-center items-center dark:bg-gray-950 dark:text-white bg-[#F2F0F1] text-black">
      {/* Left Section - Text Content */}
      <div className="w-full md:w-full lg:w-1/2 p-6 md:p-12 space-y-6">
        <div className="m-4 space-y-8">
          <h1 className="font-extrabold text-6xl md:text-6xl text-center leading-tight text-gray-900">
            FIND CLOTHES THAT MATCH YOUR STYLE
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Browse through our diverse range of meticulously crafted garments, 
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <Button
            type="button"
            bgColor='bg-black'
            className="sm:w-full md:w-[210px] h-12 hover:bg-white hover:text-black duration-300 transition-all px-10 py-3 text-white text-lg rounded-full shadow-lg"
          >
            Shop Now
          </Button>
        </div>

        {/* Statistics Section */}
        <div className="h-16 inline-block flex grid grid-cols-2 lg:grid-cols-3 gap-8 p-4 mb-4 md:mb-8 lg:mb-0">
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
      <div className="w-full md:w-full lg:w-1/2 flex items-center justify-center mt-28 lg:mt-6">
        <img
          src={couple}
          alt="Stylish Clothing"
          className="max-w-full h-auto w-1/2"
        />
      </div>
      <div className='w-full h-28 top-[797px] flex items-center justify-center grid grid-cols-3 md:grid-cols-5 bg-black text-white text-2xl  lg:mt-0'>
        {brandsImages.map((brand) => (
          <div key={brand.id}>
            <img src={brand.image} alt={`Brand ${brand.id}`} className="h-8 w-auto object-contain" />
          </div>
        ))}
      </div>

    </div>
  );
};

export default HomePage;


{/* <p>VERSACE</p>
        <p>zARA</p>
        <p>GUCCI</p>
        <p>PRADA</p>
        <p>Calvin Klein</p> */}