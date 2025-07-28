import React from "react";
import { NavLink } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Header from "../../../../navigation/Header";
import NormalButton from "../../../../components/NormalButton";

const Banner = ({ AiDevelopBannerData }) => {
  const {
    heading,
    subTitle,
    link1Text,
    link1,
    link2Text,
    link2,
    heading2,
    btn,
  } = AiDevelopBannerData;

  return (
    <>
      <div
        className="w-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/images/ai-development/banner-bg.png')`,
        }}
      >
        <div className="h-screen container mx-auto flex flex-col justify-center lg:justify-end items-center">
          <Header />

          <div className="h-[400px] lg:h-[500px] w-full flex flex-col justify-center lg:justify-start items-center gap-7">
            <h1 className="text-4xl lg:text-8xl font-[600] gradient-text">
              {heading}
            </h1>
            <p className="text-[var(--text-color)] text-center lg:text-left">
              {subTitle}
            </p>
            <div className="w-[100%] lg:w-[40%] p-2 flex justify-between items-center">
              <NavLink
                className="relative h-[50px] w-[45%] rounded-sm flex justify-center items-center text-[var(--text-color)] transition-all duration-300 border-transparent border hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#006CFF] hover:to-[#00264B] hover:border hover:border-[#006CFF] gap-2 group"
                to={link1}
              >
                <span>{link1Text}</span>
                <FiArrowRight className="text-2xl text-[var(--text-color)] group-hover:text-[#006CFF]" />
              </NavLink>

              <NavLink
                className="relative h-[50px] w-[45%] rounded-sm flex justify-center items-center text-[var(--text-color)] transition-all duration-300 border-transparent border hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#006CFF] hover:to-[#00264B] hover:border hover:border-[#006CFF] gap-2 group"
                to={link2}
              >
                <span>{link2Text}</span>
                <FiArrowRight className="text-2xl text-[var(--text-color)] group-hover:text-[#006CFF]" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-[100px]">
        <div className="w-[80%] mx-auto flex flex-col justify-center items-center">
          <h1 className="text-2xl lg:text-5xl font-[600] gradient-text text-center lg:leading-tight leading-relaxed">
            {heading2}
          </h1>
          <div className="w-[50%] lg:w-[20%] rounded-lg bg-gradient-to-r from-[#006CFF] to-[#00224F66] p-[2px] mt-5">
            <button className="w-full h-[40px] rounded-lg bg-[#cbe1ff] text-[#006CFF] font-semibold">
              {btn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
