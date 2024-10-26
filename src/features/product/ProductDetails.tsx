import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import ProductDetails from '../../utils/productdetail';
import { Button } from '../../components';
import { IoCheckmarkSharp } from "react-icons/io5";
import productReviews from '../../utils/productReviews';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";

interface ProductDetailProps {
  imageUrls: string[]; // Array of images for the product
  name: string;
  description: string;
  markedPrice: number;
  sellingPrice: number;
  discount: number;
  rating: number;
  availableColors: string[];
  availableSizes: string[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  imageUrls = [],
  name,
  description,
  markedPrice,
  sellingPrice,
  discount,
  rating,
  availableColors = [],
  availableSizes = [],
}) => {

  const [reviews, setReviews]=useState();
  const [selectedImage, setSelectedImage] = useState(
    imageUrls.length > 0 ? imageUrls[0] : ''
  );
  const [selectedColor, setSelectedColor] = useState(
    availableColors.length > 0 ? availableColors[0] : ''
  );
  const [selectedSize, setSelectedSize] = useState(
    availableSizes.length > 0 ? availableSizes[0] : ''
  );

  const product = ProductDetails[0]; // Using first product for demonstration
  const displayAll=reviews?productReviews: productReviews.slice(0,6);
  return (
    <div className='m-6'>
    <div className="w-full  flex flex-col lg:flex-row space-x-4 ">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex flex-col lg:flex-row  space-x-4">
        <div className="w-full h-44 mt-4 lg:w-40 ">
          <div className="flex justify-between items-center lg:h-[530px] md:flex-col  lg:ml-2">
            {product.imageUrls.length > 0 ? (
              product.imageUrls.map((image, index) => (
                <div className='h-[167px] lg:space-y-[18px] m-2' key={index}>
                  <img src={image} alt={product.name} />
                </div>
              ))
            ) : (
              <p>No Images available</p>
            )}
          </div>
        </div>

        <div className=" w-auto lg:h-[530px] gap-[12px]">
          <img
            src={product.imageUrls[0]}
            className="h-full w-full object-cover"
            alt={product.name}
          />
        </div>
      </div>




      {/* Product Details Section */}
      <div className="w-full lg:w-1/2  p-6">
        <h1>ONE LIFE GRAPHIC T-SHIRT</h1>
        <div className="flex items-center space-x-2">
          <div className="flex">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <span
                  key={index}
                  className={
                    index < product.rating
                      ? 'text-yellow-300'
                      : 'text-gray-300'
                  }
                >
                  <FaStar />
                </span>
              ))}
          </div>
          <div>{product.rating}</div>
        </div>

        {/* Prices and Discount */}
        <div className="mt-4 flex space-x-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              ${(product.sellingPrice)?.toFixed(2)}
            </span>
            <span className="text-gray-500 line-through">
              ${(product.markedPrice)?.toFixed(2)}
            </span>
          </div>
          <div className="text-sm inline-block px-3 flex items-center rounded-full bg-red-100 text-red-500 font-semibold">
            {product.discount}%
          </div>
        </div>

        <p className="text-gray-400">{product.description}</p>

        {/* Available Colors */}
        <div className="space-x-2 border-t mt-4 border-stone-300 pt-2">
  {product.colors.map((color, index) => (
    <button
      key={index}
      className="w-8 h-8 rounded-full relative"
      style={{ backgroundColor: color }}
      onClick={() => setSelectedColor(color)}
    >
      {color === selectedColor && (
        <IoCheckmarkSharp  className="absolute inset-0 m-auto text-white" />
      )}
    </button>
  ))}
</div>
        {/* Available Sizes */}
        <div className="space-x-2 border-t mt-4 border-stone-300 pt-2">
          {product.sizes.map((size, index) => (
            <button
              key={index}
              className={`px-8 py-2 rounded-full ${size === selectedSize ? 'bg-black text-white' : 'bg-gray-200'
                }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Add to Cart Section */}
        <div className="flex w-full mt-4">
          <div className="w-1/2 flex items-center justify-center">
            {/* Counter Section */}
            <p>Counter</p>
          </div>
          <div className="w-1/2">
            <Button bgColor="bg-black" textColor="text-white" className="w-full">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>

    <div className='flex justify-between'>
      <div>Product Details</div>
      <div className='border-b-2 border-black'>Rating & Reviews</div>
      <div>FAQs</div>
    </div>

          {/* Review sections */}
    <div className=''>
         <div className='flex mt-4 items-center justify-between '>
            <h1>All Reviews ( {productReviews.length} )</h1>
            <div className='space-x-4'>
              <button>filter</button>
              <select name="sort" id="">
                <option>Latest</option>
                <option value="popular">Popular</option>
                <option value="oldest">Oldest</option>
              </select>
              <Button bgColor='bg-black' textColor='text-white' className=''>write a Review</Button>
            </div>
            </div> 
            <div className=' grid grid-cols-1 lg:grid-cols-2'>
              {displayAll.map((review,index)=>(
                <div key={index} className='border w-[355px] lg:w-[610px] p-4 m-4 rounded-lg'>
                  <div className='flex justify-between'>
                  <div className='flex'>
                      {Array(5).fill(0).map((_,index)=>(
                          <span key={index}
                            className={index <review.rating?'text-yellow-300':'text-gray-300'}>
                            <FaStar/>
                          </span>
                      ) ) 
                    }
                    </div>
                    <div>
                      <HiDotsHorizontal />
                    </div>
                  </div>
                  <div className='font-bold flex items-center gap-2'>
                    <h1>
                    {review.username}
                    </h1> 
                    <p className='text-green-600'>
                      <IoIosCheckmarkCircle /> 
                    </p>
                  </div>
                  <p className='text-gray-500'>{review.review}</p>
                  <h3>Posted on {review.review_date}</h3>
                </div>
              ))}
            </div>

          
    </div>
    </div>
  );
};

export default ProductDetail