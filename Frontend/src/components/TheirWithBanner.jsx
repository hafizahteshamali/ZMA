import React, { useRef } from 'react'
import { theriData } from '../assets/ConstantData'
import { LuSquareArrowRight } from "react-icons/lu";
import { motion, useInView } from "framer-motion";

// Animation Variants
const textContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1 * i,
      },
    }),
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

const TheirWithBanner = () => {

    const theirWordsRef = useRef(null);
    const isTheirWordsInView = useInView(theirWordsRef, { once: false, amount: 0.3 });

  return (
    <div className="container mx-auto">
      <div className="w-full mt-[100px]">
        <div className="lg:w-[100%] mx-auto">
            
            {/* Their Words Section */}
          <motion.div
            ref={theirWordsRef}
            initial={{ opacity: 0 }}
            animate={isTheirWordsInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="my-[100px]"
          >
            <h1 className="text-center text-4xl font-[500] mb-[30px]">Their words</h1>
            <div className="my-5 border w-[90%] mx-auto lg:w-[100%] lg:mx-0 lg:border-[#0d99ff] rounded-2xl overflow-hidden flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between items-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={isTheirWordsInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1 }}
                className="lg:h-[500px] lg:w-[34%] bg-[#B1C5DF] flex justify-center items-center border-r p-3 border-[#0d99ff]"
              >
                <div className="h-[400px] w-[80%] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="h-[20px] w-[20px] rounded-full bg-[#005AB1]"></div>
                      <span className="text-[#005AB1] text-xl">Clients over years</span>
                    </div>
                    <h1 className="text-7xl text-[var(--black-color)] font-[500] my-5">50+</h1>
                  </div>
                  <p className="text-[#3D4F60] font-[400]">We’re in it for the long run supporting your website’s growth and evolution every step of the way.</p>
                </div>
              </motion.div>

              {theriData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 100, opacity: 0 }}
                  animate={isTheirWordsInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: index * 0.3, duration: 1 }}
                  className="lg:h-[500px] lg:w-[33%] bg-[#B1C5DF] p-3 flex justify-center items-center border-r border-[#0d99ff]"
                >
                  <motion.div
                    className="h-[400px] w-[80%] flex flex-col justify-between"
                    variants={textContainer}
                    initial="hidden"
                    animate={isTheirWordsInView ? "visible" : "hidden"}
                  >
                    <motion.p className="text-[#3D4F60] font-[400] text-[20px] w-[90%]" variants={textContainer}>
                      {item.para1.split(" ").map((word, i) => (
                        <motion.span key={i} variants={letter} className="inline-block mr-1">
                          {word}
                        </motion.span>
                      ))} <strong className="text-[var(--black-color)]">{item.str}</strong> {item.para2.split(" ").map((word, i) => (
                        <motion.span key={i} variants={letter} className="inline-block mr-1">
                          {word}
                        </motion.span>
                      ))}
                    </motion.p>
                    <div className="flex justify-between items-center">
                      <div>
                        <motion.h3 className="text-xl font-[700] text-[var(--black-color)]" variants={textContainer}>
                          {item.name.split("").map((char, i) => (
                            <motion.span key={i} variants={letter}>
                              {char}
                            </motion.span>
                          ))}
                        </motion.h3>
                        <motion.p className="text-[#3D4F60]" variants={textContainer}>
                          {item.designation.split(" ").map((word, i) => (
                            <motion.span key={i} variants={letter} className="inline-block mr-1">
                              {word}
                            </motion.span>
                          ))}
                        </motion.p>
                      </div>
                      <img src={item.image} alt={item.name} />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>


          <motion.div
      className="container mx-auto lg:w-[100%] my-[100px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      transition={{ staggerChildren: 0.3 }}
    >
      {/* Top Banner */}
      <motion.div
        className="h-[400px] bg-cover rounded-3xl flex justify-center items-center"
        style={{
          backgroundImage: `url('/assets/images/service/bottom-banner.jpg')`,
        }}
        variants={{
          hidden: { opacity: 0, rotateX: -90 },
          visible: {
            opacity: 1,
            rotateX: 0,
            transition: { duration: 1, ease: "easeOut" },
          },
        }}
      >
        <motion.button
          className="text-[var(--white-color)] flex justify-center items-center gap-4 h-[45px] w-[60%] lg:w-[25%] serviceBtn"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span>Discover our projects</span>
          <LuSquareArrowRight className="text-3xl" />
        </motion.button>
      </motion.div>

      {/* Bottom Text Section */}
      <motion.div
        className="my-[100px] flex flex-col gap-5 justify-center items-center"
        variants={{
          hidden: { opacity: 0, y: 100, rotateX: 90 },
          visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { duration: 1, ease: "easeOut" },
          },
        }}
      >
        <h1 className="text-3xl lg:text-5xl text-center lg:leading-normal text-[#3D4F60] font-[500]">
          Development shouldn’t be complicated. <br />{" "}
          <span className="text-[var(--text-hover-color)]">
            We simplify every step.
          </span>
        </h1>
        <motion.button
          className="h-[45px] w-[50%] lg:w-[20%] bg-[#ffffff54] border-2 border-[#fff] flex justify-center items-center gap-3 rounded-lg"
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="h-[10px] w-[10px] rounded-full bg-[#00264B]"></div>
          <span className="text-[#00264B] font-[400]">Get in touch</span>
        </motion.button>
      </motion.div>
    </motion.div>

            </div>
            </div>
        </div>
  )
}

export default TheirWithBanner