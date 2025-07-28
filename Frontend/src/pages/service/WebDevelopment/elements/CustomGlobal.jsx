import React, { useEffect } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.2 * i,
    },
  }),
};

const child = {
  hidden: { opacity: 0, y: 20, rotateX: 90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

const CustomGlobal = ({ clientsName = [], CustomGlobalData }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 4000,
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
      {/* Logo Slider */}
      <div className="lg:w-[80%] w-full mx-auto">
        <Slider {...settings}>
          {clientsName.map((src, index) => (
            <div key={index} className="px-4">
              <div
                className="h-20 sm:h-24 md:h-28 flex justify-center items-center"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
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

      {/* Global Section */}
      <div className="w-full my-[100px]">
        <div className="lg:w-[80%] mx-auto p-3">
          {/* Heading */}
          <motion.h1
            className="text-5xl lg:text-6xl lg:w-[55%] leading-snug mx-auto text-center font-[500] text-[var(--text-hover-color)]"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {heading.split("").map((char, index) => (
              <motion.span key={index} variants={child}>
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="lg:w-[45%] mx-auto text-center my-5 text-[var(--text-color)]"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {text.split("").map((char, index) => (
              <motion.span key={index} variants={child}>
                {char}
              </motion.span>
            ))}
          </motion.p>

          {/* Bullet */}
          <motion.div
            className="flex justify-center items-center gap-4"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div
              className="h-[20px] w-[20px] bg-[#519BFF] rounded-full blink-dot"
              variants={child}
            />
            <motion.p className="text-[#519BFF]" variants={child}>
              {bulletText}
            </motion.p>
          </motion.div>

          {/* Image */}
          <div
            className="lg:h-[600px] w-full mt-[100px] rounded-t-2xl border border-gray-500 service_tool_box flex justify-center items-center"
            data-aos="flip-up"
            data-aos-delay="600"
          >
            <img src={imgUrl} className="object-contain" alt="Global Section" />
          </div>

          {/* Services */}
          <div
            className="bg-[#b1c5df] flex flex-wrap justify-center items-center p-0 rounded-b-2xl border border-gray-500"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            {services.map((item, index) => (
              <motion.div
                key={index}
                className={`min-h-[700px] w-[95%] md:w-[45%] lg:w-[33%] my-4 lg:my-0 p-3 flex justify-center items-center ${
                  item.borderr ? "lg:border-r border-gray-500" : ""
                }`}
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="min-h-[600px] w-full flex flex-col justify-center items-start gap-6">
                  <motion.img src={item.img} alt={item.smHead} variants={child} />
                  {/* Card Heading Animated per Letter */}
                  <motion.h1 className="text-[25px] font-[500]" variants={container}>
                    {item.smHead.split("").map((char, i) => (
                      <motion.span key={i} variants={child}>
                        {char}
                      </motion.span>
                    ))}
                  </motion.h1>
                  {/* Card Description Animated per Letter */}
                  <motion.p className="text-[16px] text-[var(--text-color)]" variants={container}>
                    {item.description.split("").map((char, i) => (
                      <motion.span key={i} variants={child}>
                        {char}
                      </motion.span>
                    ))}
                  </motion.p>
                  <NavLink
                    to={item.btnLink}
                    className="w-[50%] h-[45px] service_tool_box_btn rounded-4xl flex justify-center items-center border border-white text-[var(--text-color)]"
                  >
                    <motion.span variants={container}>
                      {item.btnText.split("").map((char, i) => (
                        <motion.span key={i} variants={child}>
                          {char}
                        </motion.span>
                      ))}
                    </motion.span>
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomGlobal;
