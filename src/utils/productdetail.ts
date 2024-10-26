import tshirt1 from '../assets/images/tshirt1.svg';
import tshirt2 from '../assets/images/tshirt2.svg';
import tshirt3 from '../assets/images/tshirt3.svg';

const productdetail = [
  {
    id: 1,
    name: "Stylish Shirt",
    description: "A stylish and comfortable shirt made from high-quality materials.",
    markedPrice: 15.00,
      discount: 15,
      sellingPrice: 12.75,
    rating: 3.5,
    imageUrls: [
      tshirt1,  // Remove the curly braces
      tshirt2,  // Remove the curly braces
      tshirt3,  // Remove the curly braces
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Black"],
    stock: 10,
  },
  {
    id: 2,
    name: "Casual Pants",
    description: "Casual pants perfect for everyday wear. Soft, comfortable, and stylish.",
    markedPrice: 8.00,
    discount: 25,
    sellingPrice: 6.00,
    rating: 4.2,
    imageUrls: [
      tshirt1,  // Remove the curly braces
      tshirt2, 
    ],
    sizes: ["S", "M", "L"],
    colors: ["Green", "Khaki", "Navy"],
    stock: 5,
  },
];

export default productdetail;
