import React from 'react';
import { FaStar } from 'react-icons/fa';

interface ProductCardProps {
  id?:number;
  image_url: string;
  name: string;
  // description: string;
  price: number; // Original Price (before discount)
  discounted_price: number; // Discounted Price
  discount: number; // Discount Percentage
  rating: number; // Rating out of 5
}

const ProductCard: React.FC<ProductCardProps> = ({
  // id,
  image_url,
  name,
  // description,
  price=0,
  discounted_price=0,
  discount=0,
  rating=0
}) => {
  const formattedPrice = price.toFixed(2);
  const formattedDiscountedPrice = discounted_price.toFixed(2);
  return (
    <div className="max-w-xs  bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out m-4">
      
      <img
        className="w-full h-72 object-cover rounded-t-lg"
        src={image_url}
        alt={name}
      />
      <div className="p-4">
        <h3 className="text-[20px] font-bold  text-gray-800">{name}</h3>
        {/* <p className="hidden text-gray-600 mt-2">{description}</p> */}

          {/* Rating */}
          <div className="flex items-center h-5 gap-2 mt-2">
          <div className="flex space-x-1">
            {/* {Array.from({ length: 5 }, (_, index) => (
              <span key={index} className={index<rating? 'text-yellow-300':'text-gray-300'
              }>
                <FaStar size={16} />
              </span>
            ))} */}
            {Array(5).fill(0).map((_,index)=>(
              <span key={index} className={index<rating?'text-yellow-300':'text-gray-300'}>
                <FaStar/>
                
              </span>
            ))}
            
          </div>
          {rating}
        </div>

        
        {/* Prices and Discount */}
        <div className="mt-2 flex space-x-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">${formattedDiscountedPrice}</span>
            <span className="text-gray-500 line-through">${formattedPrice}</span>
          </div>
          <div className="text-sm inline-block px-3  flex items-center rounded-full bg-red-100 text-red-500 font-semibold">{discount}%</div>
        </div>

      
        {/* <Link to={`/productdetail/${id}`}>View Details</Link> */}

        
        {/* Add to Cart Button */}
        {/* <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out">
          Add to Cart
        </button> */}
      </div>
    </div>
  );
};

export default ProductCard;
