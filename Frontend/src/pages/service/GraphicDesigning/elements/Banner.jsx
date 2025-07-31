import React, { useEffect, useRef } from "react";
import Header from "../../../../navigation/Header";
import { motion, useInView } from "framer-motion";
import Aos from "aos";

// Text animation component
const AnimatedLetters = ({ text, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 }); // Changed amount to 0.1 and once to false

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

  const words = text.split(/(\s+)/).filter((word) => word.length > 0);

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
            <motion.span key={charIndex} variants={letter} className="inline-block">
              {char}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  );
};

// Card animation variants
const cardVariants = {
  hidden: (custom) => {
    if (custom === 0) return { opacity: 0, y: 50 }; // Center card (fade up)
    if (custom === 1) return { opacity: 0, x: -50, y: 30 }; // Left card
    return { opacity: 0, x: 50, y: 30 }; // Right card
  },
  visible: (custom) => {
    const delays = [0.2, 0.8, 1.2];
    if (custom === 0) {
      return {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: delays[custom], ease: "easeOut" },
      };
    }
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, delay: delays[custom], ease: "easeOut" },
    };
  },
};

const Banner = ({ GraphicBannerData }) => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false, // repeat animation every time on scroll
    });
  }, []);

  const {smText, icon, text, heading, highlight} = GraphicBannerData;
  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <Header />

        <div className="lg:h-[1100px] w-full flex flex-col justify-center items-center">
          <div data-aos="fade-up" className="w-[90%] lg:w-[50%] h-[50px] mx-auto mt-[150px] lg:mt-[50px] border-2 rounded-full border-gray-500 flex justify-start items-center">
            <p className="flex justify-start items-center w-[90%] gap-5 text-[var(--text-color)] text-[12px] lg:text-[16px]">
              <div className="flex justify-center items-center bg-[var(--text-hover-color)] w-[60%] lg:w-[30%] h-[47px] lg:h-[50px] rounded-full">
                <AnimatedLetters className="text-[var(--white-color)] text-[12px] lg:text-[16px]" text={smText} />
                <img
                  src={icon}
                  className="h-[20px] w-[20px]"
                  alt=""
                />
              </div>
              <AnimatedLetters text={text} />
            </p>
          </div>

          <h1 data-aos="fade-up" data-aos-delay="500"  className="text-3xl lg:text-6xl text-[var(--text-hover-color)] leading-snug lg:w-[60%] text-center font-[500] mt-10 lg:my-5">
            {heading}{" "}
            <span className="bg-[var(--text-hover-color)] text-[var(--white-color)] py-1 px-4 rounded-full">
              {highlight}
            </span>
          </h1>

          <div data-aos="fade-up" data-aos-delay="500" className="w-full mt-[50px] p-3 flex flex-wrap justify-center lg:gap-12 gap-5 items-start">
            {/* Card 1 - Left */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }} // Changed to trigger again when scrolling
              variants={cardVariants}
              className="relative h-[450px] w-full sm:w-[45%] lg:w-[30%] lg:mt-[80px] transform lg:-rotate-[5deg] rounded-4xl p-[12px] bg-gradient-to-b from-[#00264B] to-[#a0b0c5]"
            >
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
                    Manage all your text styles from one place—set headings, body copy, and button labels with precision and ease.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Center */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }} // Changed to trigger again when scrolling
              variants={cardVariants}
              className="relative h-[450px] w-full sm:w-[50%] lg:w-[30%] rounded-4xl p-[12px] bg-gradient-to-b from-[#00264B] to-[#a0b0c5]"
            >
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
            </motion.div>

            {/* Card 3 - Right */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }} // Changed to trigger again when scrolling
              variants={cardVariants}
              className="relative h-[450px] w-full sm:w-[70%] lg:w-[30%] lg:mt-[80px] transform lg:rotate-[5deg] rounded-4xl p-[12px] bg-gradient-to-b from-[#00264B] to-[#a0b0c5]"
            >
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
                    Manage all your text styles from one place—set headings, body copy, and button labels with precision and ease.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-[100px]">
        <div className="w-[90%] mx-auto flex flex-col justify-center items-center text-center">
          <AnimatedLetters
            text="We're ZMA-Solutions. We craft custom graphic designs that elevate visionary brands."
            className="text-2xl lg:text-5xl font-[600] gradient-text lg:leading-tight leading-relaxed"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;