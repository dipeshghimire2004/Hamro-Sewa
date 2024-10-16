import React from 'react';
import { FaStar } from 'react-icons/fa';

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  markedPrice: number; // Original Price (before discount)
  sellingPrice: number; // Discounted Price
  discount: number; // Discount Percentage
  rating: number; // Rating out of 5
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  description,
  markedPrice,
  sellingPrice,
  discount,
  rating
}) => {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={image}
        alt={name}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        
        {/* Prices and Discount */}
        <div className="mt-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 line-through">${markedPrice.toFixed(2)}</span>
            <span className="text-lg font-bold text-gray-900">${sellingPrice.toFixed(2)}</span>
          </div>
          <div className="text-sm text-green-500 font-semibold">Save {discount}%</div>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex space-x-1">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} className={index<rating? 'text-yellow-300':'text-gray-300'
              }>
                <FaStar size={16} />
              </span>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
