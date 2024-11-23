import { FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaCcVisa, FaCcPaypal, FaCcApplePay, FaCcStripe } from 'react-icons/fa';
import { TfiEmail } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='H-[589px] relative bg-gray-300 mt-32'>
      {/* Newsletter Section */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-black text-white rounded-xl sm:w-[97%] lg:w-[86%] p-8 flex sm:flex-col md:flex-col lg:flex-row">
        <h2 className="text-4xl sm:w-full lg:w-1/2 font-bold">Stay Up to Date About Our Latest Offers</h2>
        <div className="flex flex-col sm:w-full lg:w-1/3 gap-4">
          <div className="flex justify-start px-4 items-center mt-4 rounded-full bg-white text-black">
            <TfiEmail />
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-2 flex-1"
            />
          </div>
          <button className="p-2 bg-white text-black rounded-full">Subscribe to Newsletter</button>
        </div>
      </div>

      {/* Footer Content */}
      <div className='pt-36 H-[499px]'>
        <div className="container max-w-7xl sm:mx-4 lg:mx-24 pb-12 border-b-2 border-gray-900">
          <div className="grid grid-cols-2 lg:grid-cols-5 justify-between space-x-6 md:space-x-20 mt-20">
            
            {/* Left Section */}
            <div className="mb-8 md:mb-0">
              <Link to='/' className="text-xl font-bold">HamroSewa</Link>
              <p className="text-gray-500 mt-2">
                We have clothes that suit your style and which you're proud to wear. From women to men.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link to="#" className="text-black"><FaTwitter size={24} /></Link>
                <Link to="#" className="text-black"><FaFacebookF size={24} /></Link>
                <Link to="#" className="text-black"><FaInstagram size={24} /></Link>
                <Link to="#" className="text-black"><FaGithub size={24} /></Link>
              </div>
            </div>

            {/* Other Sections */}
            <div className="mb-8 md:mb-0">
              <h3 className="font-semibold text-gray-900">COMPANY</h3>
              <ul className="mt-4 space-y-2">
                <li><Link to="#" className="text-gray-600 hover:text-black">About</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-black">Features</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-black">Works</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-black">Career</Link></li>
              </ul>
            </div>
            
            <div className="mb-8 md:mb-0">
              <h3 className="font-semibold text-gray-900">HELP</h3>
              <ul className="mt-4 space-y-2">
                <li><Link to="#" className="text-gray-600 hover:text-black">Customer Support</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-black">Delivery Details</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-black">Terms & Conditions</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-black">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div className="mb-8 md:mb-0">
              <h3 className="font-semibold text-gray-900">FAQ</h3>
              <ul className="mt-4 space-y-2">
                <li><Link to="#" className="text-gray-600 hover:text-black">Account</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-black">Manage Deliveries</Link></li>
                <li><Link to="/yourcart" className="text-gray-600 hover:text-black">Orders</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-black">Payments</Link></li>
              </ul>
            </div>

            <div className="mb-8 md:mb-0">
              <h3 className="font-semibold text-gray-900">RESOURCES</h3>
              <ul className="mt-4 space-y-2">
                <li><Link to="#" className="text-gray-600 hover:text-black">Free eBooks</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-black">Development Tutorial</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-black">How to - Blog</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-black">YouTube Playlist</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='flex justify-between mt-6 sm:mx-4 lg:mx-24'>
          <h1>Shop.co © 2024-2025, All Rights Reserved</h1>
          <div className="flex space-x-4">
            <Link to="#" className="text-black"><FaCcVisa size={32} /></Link>
            <Link to="#" className="text-black"><FaCcPaypal size={32} /></Link>
            <Link to="#" className="text-black"><FaCcApplePay size={32} /></Link>
            <Link to="#" className="text-black"><FaCcStripe size={32} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
