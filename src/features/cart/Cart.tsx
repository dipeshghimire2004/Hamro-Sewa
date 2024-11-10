import React,{useState} from "react";
import { Button } from "../../components";
import { FaArrowRight } from "react-icons/fa6";
import { cartItems as items } from "../../utils/cartItems";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { GrSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineDiscount } from "react-icons/md";
import Breadcrumb from "../../components/Breadcrumb";

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState(items);

  // Calculate totals
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  const handleQuantityChange=(id:number, increment:boolean)=>{
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id===id
        ?{
          ...item, 
          quantity:increment? item.quantity +1 : Math.max(1, item.quantity -1),
        }
        :item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div className="sm:mx-4 md:mx-2 lg:mx-20 p-1 lg:p-2">
      <Breadcrumb/>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="w-full flex flex-col lg:flex-row gap-6">
        {/* Cart Items */}
        <div className="sm:w-full md:w-full lg:w-2/3  max-w-[740px] max-h-[508px] overflow-scroll custom-scrollbar rounded-xl border border-gray-500 p-4 space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="py-2 border-b-2 ">
              <div className="flex  w-full h-40 items-center space-x-4">
                <img src={item.imageUrl} alt={item.name} className="sm:w-24 lg:w-40 lg:h-40  object-cover" />
                <div className=" w-full flex flex-col p-2 space-y-2 h-40 content-between">
                  
                  <div className="flex justify-between  ">
                  <h2 className="text-xl font-bold">{item.name}</h2>
                    <button onClick={() => removeItem(item.id)} className="text-red-500 w-6">
                      <RiDeleteBin6Fill />
                    </button>
                  </div>

                  <p className="text-sm">Size: {item.size}</p>
                  <p className="text-sm">Color: {item.color}</p>

                  <div className="flex items-center mt-10  justify-between">
                    <p className="text-3xl  font-bold">${item.price}</p>
                     {/* Quantity Controls */}
                  <div className="flex items-center justify-around w-40 text-xl h-11 bg-gray-300 px-4 py-2 rounded-full space-x-3 ">
                    <button
                    className="text-2xl"
                      onClick={() => handleQuantityChange(item.id, false)}

                    >
                      <GrSubtract />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                    
                    className="text-2xl"
                      onClick={() => handleQuantityChange(item.id, true)}
                      
                    >
                      <IoMdAdd />
                    </button>
                  </div>
                </div>
                  </div>
                </div>
              </div>

              
          ))}
        </div>

        {/* Order Summary */}
        <div className="sm:w-full lg:w-2/5 max-w-[550px] max-h-[460px] p-4 border border-gray-500 rounded-xl ">
          <h2 className="text-xl font-bold my-6">Order Summary</h2>
          <div className="flex justify-between mb-5">
            <span>Subtotal</span>
            <span className="font-bold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-5">
            <span>Discount (20%)</span>
            <span className="font-bold text-red-500">-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-5 py-4 border-b-2">
            <span>Delivery Fee</span>
            <span className="font-bold">${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xl  font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
           <div className="flex justify-center items-center mt-4 space-x-4">
              <div className="relative px-4 bg-gray-200 rounded-full" >
              <MdOutlineDiscount className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500' />

                <input type='text' className=" h-10 rounded-full px-4 focus:outline-none bg-transparent focus:ring-0" placeholder=" Add promo code" />
              </div>
                <Button bgColor="bg-black px-8">Apply</Button>
                </div>
                <Button bgColor="bg-black" className="flex my-6 w-full items-center gap-2 ">
                <p>Go to Checkout</p>
                <FaArrowRight />
                </Button> 
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-black flex flex-col lg:flex-row  text-white text-center p-6 mt-6 items-center justify-between">
        <h2 className="text-4xl sm:w-full lg:w-1/2 font-bold">Stay Up to Date About Our Latest Offers</h2>
        <div className="flex flex-col sm:w-full lg:w-1/3 gap-4">
          <div className="flex justify-center mt-4 ">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-2 rounded-full text-black w-full"
            />
          </div>
          
          <button className="p-2 bg-white text-black rounded-full">Subscribe to Newsletter</button>
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