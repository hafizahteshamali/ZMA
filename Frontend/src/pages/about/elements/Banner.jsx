import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "../../../navigation/Header"; // Apne path ke according import karo

// Animated Letters Component
const AnimatedLetters = ({ text, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.03 } },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 0.77, 0.47, 0.97] },
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

// Banner Component
const Banner = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 0.77, 0.47, 0.97] } },
  };

  return (
    <div className="relative" ref={containerRef}>
      {/* ✅ Header always on top */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Background Image Section */}
      <div className="min-h-[800px] sm:min-h-[750px] md:min-h-[800px] lg:min-h-[900px] xl:min-h-[1000px] w-full relative overflow-hidden">
        <motion.img
          src="/assets/images/about/top-banner-bg.png"
          alt=""
          className="absolute top-0 right-0 object-cover w-full h-full"
          initial={{ x: "30%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 3.5, ease: [0.16, 0.77, 0.47, 0.97], delay: 0.2 }}
        />

        {/* Main Heading */}
        <div className="container mx-auto w-full xl:w-[70%] px-4 sm:px-6 lg:px-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[350%] sm:-translate-y-[250%] md:-translate-y-[260%] lg:-translate-y-[250%] xl:-translate-y-[150%]">
          <motion.div
            className="w-full mx-auto flex flex-col justify-center items-center text-center px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 0.77, 0.47, 0.97] }}
          >
            <AnimatedLetters
              text="Building the fastest path to scalable, secure, and innovative tech solutions"
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium md:font-[500] leading-snug sm:leading-relaxed md:leading-tight lg:leading-tight text-[var(--text-hover-color)]"
            />
          </motion.div>
        </div>

        {/* Content Section */}
        <motion.div
          className="absolute bottom-0 w-full h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 3, ease: [0.16, 0.77, 0.47, 0.97] }}
        >
          <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8 h-full py-8 md:py-12 lg:py-16">
            <motion.div
              className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Left Column */}
              <motion.div className="w-full lg:w-[40%]" variants={itemVariants}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-snug lg:leading-14 text-[var(--text-hover-color)] font-medium md:font-[500]">
                  Your Data. One Platform. Infinite Possibilities.
                </h1>
              </motion.div>

              {/* Right Column */}
              <motion.div className="w-full lg:w-[60%] flex flex-col gap-4 sm:gap-6" variants={containerVariants}>
                <motion.p className="text-sm sm:text-base md:text-lg text-[var(--text-hover-color)] font-normal" variants={itemVariants}>
                  ZMA consolidates all your digital needs into one unified technology platform streamlining web development, AI tools, graphic design, and IT services under a single interface. No more juggling multiple vendors or disparate workflows.
                </motion.p>
                <motion.p className="text-sm sm:text-base md:text-lg text-[var(--text-hover-color)] font-normal" variants={itemVariants}>
                  Our clients gain full visibility into every stage of their projects, reduce overhead, and empower their teams to move faster and with greater confidence. From drafting specifications and designing interfaces to deploying infrastructure and providing ongoing support, ZMA handles it all.
                </motion.p>
                <motion.p className="text-sm sm:text-base md:text-lg text-[var(--text-hover-color)] font-normal" variants={itemVariants}>
                  Backed by modern frameworks and AI-driven automation, ZMA creates a single source of truth by connecting code repositories, data pipelines, design assets, and system monitoring. Regardless of technical skill level, every stakeholder can explore, collaborate, and turn insights into action—effortlessly.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
