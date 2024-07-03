"use client";
import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { GiSplitCross } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiSearch, FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "Groceries", "Pages"];

  return (
    <nav className="  fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20 flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <h1 className="font-semibold text-xl cursor-pointer">
            GO <span className="text-[#333] text-2xl">FOOD</span>
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center cursor-pointer hover:scale-105 duration-200"
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
              <RiArrowDropDownLine size={24} />
            </div>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-white bg-[#3A5B3B] px-4 py-2 rounded-lg">
            Connect with us →
          </button>
          <div className="relative w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center">
            <FiSearch size={20} className="icon-border" />
          </div>

          <div className="relative w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center">
            <FiUser size={20} className="icon-border" />
          </div>

          <div className="relative w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center">
            <FiHeart size={20} className="icon-border" />
            <span className="absolute -top-2 -right-2 text-xs text-white bg-yellow-500 rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </div>
          <div className=" relative w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center">
            <FiShoppingBag size={20} className="icon-border" />
            <span className="absolute -top-2 -right-2 text-xs text-white bg-yellow-500 rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <GiSplitCross size={24} /> : <IoMenuSharp size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#F9F5F0]">
          <ul className="flex flex-col items-center space-y-3 py-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center cursor-pointer hover:scale-105 duration-200"
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
                <RiArrowDropDownLine size={24} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
