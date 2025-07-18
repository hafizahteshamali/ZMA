import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import NormalButton from "../../../components/NormalButton";
import Aos from "aos";

const HelpingSec = ({ HelpSecData }) => {
  const {
    imgUrl,
    heading,
    subTitle,
    description,
    bulletPara,
    bullets = [],
    btnText,
  } = HelpSecData || {};

  // Scroll ref for whole section
  const sectionRef = useRef(null);

  // Trigger animation when section enters viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "start 20%"], // start when almost in view, finish near top
  });

  // Section transforms
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  // Child fade-up variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.5, ease: "easeOut" },
    }),
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false, // repeat animation every time on scroll
    });
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      style={{ scale, rotate, opacity, y }}
      className="bg-cover w-full bg-[#F3F3FA] pt-10"
      // style={{ backgroundImage: "url('/assets/images/home/help-section-bg.png')" }}
    >
      <div className="container mx-auto">
        <div className="min-h-[100vh] flex justify-center items-center p-5 lg:my-0">
          <div className="min-h-[600px] w-full flex flex-col lg:flex-row justify-between items-center">
            <div data-aos="fade-up"
              data-aos-delay="500" className="w-[90%] lg:w-[47%]">
              <img
                src={imgUrl}
                className="h-[100%] w-[100%] object-contain"
                alt=""
              />
            </div>
            <div data-aos="fade-up"
              data-aos-delay="1000" className="w-[90%] lg:w-[47%] flex flex-col justify-around items-start gap-6 my-[50px]">
              <h1 className="text-5xl lg:text-4xl font-[600]">{heading}</h1>
              <h3 className="text-3xl lg:text-2xl font-[500] text-[var(--text-color)]">
                {subTitle}
              </h3>
              <div>
                <p className="w-[100%] lg:w-[70%] text-[var(--text-color)]">
                  {description}
                </p>
                <p className="w-[100%] lg:w-[70%] text-[var(--text-color)]">
                  {bulletPara}
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {bullets.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex text-[var(--text-color)] items-center gap-3"
                    >
                      <img src="/assets/images/home/tick.png" alt="" />
                      {item}
                    </li>
                  );
                })}
              </ul>
              <NormalButton
                text={btnText}
                className="h-[50px] w-[70%] lg:w-[30%] bg-[var(--white-color)] font-[600] text-[var(--text-hover-color)]"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HelpingSec;
