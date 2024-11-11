// src/utils/products.ts
import { ProductListType } from "@/features/product/ProductItemType";

export const products: ProductListType[] = [
  {
    id: 1,
    name: 'Stethoscope',
    price: 120.00,
    discounted_price: 108.00, // calculated price after discount
    discount: 10, // 10% discount
    description: 'A high-quality stethoscope for medical professionals.',
    shop_co_image: ['https://example.com/images/stethoscope.jpg'],
    rating: 2.5, // average rating
  },
  {
    id: 2,
    name: 'Blood Pressure Monitor',
    price: 60.00,
    discount: 20,
    discounted_price: 48.00,
    description: 'Digital blood pressure monitor with accurate readings.',
    shop_co_image: ['https://example.com/images/bp-monitor.jpg'],
    rating: 4.2,

  },
  {
    id: 3,
    name: 'Thermometer',
    price: 25.00,
    discount: 5,
    discounted_price: 23.75,
    description: 'Fast and accurate digital thermometer.',
    shop_co_image: ['https://example.com/images/thermometer.jpg'],
    rating: 4.0,
  },
  {
    id: 4,
    name: 'Surgical Mask',
    price: 15.00,
    discount: 15,
    discounted_price: 12.75,
    description: 'Disposable surgical mask, pack of 50.',
    shop_co_image: ['https://example.com/images/surgical-mask.jpg'],
    rating: 4.8,
  },
  {
    id: 5,
    name: 'Hand Sanitizer',
    price: 8.00,
    discounted_price: 6.00,
    discount: 25,
    description: '70% alcohol hand sanitizer gel, 100ml bottle.',
    shop_co_image: ['https://example.com/images/hand-sanitizer.jpg'],
    rating: 4.6,
  },
];

export default products;
