import { useEffect, useState } from 'react';
import { FC } from 'react';
import axios, { isAxiosError } from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import ProductCard from '../components/ProductCard';
import { ProductListType } from '../features/product/ProductItemType';
import { useNavigate } from 'react-router-dom';

// interface NewArrivalProduct {
//   id: number;
//   name: string;
//   rating: number;
//   price: number;
//   discount: number;
//   discounted_price: number;
//   image_url: string;
//   sizes: string[];
// }

const NewArrival: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductListType[]>([]);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const navigate = useNavigate();  

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const token = Cookies.get('access');
        if (!token) {
      
          toast.error('Please login to view new arrivals.');
          navigate('/login');  
          return;
        }

        const response = await axios.get('https://shop-co-backend-nine.vercel.app/api/product/new_arrival', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        const formattedProducts = response.data.data.map((product: any) => ({
          id: product.id,
          name: product.name || 'Unnamed Product',
          image_url: product.image_url || '/default-image.jpg', // Fallback for missing image
          price: parseFloat(product.price) || 0, // Ensure it's a number
          discounted_price: parseFloat(product.discounted_price) || 0,
          discount: product.discount || Math.max(0, 100 - Math.round((product.discounted_price / product.price) * 100)), // Calculate if missing
          rating: Math.min(Math.max(product.rating || 0, 0), 5), // Clamp rating between 0 and 5
        }));
        setProducts(formattedProducts);
      } catch (error) {
        if (isAxiosError(error)) {
          const errMsg = error.response?.data?.message || 'Failed to fetch new arrivals';
          toast.error(errMsg); 
        }
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewArrivals();
  }, [navigate]);

  if (loading) return <div>Loading...</div>;  

  if (products.length === 0) {
    return <div>No new arrivals at the moment.</div>;  
  }

  const displayAll = showAllProducts ? products : products.slice(0, 4);

  return (
    <div className="w-full">
      <h1 className="flex justify-center items-center font-bold text-4xl">NEW ARRIVALS</h1>
      <div className="mx-4 mt-4 grid grid-cols-2 lg:grid-cols-4">
        {displayAll.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image_url={product.image_url}
            discount={product.discount}
            discounted_price={product.discounted_price}
            rating={product.rating}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setShowAllProducts(!showAllProducts)}
          className="w-[218px] h-[52px] bg-transparent mt-9 hover:bg-gray-100 border border-stone-200 rounded-full py-1 px-6 transition-all font-satoshi"
        >
          {showAllProducts ? 'Show less' : 'View All'}
        </button>
      </div>
    </div>
  );
};

export default NewArrival;
