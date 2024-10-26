import React,{useState} from "react";
import { Button } from "../../components";
import { FaArrowRight } from "react-icons/fa6";
import { cartItems as items } from "../../utils/cartItems";


const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState(items);

  // Calculate totals
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  const handleQuantityChange = (id: number, increment: boolean) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: increment ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="flex justify-between">
        {/* Cart Items */}
        <div className="w-2/3">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center space-x-4">
                <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover" />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm">Size: {item.size}</p>
                  <p className="text-sm">Color: {item.color}</p>
                  <p className="text-lg font-bold">${item.price}</p>
                </div>
              </div>
              {/* Quantity Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange(item.id, false)}
                  className="px-3 py-1 bg-gray-300 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, true)}
                  className="px-3 py-1 bg-gray-300 rounded"
                >
                  +
                </button>
              </div>
              {/* Remove Button */}
              <button onClick={() => removeItem(item.id)} className="text-red-500">
                🗑️
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-1/3 p-4 border rounded">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount (20%)</span>
            <span className="text-red-500">-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery Fee</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
           <div>
                <input  className="border h-10 rounded-full px-4" type="text" placeholder="Add promo code" />
                <Button bgColor="bg-black">Apply</Button>
                </div>
                <Button bgColor="bg-black" className="flex mt-4 w-full items-center gap-2 ">
                <p>Go to Checkout</p>
                <FaArrowRight />
                </Button> 
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-black text-white text-center p-6 mt-6">
        <h2 className="text-xl font-bold">Stay Up to Date About Our Latest Offers</h2>
        <div className="flex justify-center mt-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-2 rounded-l w-1/2"
          />
          <button className="p-2 bg-white text-black rounded-r">Subscribe to Newsletter</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;




{/* <div>
<input  className="border h-10 rounded-full px-4" type="text" placeholder="Add promo code" />
<Button bgColor="bg-black">Apply</Button>
</div>
<Button bgColor="bg-black" className="flex mt-4 w-full items-center gap-2 ">
<p>Go to Checkout</p>
<FaArrowRight />
</Button> */}