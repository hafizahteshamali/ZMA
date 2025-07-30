import React, { useRef } from "react";
import Header from "../../../../navigation/Header";
import { motion, useInView } from "framer-motion";


const AnimatedLetters = ({ text, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });
  
    const container = {
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.03 },
      },
    };
  
    const letter = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" },
      },
    };
  
    // Split text into words and spaces while preserving their integrity
    const words = text.split(/(\s+)/).filter(word => word.length > 0);
  
    return (
      <motion.div
        ref={ref}
        className={`${className} flex flex-wrap justify-center text-center`}
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {words.map((word, wordIndex) => (
          <div key={wordIndex} className="inline-flex whitespace-pre-wrap">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={letter}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    );
  };

const Banner = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <Header />

        <div className="lg:h-[1100px] w-full flex flex-col justify-end items-center">
          <div className="w-[90%] lg:w-[50%] h-[50px] mx-auto mt-[150px] border-2 rounded-full border-gray-500 flex justify-start items-center">
            <p className="flex justify-start items-center w-[90%] gap-5 text-[var(--text-color)] text-[12px] lg:text-[16px]">
              <div className="flex justify-center items-center bg-[var(--text-hover-color)] w-[60%] lg:w-[30%] h-[47px] lg:h-[50px] rounded-full">
              <AnimatedLetters
              className="text-[var(--white-color)] text-[12px]"
              text="Creative" />
                <img
                  src="/assets/images/graphic-designing/start.svg"
                  className="h-[20px] w-[20px]"
                  alt=""
                />
              </div>
              <AnimatedLetters text="We build systems that look as good as they work." />
            </p>
          </div>

          <h1 className="text-3xl lg:text-6xl text-[var(--text-hover-color)] leading-snug lg:w-[60%] text-center font-[500] mt-10 lg:my-5">
            Designs that Work Like a System, Not Just a{" "}
            <span className="bg-[var(--text-hover-color)] text-[var(--white-color)] py-1 px-4 rounded-full">
              Canvas
            </span>
          </h1>

          <div className="w-full mt-[50px] p-3 flex flex-wrap justify-center lg:gap-12 gap-5 items-start">
            {/* Card 1 */}
            <div className="relative h-[450px] w-full sm:w-[45%] lg:w-[30%] lg:mt-[80px] transform lg:-rotate-[5deg] rounded-4xl p-[12px] bg-gradient-to-b from-[#00264B] to-[#a0b0c5]">
              <div className="h-full w-full rounded-4xl card relative overflow-hidden">
                <img
                  src="/assets/images/graphic-designing/card1-img.svg"
                  className="w-[85%] object-cover absolute top-[10%] -left-[5px] transform rotate-[6deg]"
                  alt=""
                />
                <img
                  src="/assets/images/graphic-designing/card1-img2.svg"
                  className="w-[85%] object-cover absolute top-[30%] -right-[5px] transform rotate-[6deg]"
                  alt=""
                />

                <div className="absolute bottom-5 w-[90%] left-[50%] transform -translate-x-[50%]">
                  <h1 className="text-2xl my-3 text-[var(--text-hover-color)] font-[500]">
                    Unified Typography Panel
                  </h1>
                  <p className="text-[var(--text-color)]">
                    Manage all your text styles from one place—set headings,
                    body copy, and button labels with precision and ease.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative h-[450px] w-full sm:w-[50%] lg:w-[30%] rounded-4xl p-[12px] bg-gradient-to-b from-[#00264B] to-[#a0b0c5]">
              <div className="h-full w-full rounded-4xl card relative overflow-hidden flex justify-center items-center">
                <div className="h-[400px] w-[90%]">
                <img
                  src="/assets/images/graphic-designing/card2.svg"
                  className="w-[85%] object-cover mx-auto"
                  alt=""
                />

                <div className="absolute bottom-5 w-[90%] left-[50%] transform -translate-x-[50%]">
                  <h1 className="text-2xl my-3 text-[var(--text-hover-color)] font-[500]">
                  Unified Branding Hub
                  </h1>
                  <p className="text-[var(--text-color)]">
                  Bring strategy, visuals, content, and experience together in one cohesive framework.
                  </p>
                </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative h-[450px] w-full sm:w-[70%] lg:w-[30%] lg:mt-[80px] transform lg:rotate-[5deg] rounded-4xl p-[12px] bg-gradient-to-b from-[#00264B] to-[#a0b0c5]">
              <div className="h-full w-full rounded-4xl card relative overflow-hidden">
                <img
                  src="/assets/images/graphic-designing/card3.svg"
                  className="w-[100%] h-[250px] object-cover transform -rotate-[3deg] absolute left-[50%] -translate-x-[50%]"
                  alt=""
                />

                <div className="absolute bottom-5 w-[90%] left-[50%] transform -translate-x-[50%]">
                  <h1 className="text-2xl my-3 text-[var(--text-hover-color)] font-[500]">
                    Unified Typography Panel
                  </h1>
                  <p className="text-[var(--text-color)]">
                    Manage all your text styles from one place—set headings,
                    body copy, and button labels with precision and ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-[100px]">
        <div className="w-[90%] mx-auto flex flex-col justify-center items-center text-center">
          <AnimatedLetters
            text="We’re ZMA-Solutions. We craft custom graphic designs that elevate visionary brands."
            className="text-2xl lg:text-5xl font-[600] gradient-text lg:leading-tight leading-relaxed"
          />
        </div>
      </div>

    </div>
  );
};

export default Banner;
