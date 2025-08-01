import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// Enhanced Animated Text Component with continuous scroll detection
const AnimatedText = ({ text, className, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const words = text.split(/(\s+)/).filter((word) => word.length > 0);

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={`${className} whitespace-normal`}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.03, delayChildren: delay },
        },
      }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-pre-wrap">
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  },
                },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

const ProcessSec = () => {
  const cardRefs = [useRef(null), useRef(null), useRef(null)];
  const cardControls = [useAnimation(), useAnimation(), useAnimation()];

  // Track card visibility for continuous animation
  cardRefs.forEach((ref, index) => {
    const isInView = useInView(ref, { once: false, amount: 0.1 });
    React.useEffect(() => {
      if (isInView) {
        cardControls[index].start("visible");
      } else {
        cardControls[index].start("hidden");
      }
    }, [isInView, index]);
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="">
      <div className="container mx-auto p-3">
        <div className="flex flex-col items-start">
          <AnimatedText
            text="The process"
            className="text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#006CFF] to-[#00224F]"
          />

          <div className="my-10 w-full flex flex-wrap justify-around items-center gap-5 lg:gap-0">
            {/* ----- Card 1 ----- */}
            <motion.div
              ref={cardRefs[0]}
              className="h-[400px] w-full lg:w-[32%] rounded-2xl flex justify-center items-center border-t border-[var(--text-hover-color)] shadow my-8"
              initial="hidden"
              animate={cardControls[0]}
              variants={cardVariants}
            >
              <div className="w-[85%] flex flex-col justify-center gap-5">
                <motion.img
                  src="/assets/images/ai-development/analyze.svg"
                  className="h-[200px] w-full"
                  alt=""
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={cardControls[0]}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.6, delay: 0.2 },
                    },
                  }}
                />
                <div className="break-words">
                  <AnimatedText
                    text="Analyze"
                    className="text-2xl lg:text-3xl text-[var(--text-hover-color)] font-[600]"
                    delay={0.3}
                  />
                  <AnimatedText
                    text="We start with a thorough analysis of your current workflows to see how AI could improve your processes."
                    className="text-[16px] text-[var(--text-color)] mt-4 break-words"
                    delay={0.4}
                  />
                </div>
              </div>
            </motion.div>

            {/* ----- Card 2 ----- */}
            <motion.div
              ref={cardRefs[1]}
              className="h-[400px] w-full lg:w-[32%] rounded-2xl flex justify-center items-center border-t border-[var(--text-hover-color)] shadow my-8"
              initial="hidden"
              animate={cardControls[1]}
              variants={cardVariants}
              transition={{ delay: 0.2 }}
            >
              <div className="w-[85%] flex flex-col justify-center gap-5">
                <motion.img
                  src="/assets/images/ai-development/build.svg"
                  className="h-[200px] w-full"
                  alt=""
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={cardControls[1]}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.6, delay: 0.4 },
                    },
                  }}
                />
                <div className="break-words">
                  <AnimatedText
                    text="Build & Implement"
                    className="text-2xl lg:text-3xl text-[var(--text-hover-color)] font-[600]"
                    delay={0.5}
                  />
                  <AnimatedText
                    text="Then, our developers will start crafting custom AI-solutions for your company, continuously prioritising quality and safety."
                    className="text-[16px] text-[var(--text-color)] mt-4 break-words"
                    delay={0.6}
                  />
                </div>
              </div>
            </motion.div>

            {/* ----- Card 3 ----- */}
            <motion.div
              ref={cardRefs[2]}
              className="h-[400px] w-full lg:w-[32%] rounded-2xl flex justify-center items-center border-t border-[var(--text-hover-color)] shadow my-8"
              initial="hidden"
              animate={cardControls[2]}
              variants={cardVariants}
              transition={{ delay: 0.4 }}
            >
              <div className="w-[85%] flex flex-col justify-center gap-5">
                <motion.img
                  src="/assets/images/ai-development/maintain.svg"
                  className="h-[200px] w-full"
                  alt=""
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={cardControls[2]}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.6, delay: 0.6 },
                    },
                  }}
                />
                <div className="break-words">
                  <AnimatedText
                    text="Maintain & improve"
                    className="text-2xl lg:text-3xl text-[var(--text-hover-color)] font-[600]"
                    delay={0.7}
                  />
                  <AnimatedText
                    text="After deployment, our team will keep working hard by providing support and continuously improving the implemented solutions."
                    className="text-[16px] text-[var(--text-color)] mt-4 break-words"
                    delay={0.8}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProcessSec;
