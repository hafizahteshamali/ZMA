import React, { useEffect, useRef, useState } from "react";
import Modal from "../../../../components/Modal";
import { FaRegWindowClose } from "react-icons/fa";
import { AnimatePresence, useInView, motion } from "framer-motion";
import { LiaImagesSolid } from "react-icons/lia";
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
      className={`${className} flex flex-wrap`}
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

const CreativeSec = () => {
  const [isGalleryModal, setIsGalleryModal] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false, // repeat animation every time on scroll
    });
  }, []);

  return (
    <div className="container mx-auto my-[100px] lg:mt-0">
      <div data-aos="fade-up" data-aos-delay="500" className="lg:h-[600px] flex flex-col lg:flex-row justify-between items-start">
        <div className="w-[100%] lg:w-[33%] h-min lg:h-[550px] relative p-2">
          <AnimatedLetters
            className="text-5xl lg:text-8xl text-[var(--text-hover-color)] text-left font-[600] absolute bottom-0 lg:translate-y-[0%] lg:bottom-0 top-[50%] transform -translate-y-[50%]"
            text="The Creative Compass"
          />
        </div>

        <div className="w-[100%] lg:w-[33%] h-max mt-14 lg:mt-0 lg:h-[550px] relative p-2 group overflow-hidden">
          <img
            onClick={() => setIsGalleryModal(true)}
            src="/assets/images/graphic-designing/creative-img.png"
            className="h-[500px] w-full object-contain cursor-pointer transition-transform duration-500 ease-in-out group-hover:scale-110"
            alt=""
          />
          <div
            onClick={() => setIsGalleryModal(true)}
            className="w-[40%] cursor-pointer bg-[var(--white-color)] absolute top-[50%] left-[50%] transform p-2 rounded-lg -translate-x-[50%] -translate-y-[50%] flex gap-2 justify-center items-center
    opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
          >
            <LiaImagesSolid className="text-3xl" />
            <p>Explore Now</p>
          </div>
        </div>

        <div className="w-[100%] lg:w-[33%] lg:h-[550px] min-h-[150px] relative p-2">
          <div className="absolute bottom-0">
            <AnimatedLetters
              text="Guiding your brand’s look and feel,"
              className="text-[var(--text-color)] w-full"
            />
            <AnimatedLetters
              text="we craft on‑point logos and marketing graphics that keep your messaging true and your visuals on‑track."
              className="text-[var(--text-color)]"
            />
            <div className="my-7 flex justify-start items-center gap-3">
              <img
                src="/assets/images/graphic-designing/top-arrow.svg"
                className="h-[40px] w-[40px]"
                alt=""
              />
              <div className="pb-0.5 border-b-2 border-[var(--text-hover-color)]">
                <AnimatedLetters
                  text="About our projects"
                  className="text-[var(--text-hover-color)] font-[600]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isGalleryModal} onClose={() => setIsGalleryModal(false)}>
        <img
          src="/assets/images/graphic-designing/modal-img1.jpeg"
          alt="modal"
          className="object-contain"
          style={{ width: "200%", height: "auto", pointerEvents: "none" }}
        />
      </Modal>
    </div>
  );
};

export default CreativeSec;
