import React, { useEffect, useState } from 'react';
import axios, { isAxiosError } from 'axios';
import Cookies from 'js-cookie';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductDetailType } from './ProductItemType';
import { FaStar } from 'react-icons/fa';
import { Button } from '@/components';
import toast from 'react-hot-toast';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { HiDotsHorizontal } from 'react-icons/hi';

type ReviewType = {
  username: string;
  review: string;
  review_date: string;
  rating: number;
};

type ApiResponse<T> = {
  data: T;
};

const ProductDetails: React.FC = () => {
  const [productDetails, setProductDetails] = useState<ProductDetailType | null>(null);
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) {
      navigate('/');
      return;
    }

    const fetchProductDetail = async () => {
      setLoading(true);
      setError(null);

      try {
        const token = Cookies.get('access');
        if (!token) {
          toast.error('Please log in to view product details');
          navigate('/login');
          return;
        }

        const response = await axios.get<ApiResponse<ProductDetailType>>(
          `https://shop-co-backend-nine.vercel.app/api/product/${id}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setProductDetails(response.data.data);
          toast.success('Product details loaded successfully!');
        } else {
          throw new Error('Failed to load product details');
        }
      } catch (error) {
        if (isAxiosError(error)) {
          const errMsg = error.response?.data?.message || 'Failed to fetch product details';
          toast.error(errMsg);
          setError(errMsg);
        } else {
          toast.error('An unexpected error occurred');
        }
        setProductDetails(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id, navigate]);

  useEffect(() => {
    const fetchProductReviews = async () => {
      try {
        const response = await axios.get<ApiResponse<ReviewType[]>>(
          `https://shop-co-backend-nine.vercel.app/api/product/review/${id}`
        );

        if (response.status === 200) {
          setReviews(response.data.data);
        } else {
          throw new Error('Failed to load reviews');
        }
      } catch (error) {
        if (isAxiosError(error)) {
          const errMsg = error.response?.data?.message || 'Failed to fetch reviews';
          toast.error(errMsg);
        } else {
          toast.error('An unexpected error occurred');
        }
      }
    };

    if (id) fetchProductReviews();
  }, [id]);

  const handleQuantityChange = (type: string) => {
    setQuantity((prevQuantity) =>
      type === 'increment' ? prevQuantity + 1 : Math.max(1, prevQuantity - 1)
    );
  };

  return (
    <div className="product-details m-6">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message text-red-500">{error}</p>
      ) : productDetails ? (
        <div>
          <div className="w-full flex flex-col lg:flex-row space-x-4">
            <div className="w-full lg:w-1/2 flex flex-col lg:flex-row space-x-4">
              <div className="w-full h-44 mt-4 lg:w-40">
                <img
                  src={productDetails.image_url}
                  alt={productDetails.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-6">
              <h1 className="text-2xl font-bold">{productDetails.name}</h1>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <span
                        key={index}
                        className={index < productDetails.rating ? 'text-yellow-300' : 'text-gray-300'}
                      >
                        <FaStar />
                      </span>
                    ))}
                </div>
                <div>{productDetails.rating}</div>
              </div>

              <div className="mt-4 flex space-x-3">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">
                    ${productDetails.discounted_price}
                  </span>
                  <span className="text-gray-500 line-through">${productDetails.price}</span>
                </div>
                <div className="text-sm px-3 flex items-center rounded-full bg-red-100 text-red-500 font-semibold">
                  {productDetails.discount}%
                </div>
              </div>

              <p className="text-gray-400">{productDetails.description}</p>

              <div className="space-x-2 border-t mt-4 border-stone-300 pt-2">
                {productDetails.sizes.map((size, index) => (
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
                  <Button
                    bgColor="bg-black"
                    textColor="text-white"
                    className="w-full"
                    onClick={() =>
                      toast.success(`${quantity} item(s) added to the cart`, {
                        duration: 3000,
                      })
                    }
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>

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
                <Button onClick={()=>navigate('/reviewform')} bgColor="bg-black" textColor="text-white">
                  Write a Review
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {reviews.map((review, index) => (
                <div key={index} className="border w-full p-4 m-4 rounded-lg">
                  <div className="flex justify-between">
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, idx) => (
                          <span
                            key={idx}
                            className={idx < review.rating ? 'text-yellow-300' : 'text-gray-300'}
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
      ) : (
        <p>No Product details found.</p>
      )}
    </div>
  );
};

export default ProductDetails;
