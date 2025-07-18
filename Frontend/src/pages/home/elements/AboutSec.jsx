import React, { useEffect } from "react";
import NormalButton from "../../../components/NormalButton";
import Aos from "aos";
import { motion } from "framer-motion";

/* ---------- AnimatedText Component ---------- */
const AnimatedText = ({
  text = "",
  as = "span",
  delay = 0,
  stagger = 0.025,
  duration = 0.45,
  yFrom = 24,
  flip = true,
  className = "",
}) => {
  const Parent = motion[as] || motion.span;

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const charVar = {
    hidden: {
      opacity: 0,
      y: yFrom,
      rotateX: flip ? -90 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration, ease: "easeOut" },
    },
  };

  const chars = Array.from(text || "");

  return (
    <Parent
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.6 }}
      className={className}
      style={{ display: "inline-block", perspective: 1000 }}
    >
      {chars.map((ch, i) => (
        <motion.span
          key={i}
          variants={charVar}
          style={{
            display: "inline-block",
            transformOrigin: "50% 100%",
            willChange: "transform,opacity",
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </Parent>
  );
};

/* ---------- Main Component ---------- */
const AboutSec = ({ AboutHeadingData, AboutContentData }) => {
  const { heading, des } = AboutHeadingData;
  const { smHeading, lgHeading, para, btnText } = AboutContentData;

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false, // repeat animation every time on scroll
    });
  }, []);

  return (
    <>
      <div
        data-aos="zoom-in"
        className="bg-cover w-full bg-center bg-no-repeat about bg-[#F3F3FA] lg:min-h-screen h-[1000px] mt-[2000px] md:mt-[1500px] lg:mt-0"
        style={{ backgroundImage: `url('/assets/images/home/about-bg.png')` }}
      >
        <div className="container mx-auto p-2">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="lg:h-[200px] h-[400px] w-full flex flex-col justify-center items-center gap-4">
              {/* Heading Animation */}
              <AnimatedText
                as="h1"
                text={heading}
                delay={0.2}
                stagger={0.03}
                duration={0.5}
                yFrom={30}
                flip
                className="text-5xl font-[700] text-center lg:text-left text-[var(--text-hover-color)]"
              />
              {/* Description Animation */}
              <AnimatedText
                as="p"
                text={des}
                delay={0.6}
                stagger={0.015}
                duration={0.4}
                yFrom={20}
                flip={false} // paragraph ke liye no flip
                className="lg:w-[40%] text-[var(--text-color)] text-center"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:flex-row justify-between items-start lg:items-center">
            {/* Content Section */}
            <div className="w-full lg:w-[60%] flex justify-start lg:ml-[70px] order-2 md:order-1 lg:order-1 lg:min-h-[100vh]">
              <div
                data-aos="zoom-in"
                data-aos-delay="500"
                className="w-[90%] lg:w-[60%] p-4 flex flex-col justify-center items-start gap-6"
              >
                <AnimatedText
                  as="h5"
                  text={smHeading}
                  delay={0.3}
                  stagger={0.02}
                  duration={0.4}
                  yFrom={18}
                  flip
                  className="text-[var(--text-color)] font-[500]"
                />
                <AnimatedText
                  as="h1"
                  text={lgHeading}
                  delay={0.6}
                  stagger={0.02}
                  duration={0.45}
                  yFrom={24}
                  flip
                  className="text-[var(--text-hover-color)] text-3xl lg:text-[45px] leading-12"
                />
                <AnimatedText
                  as="p"
                  text={para}
                  delay={0.9}
                  stagger={0.012}
                  duration={0.35}
                  yFrom={15}
                  flip={false}
                  className="text-[var(--text-color)]"
                />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                  className="w-full my-7"
                >
                  <NormalButton
                    text={btnText}
                    className="h-[45px] w-[50%] border border-[#CBE1FF] text-[var(--text-hover-color)] font-[600] bg-[var(--white-color)] shadow-2xl rounded-full"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSec;
