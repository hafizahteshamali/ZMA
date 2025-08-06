import React from "react";
import { motion } from "framer-motion";
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

      {/* Logo slider section */}
      <div className="h-[150px] bg-[var(--text-hover-color)] w-full flex justify-center items-center">
        <div className="w-[80%] mx-auto relative overflow-hidden">
          <div className="flex items-center">
            {/* First set for seamless looping */}
            <div className="flex animate-slide-left-smooth-first">
              {duplicatedClients.map((src, index) => (
                <div
                  key={`first-${index}`}
                  className="px-4 flex-shrink-0"
                  style={{ width: "250px" }}
                >
                  <div className="h-20 sm:h-24 md:h-28 flex justify-center items-center">
                    <img
                      src={src}
                      alt={`Client logo ${index + 1}`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fade overlays */}
          <div className="fade-left"></div>
          <div className="fade-right"></div>
        </div>

        <style jsx>{`
          :root {
            --bg: #00264b !important;
          }

          @keyframes slide-left-smooth-first {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          @keyframes slide-left-smooth-second {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-slide-left-smooth-first {
            animation: slide-left-smooth-first 30s linear infinite;
          }

          .animate-slide-left-smooth-second {
            animation: slide-left-smooth-second 30s linear infinite;
            animation-delay: -15s; /* Half of the animation duration for seamless looping */
          }

          .fade-left {
            position: absolute;
            top: 0;
            left: 0;
            width: 100px;
            height: 100%;
            background: linear-gradient(to right, var(--bg) 0%, transparent 100%);
            pointer-events: none;
            z-index: 10;
          }

          .fade-right {
            position: absolute;
            top: 0;
            right: 0;
            width: 100px;
            height: 100%;
            background: linear-gradient(to left, var(--bg) 0%, transparent 100%);
            pointer-events: none;
            z-index: 10;
          }

          @media (max-width: 768px) {
            .fade-left,
            .fade-right {
              width: 50px;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Banner;