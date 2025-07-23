import React from "react";
import Slider from "react-slick";
import NormalButton from "../../../components/NormalButton";
import { NavLink } from "react-router-dom";
// Make sure slick CSS imported globally (globals.css ya _app.js):
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const CustomGlobal = ({ clientsName = [], CustomGlobalData }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000, // continuous scroll style
    speed: 4000, // slower = smoother
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  const { heading, text, bulletText, imgUrl, services } = CustomGlobalData;

  return (
    <div className="container mx-auto py-8">
      <div className="lg:w-[80%] w-full mx-auto">
        <Slider {...settings} className="custom-global-slider">
          {clientsName.map((src, index) => (
            <div key={index} className="px-4">
              <div className="h-20 sm:h-24 md:h-28 flex justify-center items-center">
                <img
                  src={src}
                  alt={`Client logo ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="w-full my-[100px]">
        <div className="lg:w-[80%] mx-auto p-3">
          <h1 className="text-5xl lg:text-6xl lg:w-[55%] leading-snug mx-auto text-center font-[500] text-[var(--text-hover-color)]">
            {heading}
          </h1>
          <p className="lg:w-[45%] mx-auto text-center my-5 text-[var(--text-color)]">
            {text}
          </p>

          <div className="flex justify-center items-center gap-4">
            <div className="h-[20px] w-[20px] bg-[#519BFF] rounded-full"></div>
            <p className="text-[#519BFF]">{bulletText}</p>
          </div>

          <div className="lg:h-[600px] w-[100%] mt-[100px] rounded-t-2xl border border-gray-500 service_tool_box flex justify-center items-center">
            <img src={imgUrl} className="object-contain" alt="" />
          </div>

          <div className="bg-[#b1c5df] flex flex-wrap justify-center items-center p-0 rounded-b-2xl">
            {services.map((item, index) => {
              return (
                <div key={index} className="min-h-[700px] w-[95%] md:w-[45%] lg:w-[31%] my-4 p-3 flex justify-center items-center">
                  <div className="min-h-[600px] w-[100%] flex flex-col justify-center items-start gap-6">
                    <img src={item.img} alt="" />
                    <h1 className="text-[25px] font-[500]">
                      {item.smHead}
                    </h1>
                    <p className="text-[16px] text-[var(--text-color)]">
                      {item.description}
                    </p>
                    <NavLink
                      className="w-[50%] h-[45px] service_tool_box_btn rounded-4xl flex justify-center items-center border-1 text-[var(--text-color)] border-white"
                      to={item.btnLink}
                    >
                      {item.btnText}
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomGlobal;
