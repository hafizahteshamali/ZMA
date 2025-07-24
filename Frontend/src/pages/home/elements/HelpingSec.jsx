import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import NormalButton from "../../../components/NormalButton";
import Aos from "aos";

/* ------------------------------------------------------------------
   AnimatedText (Word containers + char animation = reliable wrapping)
------------------------------------------------------------------- */
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

  // parent animation: sequence words
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger, // stagger words
      },
    },
  };

  // each word container (no transition needed here; handled by parent)
  const wordContainer = {
    hidden: {},
    show: {},
  };

  // each character anim
  const charVar = {
    hidden: { opacity: 0, y: yFrom, rotateX: flip ? -90 : 0 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration, ease: "easeOut" },
    },
  };

  const words = (text || "").split(" ");

  return (
    <Parent
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.6 }}
      className={className}
      style={{
        display: "block",          // allow wrap
        perspective: 1000,
        whiteSpace: "normal",      // allow line breaks
        wordBreak: "break-word",   // break long tokens if needed
      }}
    >
      {words.map((word, wi) => (
        <motion.span
          key={wi}
          variants={wordContainer}
          style={{
            display: "inline-block",
            marginRight: "0.25em", // space between words
          }}
        >
          {Array.from(word).map((ch, ci) => (
            <motion.span
              key={ci}
              variants={charVar}
              style={{
                display: "inline-block",
                transformOrigin: "50% 100%",
                willChange: "transform,opacity",
              }}
            >
              {ch}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </Parent>
  );
};

/* ------------------------------------------------------------------
   HelpingSec
------------------------------------------------------------------- */
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

  const sectionRef = useRef(null);

  // Scroll animation for whole section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "start 20%"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      style={{ scale, rotate, opacity, y }}
      className="bg-cover w-full bg-[#F3F3FA] pt-10"
    >
      <div className="container mx-auto">
        <div className="min-h-[100vh] flex justify-center items-center p-5 lg:my-0">
          <div className="min-h-[600px] w-full flex flex-col lg:flex-row justify-between items-center">
            {/* Left Image Section */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="w-[90%] lg:w-[47%]"
            >
              <img
                src={imgUrl}
                className="h-[100%] w-[100%] object-contain"
                alt=""
              />
            </div>

            {/* Right Content Section */}
            <div
              data-aos="fade-up"
              data-aos-delay="1000"
              className="w-[90%] lg:w-[47%] flex flex-col justify-around items-start gap-6 my-[50px]"
            >
              {/* Animated Heading */}
              <AnimatedText
                as="h1"
                text={heading}
                delay={0.2}
                stagger={0.03}
                duration={0.5}
                yFrom={30}
                flip
                className="text-4xl lg:text-5xl font-[600] break-words whitespace-normal"
              />

              {/* Animated Sub Title */}
              <AnimatedText
                as="h3"
                text={subTitle}
                delay={0.4}
                stagger={0.02}
                duration={0.4}
                yFrom={25}
                flip
                className="text-2xl lg:text-3xl font-[500] text-[var(--text-color)] break-words whitespace-normal"
              />

              {/* Animated Description Block */}
              <div className="w-full">
                <AnimatedText
                  as="p"
                  text={description}
                  delay={0.6}
                  stagger={0.012}
                  duration={0.35}
                  yFrom={20}
                  flip={false}
                  className="w-[100%] lg:w-[70%] text-[var(--text-color)] break-words whitespace-normal"
                />
                <AnimatedText
                  as="p"
                  text={bulletPara}
                  delay={0.8}
                  stagger={0.012}
                  duration={0.35}
                  yFrom={20}
                  flip={false}
                  className="w-[100%] lg:w-[70%] text-[var(--text-color)] mt-4 break-words whitespace-normal"
                />
              </div>

              {/* Animated Bullet List */}
              <ul className="flex flex-col gap-3">
                {bullets.map((item, index) => (
                  <li
                    key={index}
                    className="flex text-[var(--text-color)] items-center gap-3 break-words whitespace-normal"
                  >
                    <img src="/assets/images/home/tick.png" alt="" />
                    <AnimatedText
                      as="span"
                      text={item}
                      delay={0.3 + index * 0.2}
                      stagger={0.01}
                      duration={0.3}
                      yFrom={10}
                      flip={false}
                      className="break-words whitespace-normal"
                    />
                  </li>
                ))}
              </ul>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                className="w-full"
              >
                <NormalButton
                  text={btnText}
                  className="h-[50px] w-[70%] lg:w-[30%] bg-[var(--white-color)] font-[600] text-[var(--text-hover-color)]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HelpingSec;
