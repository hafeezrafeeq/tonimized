import insta from '../assets/instagram.png';
import facebook from '../assets/Facebook.png';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#2d2d2d] text-white pt-12 pb-8 px-6 md:px-20 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        
        <div className="space-y-4">

          <img className="w-1/2 sm:w-50" src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600086643/Logo__nye4vn.png" alt="" />
          <div className="flex items-center space-x-4">
            <a href="#"><img className="w-10 " src={facebook} alt="Facebook" /></a>
            <a href="#"><img className="w-12 " src={insta} alt="Logo" /></a>
          </div>
        </div>

        <div className="space-y-3 text-right md:text-left">
          
          <ul className="flex flex-col font-bold">
             <Link className="text-stone-50 hover:text-amber-200" to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link className="text-stone-50 hover:text-amber-200" to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link className="text-stone-50 hover:text-amber-200" to="/articts" onClick={() => setIsOpen(false)}>Articts</Link>
            <Link className="text-stone-50 hover:text-amber-200" to="/faq" onClick={() => setIsOpen(false)}>FAQ</Link>
          </ul>
        </div>

      
        <div className="space-y-4 raleway" >
          <h2 className="font-bold">Let’s keep in touch!</h2>
          <p className="text-sm text-gray-400">
            Join our newsletter to Stay up to date to latest discounts, Promotions and orders.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none w-full"
            />
            <button className="bg-gray-700 px-4 py-2 rounded-r-md hover:bg-gray-600">
              ✈️
            </button>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 Make me Yellow. All rights reserved.</p>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">@hafeea rafeeq</a>
          <a href="#" className="hover:text-white">personal site</a>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
