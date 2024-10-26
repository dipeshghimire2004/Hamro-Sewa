import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex grid grid-cols-2 lg:grid-cols-4 justify-between space-x-6 md:space-x-20 ">
          
          {/* Left Section */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-xl font-bold">HamroSewa</h2>
            <p className="text-gray-500 mt-2">
              We have clothes that suit your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-black">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-black">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-black">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-black">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          
          
            <div className="mb-8 md:mb-0">
              <h3 className="font-semibold text-gray-900">COMPANY</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Works</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Career</a></li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0">
              <h3 className="font-semibold text-gray-900">HELP</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">Customer Support</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Delivery Details</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0">
              <h3 className="font-semibold text-gray-900">FAQ</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">Account</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Manage Deliveries</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Orders</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Payments</a></li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0">
              <h3 className="font-semibold text-gray-900">RESOURCES</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">Free eBooks</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Development Tutorial</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">How to - Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Youtube Playlist</a></li>
              </ul>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
