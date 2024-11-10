import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import ProductDetails from '../../utils/productdetail';
import { Button } from '../../components';
import { IoCheckmarkSharp } from 'react-icons/io5';
import productReviews from '../../utils/productReviews';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { HiDotsHorizontal } from 'react-icons/hi';

interface ProductDetailProps {
  imageUrls: string[];
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
  const [reviews, setReviews] = useState(productReviews);
  const [selectedImage, setSelectedImage] = useState(
    imageUrls.length > 0 ? imageUrls[0] : ''
  );
  const [selectedColor, setSelectedColor] = useState(
    availableColors.length > 0 ? availableColors[0] : ''
  );
  const [selectedSize, setSelectedSize] = useState(
    availableSizes.length > 0 ? availableSizes[0] : ''
  );
  const [quantity, setQuantity] = useState(1);

  const product = ProductDetails[0];
  const displayReviews = reviews ? reviews : productReviews.slice(0, 6);

  // Handle quantity increment and decrement
  const handleQuantityChange = (type: string) => {
    setQuantity((prevQuantity) =>
      type === 'increment' ? prevQuantity + 1 : Math.max(1, prevQuantity - 1)
    );
  };

  return (
    <div className="m-6">
      <div className="w-full flex flex-col lg:flex-row space-x-4">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row space-x-4">
          <div className="w-full h-44 mt-4 lg:w-40">
            <div className="flex justify-between items-center lg:h-[530px] md:flex-col lg:ml-2">
              {imageUrls.length > 0 ? (
                imageUrls.map((image, index) => (
                  <div className="h-[167px] lg:space-y-[18px] m-2" key={index}>
                    <button onClick={() => setSelectedImage(image)}>
                      <img src={image} alt={name} />
                    </button>
                  </div>
                ))
              ) : (
                <p>No Images available</p>
              )}
            </div>
          </div>
          <div className="w-auto lg:h-[530px] gap-[12px]">
            <img
              src={selectedImage}
              className="h-full w-full object-cover"
              alt={name}
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full lg:w-1/2 p-6">
          <h1>{name}</h1>
          <div className="flex items-center space-x-2">
            <div className="flex">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <span
                    key={index}
                    className={
                      index < rating ? 'text-yellow-300' : 'text-gray-300'
                    }
                  >
                    <FaStar />
                  </span>
                ))}
            </div>
            <div>{rating}</div>
          </div>

          {/* Prices and Discount */}
          <div className="mt-4 flex space-x-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                ${sellingPrice?.toFixed(2)}
              </span>
              <span className="text-gray-500 line-through">
                ${markedPrice?.toFixed(2)}
              </span>
            </div>
            <div className="text-sm px-3 flex items-center rounded-full bg-red-100 text-red-500 font-semibold">
              {discount}%
            </div>
          </div>
          <p className="text-gray-400">{description}</p>

          {/* Available Colors */}
          <div className="space-x-2 border-t mt-4 border-stone-300 pt-2">
            {availableColors.map((color, index) => (
              <button
                key={index}
                className="w-8 h-8 rounded-full relative"
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              >
                {color === selectedColor && (
                  <IoCheckmarkSharp className="absolute inset-0 m-auto text-white" />
                )}
              </button>
            ))}
          </div>

          {/* Available Sizes */}
          <div className="space-x-2 border-t mt-4 border-stone-300 pt-2">
            {availableSizes.map((size, index) => (
              <button
                key={index}
                className={`px-8 py-2 rounded-full ${
                  size === selectedSize ? 'bg-black text-white' : 'bg-gray-200'
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Add to Cart Section */}
          <div className="flex w-full mt-4">
            <div className="w-1/2 flex items-center justify-center space-x-2">
              <button
                onClick={() => handleQuantityChange('decrement')}
                className="px-2 text-lg font-bold"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={() => handleQuantityChange('increment')}
                className="px-2 text-lg font-bold"
              >
                +
              </button>
            </div>
            <div className="w-1/2">
              <Button bgColor="bg-black" textColor="text-white" className="w-full">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-6 border-b-2 pb-2 border-gray-300">
        <div>Product Details</div>
        <div className="font-semibold text-black">Rating & Reviews</div>
        <div>FAQs</div>
      </div>

      {/* Review Section */}
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h1>All Reviews ({reviews.length})</h1>
          <div className="space-x-4">
            <button>Filter</button>
            <select name="sort" id="">
              <option>Latest</option>
              <option value="popular">Popular</option>
              <option value="oldest">Oldest</option>
            </select>
            <Button bgColor="bg-black" textColor="text-white">
              Write a Review
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {displayReviews.map((review, index) => (
            <div key={index} className="border w-full p-4 m-4 rounded-lg">
              <div className="flex justify-between">
                <div className="flex">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <span
                        key={index}
                        className={
                          index < review.rating ? 'text-yellow-300' : 'text-gray-300'
                        }
                      >
                        <FaStar />
                      </span>
                    ))}
                </div>
                <HiDotsHorizontal />
              </div>
              <div className="font-bold flex items-center gap-2">
                <h1>{review.username}</h1>
                <p className="text-green-600">
                  <IoIosCheckmarkCircle />
                </p>
              </div>
              <p className="text-gray-500">{review.review}</p>
              <h3>Posted on {review.review_date}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
