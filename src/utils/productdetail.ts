import tshirt1 from '../assets/images/tshirt1.svg';
import tshirt2 from '../assets/images/tshirt2.svg';
import tshirt3 from '../assets/images/tshirt3.svg';

// tshirt1,  // Remove the curly braces
// tshirt2,  // Remove the curly braces
// tshirt3,


// src/utils/products.ts
import { ProductListType, ProductDetailType } from "@/features/product/ProductItemType";

export const Productdetail: ProductDetailType[] = [
  {
    id: 1,
    name: 'Stethoscope',
    price: 120.00,
    discount: 10, // 10% discount
    discounted_price: 108.00, // calculated price after discount
    description: 'A high-quality stethoscope for medical professionals.',
    shop_co_image: 'https://example.com/images/stethoscope.jpg',
    rating: 2.5, // average rating
    stock_quantity: 50,
    category: 'Medical',
    style: 'Classic',
    type: 'Tool',
    sizes: 'N/A',
    image_url: 'https://example.com/images/stethoscope.jpg',
  },
  {
    id: 2,
    name: 'Blood Pressure Monitor',
    price: 60.00,
    discount: 20,
    discounted_price: 48.00,
    description: 'Digital blood pressure monitor with accurate readings.',
    shop_co_image: 'https://example.com/images/bp-monitor.jpg',
    rating: 4.2,
    stock_quantity: 120,
    category: 'Medical',
    style: 'Modern',
    type: 'Tool',
    sizes: 'N/A',
    image_url: 'https://example.com/images/bp-monitor.jpg',
  },
  // Other products...
];
