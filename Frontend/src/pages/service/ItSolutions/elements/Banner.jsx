import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "../../../../navigation/Header";
import NormalButton from "../../../../components/NormalButton";

const Banner = ({ clientsName = [] }) => {
  const duplicatedClients = [...clientsName, ...clientsName, ...clientsName];

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

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

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="container mx-auto">
        <Header />

        <div className="h-[800px] lg:h-[820px] w-full flex flex-col justify-end items-center">
          <div className="h-[650px] lg:h-[700px] w-full flex flex-col justify-between items-center">
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="py-2 px-3 bg-[var(--text-hover-color)] w-[90%] lg:w-[20%] mx-auto rounded-full flex justify-center items-center"
            >
              <p className="text-[var(--white-color)] text-[14px]">
                Reliable. Scalable. Always On.
              </p>
            </motion.div>

            <motion.h1
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl w-full lg:text-[80px] lg:leading-20 text-center lg:w-[70%] mx-auto font-[600] text-[var(--text-hover-color)]"
            >
              The digital infrastructure your vision needs
            </motion.h1>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[var(--text-color)] w-[90%] lg:w-[60%] mx-auto text-center"
            >
              Our expert team designs, implements, and manages reliable IT
              systems tailored to your business goals so you can focus on
              innovation while we handle the tech.
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="w-full flex justify-center items-center gap-5"
            >
              <NormalButton
                text="Learn More"
                className="h-[40px] w-[45%] lg:w-[8%] text-[13px] bg-[var(--text-hover-color)] rounded-full text-[var(--white-color)]"
              />
              <NormalButton
                text="Contact us"
                className="h-[40px] w-[45%] lg:w-[8%] text-[13px] bg-[var(--white-color)] rounded-full text-[var(--text-hover-color)]"
              />
            </motion.div>

            <motion.img
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              src="/assets/images/it-solutions/banner.png"
              className="object-cover h-[300px]"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Logo slider section with container */}
      <div className="w-full bg-[#00264b] py-8">
        {" "}
        {/* Container with padding */}
        <div className="h-[100px] max-w-6xl mx-auto relative overflow-hidden">
          {" "}
          {/* Centered container with max-width */}
          <div className="w-full h-full absolute inset-0 flex items-center">
            {/* Logo slider content */}
            <div className="flex animate-slide-left-smooth">
              {[...duplicatedClients, ...duplicatedClients].map(
                (src, index) => (
                  <div
                    key={`logo-${index}`}
                    className="px-4 flex-shrink-0"
                    style={{ width: "250px" }}
                  >
                    <div className="h-20 sm:h-24 md:h-28 flex justify-center items-center">
                      <img
                        src={src}
                        alt={`Client logo ${index + 1}`}
                        className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          {/* Gradient fade overlays */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#00264b] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#00264b] to-transparent z-10"></div>
          <style jsx>{`
            @keyframes slide-left-smooth {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .animate-slide-left-smooth {
              animation: slide-left-smooth 40s linear infinite;
              will-change: transform;
            }

            @media (max-width: 768px) {
              .animate-slide-left-smooth {
                animation-duration: 30s;
              }
              .max-w-7xl {
                max-width: 100%;
                padding: 0 1rem;
              }
            }
          `}</style>
        </div>
      </div>

      <div className="container mx-auto mt-[100px]">
        <div className="w-[90%] mx-auto flex flex-col justify-center items-center text-center">
          <AnimatedLetters
            text="We’re ZMA-Solutions. We build tailored IT solutions that empower modern businesses."
            className="text-2xl lg:text-5xl font-[600] gradient-text lg:leading-tight leading-relaxed"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
