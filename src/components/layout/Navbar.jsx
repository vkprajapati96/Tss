import React, { useState } from "react";
import {X, ChevronDown, Menu, PhoneCall, HousePlus } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md z-50">
      <div className="w-full max-w-[1340px] mx-auto flex justify-between items-center py-2 px-4">
        {/* Logo */}
        <div className="">
          <img
            className="w-[140px]"
            src="https://thestarsolution.com/assets/TSS_PNG-BUcIzKxo.png"
            alt="Logo"
          />
        </div>

        {/* Nav pages */}
        <ul className="hidden md:flex items-center gap-12 font-semibold text-black ">
          <li className="text-xl font-semibold flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
            <HousePlus className="w-6 h-6" />
          </li>
          <li className="text-xl font-semibold cursor-pointer hover:text-blue-600 transition">
            Amazon
          </li>
          <li className="text-xl font-semibold cursor-pointer hover:text-blue-600 transition">
            Walmart
          </li>
          <li className="text-xl font-semibold flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
            Design <ChevronDown className="w-4 h-4 mt-1" />
          </li>
          <li className="text-xl font-semibold flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
            Exclusive <ChevronDown className="w-4 h-4 mt-1" />
          </li>
          <li className="text-xl font-semibold cursor-pointer hover:text-blue-600 transition">
            Contact Us
          </li>
        </ul>

        {/* Phone Number */}
        <div className="hidden lg:block text-black font-bold text-lg">
          <div className="flex items-center gap-2">
            <PhoneCall className="w-6 h-6 font-semibold text-xl" />
            <span className="text-xl font-semibold">+(91) 9623231885</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu with Transition */}
      <div
        className={`md:hidden bg-white border-t transition-all duration-500 ease-in-out overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-4 gap-4 font-medium text-black">
          <li className="flex text-black items-center gap-2">
            <HousePlus className="w-5 h-5" /> Home
          </li>
          <li>Amazon</li>
          <li>Walmart</li>
          <li className="flex items-center gap-1">
            Design <ChevronDown className="w-4 h-4 mt-1" />
          </li>
          <li className="flex items-center gap-1">
            Exclusive <ChevronDown className="w-4 h-4 mt-1" />
          </li>
          <li>Contact Us</li>
          <li className="text-black font-semibold flex gap-2">
            <PhoneCall />
            <span>9623231885</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
