import React from "react";
import { LuSquareArrowRight } from "react-icons/lu";
import { motion } from "framer-motion";

const DiscoverProject = () => {
  return (
    <motion.div
      className="container mx-auto lg:w-[80%] my-[100px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      transition={{ staggerChildren: 0.3 }}
    >
      {/* Top Banner */}
      <motion.div
        className="h-[400px] bg-cover rounded-3xl flex justify-center items-center"
        style={{
          backgroundImage: `url('/assets/images/service/bottom-banner.jpg')`,
        }}
        variants={{
          hidden: { opacity: 0, rotateX: -90 },
          visible: {
            opacity: 1,
            rotateX: 0,
            transition: { duration: 1, ease: "easeOut" },
          },
        }}
      >
        <motion.button
          className="text-[var(--white-color)] flex justify-center items-center gap-4 h-[45px] w-[60%] lg:w-[25%] serviceBtn"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span>Discover our projects</span>
          <LuSquareArrowRight className="text-3xl" />
        </motion.button>
      </motion.div>

      {/* Bottom Text Section */}
      <motion.div
        className="my-[100px] flex flex-col gap-5 justify-center items-center"
        variants={{
          hidden: { opacity: 0, y: 100, rotateX: 90 },
          visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { duration: 1, ease: "easeOut" },
          },
        }}
      >
        <h1 className="text-3xl lg:text-5xl text-center lg:leading-normal text-[#3D4F60] font-[500]">
          Development shouldn’t be complicated. <br />{" "}
          <span className="text-[var(--text-hover-color)]">
            We simplify every step.
          </span>
        </h1>
        <motion.button
          className="h-[45px] w-[50%] lg:w-[20%] bg-[#ffffff54] border-2 border-[#fff] flex justify-center items-center gap-3 rounded-lg"
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="h-[10px] w-[10px] rounded-full bg-[#00264B]"></div>
          <span className="text-[#00264B] font-[400]">Get in touch</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default DiscoverProject;
