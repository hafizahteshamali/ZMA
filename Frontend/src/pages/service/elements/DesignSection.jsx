import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

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

const DesignSection = ({ DesignGlobalData, theriData }) => {
  const headingRef = useRef(null);
  const servicesRef = useRef(null);
  const theirWordsRef = useRef(null);

  const isHeadingInView = useInView(headingRef, { once: false, amount: 0.3 });
  const isServicesInView = useInView(servicesRef, { once: false, amount: 0.3 });
  const isTheirWordsInView = useInView(theirWordsRef, { once: false, amount: 0.3 });

  const { heading, text, bulletText, services } = DesignGlobalData;

  return (
    <div className="container mx-auto">
      <div className="w-full mt-[100px]">
        <div className="lg:w-[80%] mx-auto">

          {/* Heading Section */}
          <div ref={headingRef} className="text-center">
            <motion.h1
              className="text-5xl lg:text-6xl lg:w-[55%] leading-snug mx-auto font-[500] text-[var(--text-hover-color)]"
              variants={textContainer}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
            >
              {heading.split("").map((char, i) => (
                <motion.span key={i} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="lg:w-[45%] mx-auto my-5 text-[var(--text-color)]"
              variants={textContainer}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
            >
              {text.split(" ").map((word, i) => (
                <motion.span key={i} variants={letter} className="inline-block mr-1">
                  {word}
                </motion.span>
              ))}
            </motion.p>

            <motion.div
              className="flex justify-center items-center gap-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isHeadingInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="h-[20px] w-[20px] bg-[#519BFF] rounded-full blink-dot"></div>
              <p className="text-[#519BFF]">{bulletText}</p>
            </motion.div>
          </div>

          {/* Services Section */}
          <motion.div
            ref={servicesRef}
            initial={{ y: 100, opacity: 0 }}
            animate={isServicesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="flex flex-wrap justify-center items-start border border-gray-500 my-[50px] rounded-xl"
          >
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isServicesInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`min-h-[700px] w-[95%] md:w-[45%] lg:w-[50%] h-[100%] flex flex-col justify-start items-center ${item.rightBorder ? 'lg:border-r border-[#0d99ff]' : ''}`}
              >
                <img src={item.img} className={item.pl ? 'w-full py-4 lg:pl-4' : 'w-full py-4 lg:pr-4'} alt="" />
                <div className="h-[450px] w-full bg-[#B1C5DF8F] flex justify-start p-1 items-center px-6">
                  <motion.div
                    className="w-[85%] flex flex-col justify-center gap-5"
                    variants={textContainer}
                    initial="hidden"
                    animate={isServicesInView ? "visible" : "hidden"}
                  >
                    <motion.h1 className="text-2xl my-5 font-[500]" variants={textContainer}>
                      {item.smHead.split("").map((char, i) => (
                        <motion.span key={i} variants={letter}>
                          {char}
                        </motion.span>
                      ))}
                    </motion.h1>
                    <motion.p className="text-[14px] font-[400]" variants={textContainer}>
                      {item.description.split(" ").map((word, i) => (
                        <motion.span key={i} variants={letter} className="inline-block mr-1">
                          {word}
                        </motion.span>
                      ))}
                    </motion.p>
                    <NavLink
                      className="w-[50%] h-[45px] service_tool_box_btn rounded-4xl flex justify-center items-center border-1 text-[var(--text-color)] border-white"
                      to={item.btnLink}
                    >
                      <motion.span variants={textContainer}>
                        {item.btnText.split("").map((char, i) => (
                          <motion.span key={i} variants={letter}>
                            {char}
                          </motion.span>
                        ))}
                      </motion.span>
                    </NavLink>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

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

        </div>
      </div>
    </div>
  );
};

export default DesignSection;
