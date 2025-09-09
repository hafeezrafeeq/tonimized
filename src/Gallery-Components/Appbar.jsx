
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



function Appbar(className="") {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`gredient ${className}`}>
      <div className="flex justify-between items-center gredient-nav appbar px-6 md:px-12 py-4">
        {/* Left: Logo and Nav */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <img
            className="lg:w-48 md:w-38  w-35 "
            src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600086643/Logo_hafewu.png"
            alt="Logo"
          />

         <button
            className="md:hidden text-stone-800 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={isOpen ? setIsOpen : faBars} />
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:gap-8 gap-10 raleway font-bold text-lg items-center">
          <Link className="text-stone-800 hover:text-amber-200" to="/">Home</Link>
          <Link className="text-stone-800 hover:text-amber-200" to="/gallery">Gallery</Link>
          <Link className="text-stone-800 hover:text-amber-200" to="/articts">Articts</Link>
          <Link className="text-stone-800 hover:text-amber-200" to="/faq">FAQ</Link>
        </nav>

        {/* Right Section (Desktop Only) */}
        <div className="hidden md:flex items-center gap-6">
      
          <button className="btn-nav hover:bg-white text-white font-semibold py-2 px-4 rounded-lg shadow">
            GET STARTED
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className=" px-6 pb-4">
          <nav className="flex flex-col gap-4 pt-6 raleway font-bold text-lg">
            <Link className="text-stone-800 hover:text-amber-200" to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link className="text-stone-800 hover:text-amber-200" to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link className="text-stone-800 hover:text-amber-200" to="/articts" onClick={() => setIsOpen(false)}>Articts</Link>
            <Link className="text-stone-800 hover:text-amber-200" to="/faq" onClick={() => setIsOpen(false)}>FAQ</Link>
            <div className="flex items-center gap-12 mt-2">
      
              <button className="btn-nav text-sm hover:bg-white text-white font-semibold py-2 px-[6vw] rounded-lg shadow">
                GET STARTED
              </button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Appbar;

