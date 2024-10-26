// src/utils/products.ts

interface Product {
    id: number;
    name: string;
    markedPrice: number;
    discount: number;
    sellingPrice: number;
    description: string;
    imageUrl: string;
    rating: number; // rating from 0 to 5
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: 'Stethoscope',
      markedPrice: 120.00,
      discount: 10, // 10% discount
      sellingPrice: 108.00, // calculated price after discount
      description: 'A high-quality stethoscope for medical professionals.',
      imageUrl: 'https://example.com/images/stethoscope.jpg',
      rating: 2.5, // average rating
    },
    {
      id: 2,
      name: 'Blood Pressure Monitor',
      markedPrice: 60.00,
      discount: 20,
      sellingPrice: 48.00,
      description: 'Digital blood pressure monitor with accurate readings.',
      imageUrl: 'https://example.com/images/bp-monitor.jpg',
      rating: 4.2,
    },
    {
      id: 3,
      name: 'Thermometer',
      markedPrice: 25.00,
      discount: 5,
      sellingPrice: 23.75,
      description: 'Fast and accurate digital thermometer.',
      imageUrl: 'https://example.com/images/thermometer.jpg',
      rating: 4.0,
    },
    {
      id: 4,
      name: 'Surgical Mask',
      markedPrice: 15.00,
      discount: 15,
      sellingPrice: 12.75,
      description: 'Disposable surgical mask, pack of 50.',
      imageUrl: 'https://example.com/images/surgical-mask.jpg',
      rating: 4.8,
    },
    {
      id: 5,
      name: 'Hand Sanitizer',
      markedPrice: 8.00,
      discount: 25,
      sellingPrice: 6.00,
      description: '70% alcohol hand sanitizer gel, 100ml bottle.',
      imageUrl: 'https://example.com/images/hand-sanitizer.jpg',
      rating: 4.6,
    },
  ];
  
  export default products;
  