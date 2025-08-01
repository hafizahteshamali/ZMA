"use client";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { FaRegWindowClose } from "react-icons/fa";
import { NavigationData } from "../assets/ConstantData";
import FancyButton from "../components/FancyButton";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`flex justify-between lg:justify-around px-4 items-center h-[90px] fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-[#cbe1ff]" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src="/assets/images/home/logo.png"
            className="object-contain h-[100px] w-[130px]"
            alt="Logo"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex justify-center items-center w-[60%] xl:w-[50%] xl:gap-10 gap-7 bg-[#ffffff54] backdrop-blur-sm rounded-full px-6">
          {NavigationData.map((nav, index) => (
            <li
              key={index}
              className="relative group z-10 h-[50px] flex justify-center items-center"
            >
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  `flex items-center gap-1 text-[16px] font-[400] cursor-pointer transition-all duration-300 ease-in-out hover:text-[18px] hover:font-[600] hover:text-[var(--text-hover-color)] ${
                    isActive
                      ? "text-[var(--text-hover-color)] font-[600]"
                      : "text-[var(--text-color)]"
                  }`
                }
              >
                <span className="leading-none whitespace-nowrap">
                  {nav.text}
                </span>
                {nav.children && (
                  <FiChevronDown className="mt-1 text-[14px] transition-transform duration-300 group-hover:rotate-180" />
                )}
              </NavLink>

              {/* Dropdown Menu */}
              {nav.children && (
                <ul className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg w-[220px] pt-2 pb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-20 mt-2">
                  {nav.children.map((child, cIndex) => (
                    <li key={cIndex}>
                      <NavLink
                        to={child.path}
                        className="block px-6 py-3 whitespace-nowrap text-gray-700 hover:bg-gray-50 hover:text-[var(--text-hover-color)] text-[14px] transition-all duration-200 ease-in-out hover:font-[500]"
                      >
                        {child.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block rounded-full">
          <FancyButton text="free consultation" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <FiMenu
            onClick={() => setIsMenu(!isMenu)}
            className="text-4xl cursor-pointer transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <div
        className={
          isMenu
            ? "h-[100vh] w-[100%] fixed bg-[#f0f6ff] top-0 right-[0%] bottom-0 z-30 transition-all duration-700 flex flex-col justify-center items-center gap-10"
            : "h-[100vh] w-[100%] fixed bg-[#f0f6ff] top-0 -right-[100%] bottom-0 z-30 transition-all duration-700 flex flex-col justify-center items-center gap-10"
        }
      >
                {/* Mobile Navigation */} 
        <div className="w-[70%] mx-auto flex flex-col justify-around items-start gap-5 mt-6">
          <ul className="flex flex-col justify-center items-start gap-6 w-[75%] px-5">
            {NavigationData.map((nav, index) => (
              <li key={index} className="w-full">
                <div className="flex flex-col gap-2">
                  <div
                    onClick={() =>
                      nav.children
                        ? setOpenDropdown(
                            openDropdown === nav.text ? null : nav.text
                          )
                        : setIsMenu(false)
                    }
                    className="flex items-center gap-1 text-[16px] font-[400] text-[var(--text-color)] cursor-pointer hover:text-xl hover:font-[700] hover:text-[var(--text-hover-color)] transition-all duration-300"
                  >
                    {nav.text}                   
                    {nav.children && (
                      <FiChevronDown className="mt-1 text-[16px]" />
                    )}
                             
                  </div>
                  {/* Toggleable Mobile Dropdown */}                 
                  {nav.children && openDropdown === nav.text && (
                    <ul className="ml-4 flex flex-col gap-1 mt-1">
                      {" "}
                                 
                      {nav.children.map((child, cIndex) => (
                        <li key={cIndex}>
                          {" "}
                                           
                          <NavLink
                            to={child.path}
                            className="text-[14px] text-gray-600 hover:text-[var(--text-hover-color)] transition-all duration-300"
                            onClick={() => setIsMenu(false)}
                          >
                            {child.text}                     
                          </NavLink>
                               
                        </li>
                      ))}
                                 
                    </ul>
                  )}{" "}
                         
                </div>{" "}
                     
              </li>
            ))}
          </ul>
            <FancyButton text="free consultation" />       
        </div>
             
      </div>
         
    </>
  );
};
export default Header;
