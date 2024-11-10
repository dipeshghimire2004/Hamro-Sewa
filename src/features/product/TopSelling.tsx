import { useEffect, useState } from 'react';
import { FC } from 'react';
import axios, { isAxiosError } from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import ProductCard from '../../components/ProductCard';
import { ProductType } from './ProductItemType';
import { useNavigate } from 'react-router-dom';



const TopSelling: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductType[]>([]);
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

        const response = await axios.get('https://shop-co-backend-nine.vercel.app/api/product/top_selling', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        setProducts(response.data.data);
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
  }, [navigate]); // Adding navigate as dependency to trigger a rerun on changes

  if (loading) return <div>Loading...</div>;  // You can replace this with a spinner if desired

  if (products.length === 0) {
    return <div>No Top selling Item at the moment.</div>;  // Display a message if no products are found
  }

  const displayAll = showAllProducts ? products : products.slice(0, 4);

  return (
    <div className="w-full">
      <h1 className="flex justify-center items-center font-bold text-4xl">TOP SELLING</h1>
      <div className="mx-4 mt-4 grid grid-cols-2 lg:grid-cols-4">
        {displayAll.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            markedPrice={product.price}
            imageUrl={product.image_url}
            discount={product.discount}
            sellingPrice={product.discounted_price}
            rating={product.rating}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setShowAllProducts(!showAllProducts)}
          className="bg-transparent hover:bg-gray-100 border border-stone-200 rounded-full py-1 px-6 transition-all font-satoshi"
        >
          {showAllProducts ? 'Show less' : 'View All'}
        </button>
      </div>
    </div>
  );
};

export default TopSelling;
