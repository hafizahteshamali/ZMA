import React, { useEffect, useRef } from "react";
import NormalButton from "../../../components/NormalButton";
import ProcessTabs from "../../../components/Tabs";
import { tabs } from "../../../assets/ConstantData";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Aos from "aos";

/* ------------------------------------------------------------------
   AnimatedText: Word-Level Animation (Wrapping Fix)
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

  const wordContainer = {
    hidden: {},
    show: {},
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
      transition: {
        duration,
        ease: "easeOut",
      },
    },
  };

  const words = text.split(" ");

  return (
    <Parent
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.6 }}
      className={className}
      style={{
        display: "block",
        perspective: 1000,
        whiteSpace: "normal",
        wordBreak: "break-word",
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordContainer}
          style={{ display: "inline-block", marginRight: "0.25em" }}
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
   ServiceSec
------------------------------------------------------------------- */
const ServiceSec = ({ SeviceContent }) => {
  const { lgHeading, smHeading, description, btnText, imgUrl } = SeviceContent;

  /* ---------------- HERO SECTION ---------------- */
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start 95%", "start 10%"],
  });

  const _heroRotate = useTransform(heroProgress, [0, 1], [120, 0]);
  const _heroScale = useTransform(heroProgress, [0, 1], [0.9, 1]);
  const _heroOpacity = useTransform(heroProgress, [0, 1], [0, 1]);
  const _heroY = useTransform(heroProgress, [0, 1], [120, 0]);

  const heroRotate = useSpring(_heroRotate, { stiffness: 60, damping: 20 });
  const heroScale = useSpring(_heroScale, { stiffness: 80, damping: 15 });
  const heroOpacity = useSpring(_heroOpacity, { stiffness: 100, damping: 20 });
  const heroY = useSpring(_heroY, { stiffness: 70, damping: 18 });

  const heroElemsProgress = useTransform(heroProgress, [0, 0.35, 1], [0, 0, 1]);
  const heroElemRotateY = useTransform(heroElemsProgress, [0, 1], [45, 0]);
  const heroElemOpacity = useTransform(heroElemsProgress, [0, 1], [0, 1]);
  const heroElemY = useTransform(heroElemsProgress, [0, 1], [40, 0]);

  /* ---------------- CONTENT SECTION ---------------- */
  const contentRef = useRef(null);
  const { scrollYProgress: contentProgress } = useScroll({
    target: contentRef,
    offset: ["start 100%", "start 20%"],
  });

  const _contentRotate = useTransform(contentProgress, [0, 1], [-120, 0]);
  const _contentScale = useTransform(contentProgress, [0, 1], [0.9, 1]);
  const _contentOpacity = useTransform(contentProgress, [0, 1], [0, 1]);
  const _contentY = useTransform(contentProgress, [0, 1], [140, 0]);

  const contentRotate = useSpring(_contentRotate, { stiffness: 60, damping: 20 });
  const contentScale = useSpring(_contentScale, { stiffness: 80, damping: 15 });
  const contentOpacity = useSpring(_contentOpacity, { stiffness: 100, damping: 20 });
  const contentY = useSpring(_contentY, { stiffness: 70, damping: 18 });

  const contentElemsProgress = useTransform(contentProgress, [0, 0.4, 1], [0, 0, 1]);
  const contentElemRotateY = useTransform(contentElemsProgress, [0, 1], [-45, 0]);
  const contentElemOpacity = useTransform(contentElemsProgress, [0, 1], [0, 1]);
  const contentElemY = useTransform(contentElemsProgress, [0, 1], [50, 0]);

  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <motion.div
        ref={heroRef}
        style={{
          rotate: heroRotate,
          scale: heroScale,
          opacity: heroOpacity,
          y: heroY,
          backgroundImage: "url('/assets/images/home/services-bg.png')",
          transformPerspective: 1000,
        }}
        className="lg:h-screen h-[500px] bg-[#F3F3FA] relative bg-cover bg-center bg-no-repeat overflow-hidden will-change-[transform,opacity]"
      >
        <motion.img
          src="/assets/images/home/mobile.png"
          alt=""
          style={{
            rotateY: heroElemRotateY,
            opacity: heroElemOpacity,
            y: heroElemY,
            transformStyle: "preserve-3d",
          }}
          className="object-contain lg:h-[650px] h-[400px] z-20 absolute bottom-0 left-1/2 -translate-x-1/2"
        />

        <motion.div
          style={{
            rotateY: heroElemRotateY,
            opacity: heroElemOpacity,
            y: heroElemY,
            transformStyle: "preserve-3d",
          }}
          className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <marquee direction="right" scrollamount="20" className="w-full">
            <h1 className="text-[20px] sm:text-[40px] md:text-[70px] lg:text-[100px] text-[var(--text-hover-color)] font-[600] w-full whitespace-nowrap">
              LEVEL UP YOUR PROJECTS
            </h1>
          </marquee>
        </motion.div>

        <motion.div
          style={{
            rotateY: heroElemRotateY,
            opacity: heroElemOpacity,
            y: heroElemY,
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-0 flex flex-col lg:block items-center justify-center gap-4 lg:gap-0 z-30 px-4"
        >
          <NormalButton text="IT SOLUTIONS" className="h-[45px] sm:h-[50px] hidden lg:block w-[200px] sm:w-[250px] bg-[#ffffff] text-[var(--text-hover-color)] font-[600] lg:absolute lg:top-[15%] lg:left-[10%]" />
          <NormalButton text="AI Developers" className="h-[45px] sm:h-[50px] hidden lg:block w-[200px] sm:w-[250px] bg-[#ffffff] text-[var(--text-hover-color)] font-[600] lg:absolute lg:top-[20%] lg:right-[10%]" />
          <NormalButton text="GRAPHICS DESINGING" className="h-[45px] sm:h-[50px] hidden lg:block w-[200px] sm:w-[250px] bg-[#ffffff] text-[var(--text-hover-color)] font-[600] lg:absolute lg:bottom-[25%] lg:left-[10%]" />
          <NormalButton text="Web Developers" className="h-[45px] sm:h-[50px] hidden lg:block w-[200px] sm:w-[250px] bg-[#ffffff] text-[var(--text-hover-color)] font-[600] lg:absolute lg:bottom-[15%] lg:right-[10%]" />
        </motion.div>
      </motion.div>

      {/* ===== CONTENT + TABS SECTION ===== */}
      <motion.div
        ref={contentRef}
        style={{
          rotate: contentRotate,
          scale: contentScale,
          opacity: contentOpacity,
          y: contentY,
          transformPerspective: 1000,
        }}
        className="bg-[#F3F3FA] py-[70px] will-change-[transform,opacity]"
      >
        <div className="container mx-auto lg:min-h-[700px]">
          <div className="h-full flex flex-col lg:flex-row justify-between items-center p-3">
            {/* Left Content */}
            <motion.div
              style={{
                rotateY: contentElemRotateY,
                opacity: contentElemOpacity,
                y: contentElemY,
                transformStyle: "preserve-3d",
              }}
              className="w-[100%] lg:w-[50%] flex flex-col justify-center items-start gap-7"
            >
              <AnimatedText
                as="h1"
                text={lgHeading}
                delay={0.2}
                stagger={0.02}
                duration={0.45}
                yFrom={24}
                flip
                className="text-4xl sm:text-4xl lg:text-5xl w-[100%] lg:w-[75%] font-[600] leading-tight text-left"
              />

              <AnimatedText
                as="h2"
                text={smHeading}
                delay={0.5}
                stagger={0.02}
                duration={0.4}
                yFrom={20}
                flip
                className="text-lg sm:text-xl text-[var(--text-color)] font-[500] text-left"
              />

              <AnimatedText
                as="p"
                text={description}
                delay={0.8}
                stagger={0.01}
                duration={0.35}
                yFrom={16}
                flip={false}
                className="w-[100%] lg:w-[70%] text-[var(--text-color)] text-base sm:text-lg text-left"
              />

              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ delay: 1.2, duration: 0.35, ease: "easeOut" }}
              >
                <NormalButton
                  text={btnText}
                  className="h-[45px] w-[100%] lg:w-[30%] border border-[#CBE1FF] text-[var(--text-hover-color)] font-[600] bg-[var(--white-color)] shadow-2xl rounded-full"
                />
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              style={{
                rotateY: contentElemRotateY,
                opacity: contentElemOpacity,
                y: contentElemY,
                transformStyle: "preserve-3d",
              }}
              className="w-[100%] lg:w-[50%] my-7 lg:my-0"
            >
              <motion.img
                src={imgUrl}
                alt=""
                initial={{ opacity: 0, rotateY: -30, y: 20 }}
                whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                className="h-[100%] w-[100%] object-contain"
              />
            </motion.div>
          </div>

          {/* Tabs Section */}
          <motion.div
            style={{
              rotateY: contentElemRotateY,
              opacity: contentElemOpacity,
              y: contentElemY,
              transformStyle: "preserve-3d",
            }}
            className="mt-[100px]"
          >
            <ProcessTabs tabs={tabs} />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ServiceSec;
