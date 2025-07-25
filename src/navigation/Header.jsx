import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaRegWindowClose } from "react-icons/fa";
import { NavigationData } from "../assets/ConstantData";
import FancyButton from "../components/FancyButton";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`flex justify-between lg:justify-around px-4 items-center h-[100px] fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-[var(--white-color)] shadow-lg" : "bg-transparent"
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
      <ul className="hidden lg:flex justify-center items-center gap-10 bg-[#ffffffa2] backdrop:blur-xl py-4 px-6 rounded-4xl">
        {NavigationData.map((nav, index) => (
          <li key={index}>
            <NavLink
              to={nav.path}
              className="text-[16px] font-[400] text-[var(--text-color)] cursor-pointer hover:text-xl hover:font-[700] hover:text-[var(--text-hover-color)] transition-all duration-300"
            >
              {nav.text}
            </NavLink>
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
          className="text-4xl cursor-pointer"
        />
      </div>
    </div>

      <div
        className={
          isMenu
            ? "h-[100vh] w-[100%] fixed bg-[#f0f6ff] top-0 right-[0%] bottom-0 z-30 transition-all duration-700 flex flex-col justify-center items-center gap-10"
            : "h-[100vh] w-[100%] fixed bg-[#f0f6ff] top-0 -right-[100%] bottom-0 z-30 transition-all duration-700 flex flex-col justify-center items-center gap-10"
        }
      >
        {/* Mobile close Icon */}
        {/* <FaRegWindowClose
          onClick={() => setIsMenu(false)}
          className="text-4xl cursor-pointer absolute top-5 right-4"
        /> */}

        {/* Mobile Navigation */}
        <div className="w-[70%] mx-auto flex flex-col justify-center items-start gap-7">
          <ul className="flex flex-col justify-center items-start gap-6 w-[75%] px-5">
            {NavigationData.map((nav, index) => (
              <li key={index}>
                <NavLink
                  to={nav.path}
                  className="text-[16px] font-[400] text-[var(--text-color)] cursor-pointer hover:text-xl hover:font-[700] hover:text-[var(--text-hover-color)] transition-all duration-300"
                >
                  {nav.text}
                </NavLink>
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
