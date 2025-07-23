import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Lenis from "lenis";
import Header from "../../../navigation/Header";
import NormalButton from "../../../components/NormalButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// NOTE: prop se bhi aata hai; fallback ke liye import
import { experienceData as EXPERIENCE_FALLBACK } from "../../../assets/ConstantData";

// --- GSAP plugin once ---
gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/* MAIN BANNER                                                         */
/* ------------------------------------------------------------------ */
const Banner = ({ BannerData, experienceData }) => {
  const container = useRef(null);

  // Fallback if prop missing
  const cards =
    experienceData && experienceData.length
      ? experienceData
      : EXPERIENCE_FALLBACK;

  // Whole banner scroll progress (used by Section1 + Section2 wrappers)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      // Lenis cleanup
      lenis.destroy();
    };
  }, []);

  return (
    <main ref={container} className="relative h-[200vh]">
      {/* Fixed header stays above sections */}
      <div className="fixed top-5 z-10 left-0 right-0">
        <Header />
      </div>

      <Section1 scrollYProgress={scrollYProgress} BannerData={BannerData} />
      <Section2 scrollYProgress={scrollYProgress} experienceData={cards} />
    </main>
  );
};

/* ------------------------------------------------------------------ */
/* SECTION 1  (unchanged hero GSAP move)                               */
/* ------------------------------------------------------------------ */
const Section1 = ({ scrollYProgress, BannerData }) => {
  const { heading, para, btnText, imgUrl } = BannerData;

  // Framer Motion macro transforms (zoom out + tilt as user scrolls whole banner)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  // GSAP: move the hero image (.img) and the floating .img2 (if present later)
  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Kill all previous triggers before re-creating
    ScrollTrigger.getAll().forEach((st) => st.kill());

    mm.add(
      {
        isLarge: "(min-width: 1024px)",
        isSmall: "(max-width: 1023px)",
      },
      (context) => {
        let { isLarge } = context.conditions;

        // ✅ Image 1 Animation
        gsap.to(".img", {
          scrollTrigger: {
            trigger: ".img",
            start: "top 20%",
            end: "+=800", // controlled scroll distance
            scrub: 1.5, // smooth scrub
            markers: false,
            invalidateOnRefresh: true,
          },
          y: isLarge ? 580 : 850,
          x: isLarge ? -870 : 0,
          width: isLarge ? "300px" : "380px",
          ease: "none", // natural scroll-based feel
        });

        // ✅ Image 2 Animation
        gsap.fromTo(
          ".img2",
          {
            y: isLarge ? -200 : -150,
            x: 0,
            width: isLarge ? "300px" : "250px",
          },
          {
            y: isLarge ? 350 : 400,
            x: isLarge ? -180 : 50,
            width: isLarge ? "300px" : "250px",
            ease: "none",
            scrollTrigger: {
              trigger: ".img2",
              start: "top 85%",
              end: "bottom top+=400",
              scrub: 1.5,
              markers: false,
              invalidateOnRefresh: true,
            },
          }
        );
      }
    );
  }, []);

  return (
    <motion.div
      style={{
        scale,
        rotate,
        backgroundImage: `url('/assets/images/home/sec-banner-img.png')`,
      }}
      className="sticky top-0 h-[1000px] pt-[300px] lg:pt-0 lg:mt-0 lg:h-screen bg-cover bg-no-repeat overflow-hidden text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]"
    >
      <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:mt-[150px] px-5 lg:min-h-[500px] relative">
        {/* Text */}
        <div className="lg:w-[45%] md:w-[70%] p-3 w-full h-max flex flex-col gap-7 justify-center items-start lg:ml-14 text-center lg:text-left">
          <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl lg:w-[80%] font-semibold leading-[1.2] text-[var(--text-hover-color)]">
            {heading}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[var(--sm-heading)] lg:w-[85%] font-medium p-2">
            {para}
          </p>
          <NormalButton
            text={btnText}
            className="h-[45px] sm:h-[50px] md:h-[55px] font-semibold w-full lg:w-[50%] bg-[#d5d5f1] shadow-2xl rounded-full text-[var(--text-hover-color)] text-lg sm:text-xl"
          />
        </div>

        {/* Hero image (GSAP target .img) */}
        <div className="lg:w-[45%] flex justify-center items-center">
          <img
            src={imgUrl}
            className="h-[500px] w-[500px] object-contain img"
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/* SECTION 2  (continuous scroll swivel cards)                         */
/* ------------------------------------------------------------------ */

/** Single card with scroll-driven swivel. */
const SwivelCard = ({ exp, index }) => {
  const cardRef = useRef(null);

  // Individual scroll progress per card
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 90%", "start 10%"], // When card enters near bottom → fully visible near top
  });

  // Raw transforms (index offset subtle variation)
  const startAngle = index % 2 === 0 ? 80 : -80; // alternate direction
  const rotateYRaw = useTransform(scrollYProgress, [0, 1], [startAngle, 0]);
  const opacityRaw = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleRaw = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  // Smooth springs
  const rotateY = useSpring(rotateYRaw, { stiffness: 60, damping: 18 });
  const opacity = useSpring(opacityRaw, { stiffness: 100, damping: 20 });
  const scale = useSpring(scaleRaw, { stiffness: 80, damping: 18 });

  // Transform origin responsive: large screen hinge-left/right, mobile center
  const transformOrigin =
    typeof window !== "undefined" && window.innerWidth >= 1024
      ? index % 2 === 0
        ? "left center"
        : "right center"
      : "center center";

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateY,
        opacity,
        scale,
        transformStyle: "preserve-3d",
        transformOrigin,
        willChange: "transform, opacity",
        backgroundImage: `url('/assets/images/home/card-bg.png')`,
      }}
      className="min-h-[260px] w-[100%] lg:w-[30%] md:w-[70%] p-3 md:mx-auto m-2 rounded-2xl py-10 px-7 bg-cover shadow-2xl"
    >
      <div className="h-full flex gap-2.5 justify-between">
        {/* Icon */}
        <div className="h-full flex flex-col justify-end items-start">
          <img
            src={exp.vector}
            alt=""
            className="w-[60px] sm:w-[80px] md:w-[100px] object-contain"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-between">
          <h1 className="text-[var(--text-hover-color)] text-xl sm:text-2xl font-bold rounded">
            {exp.head}
          </h1>
          <p className="text-[var(--text-color)] font-[600]">
            {exp.pg}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress, experienceData }) => {
  // If not passed, bail gracefully
  const cards =
    experienceData && experienceData.length
      ? experienceData
      : EXPERIENCE_FALLBACK;

  // Section‑level macro transforms (like you had)
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div
      style={{
        scale,
        rotate,
        backgroundImage: `url('/assets/images/home/bg-second.png')`,
      }}
      className="relative lg:h-screen z-0 overflow-hidden bg-cover bg-no-repeat perspective-[1000px] py-5  lg:py-0"
    >
      {/* Decorative floating img2 (GSAP handles movement from Section1 useGSAP) */}
      <img
        src="/assets/images/home/banner-img.png"
        className="h-[300px] w-[300px] object-contain img2 absolute -top-[300px] lg:left-[300px]"
        alt=""
      />

      <div className="container mx-auto">
        <div className="lg:h-screen h-[1550px] mt-[300px] lg:mt-0 flex justify-center items-center">
          <div className="flex flex-wrap justify-start lg:mt-0">
            <div className="w-[100%] lg:w-[30%]" />
            {cards.map((exp, index) => (
              <SwivelCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
