"use client"

<<<<<<< HEAD
/* ---------- Updated AnimatedText Component (word-safe) ---------- */
=======
import { useEffect } from "react"
import NormalButton from "../../../components/NormalButton"
import Aos from "aos"
import { motion } from "framer-motion"

/* ---------- AnimatedText Component (Word Based) ---------- */
>>>>>>> e7e13f9d0e83a44058d792b2e1f1aefa70fd8547
const AnimatedText = ({
  text = "",
  as = "span",
  delay = 0,
  stagger = 0.08,
  duration = 0.45,
  yFrom = 24,
  flip = true,
  className = "",
}) => {
  const Parent = motion[as] || motion.span

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  }

  const wordVar = {
    hidden: {
      opacity: 0,
      y: yFrom,
      rotateX: flip ? -90 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration, ease: "easeOut" },
    },
  }

<<<<<<< HEAD
  const words = text?.split(" ");
=======
  // Split text into words
  const words = text.split(" ")
>>>>>>> e7e13f9d0e83a44058d792b2e1f1aefa70fd8547

  return (
    <Parent
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.6 }}
<<<<<<< HEAD
      className={className}
      style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem", perspective: 1000 }}
=======
      className={`${className} break-words whitespace-normal`}
      style={{ display: "block", perspective: 1000 }}
>>>>>>> e7e13f9d0e83a44058d792b2e1f1aefa70fd8547
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVar}
          style={{
            display: "inline-block",
            marginRight: "6px",
            transformOrigin: "50% 100%",
            willChange: "transform, opacity",
<<<<<<< HEAD
            whiteSpace: "nowrap", // prevents word from splitting
=======
>>>>>>> e7e13f9d0e83a44058d792b2e1f1aefa70fd8547
          }}
        >
          {word}
        </motion.span>
      ))}
    </Parent>
  )
}

/* ---------- Main Component ---------- */
const AboutSec = ({ AboutHeadingData, AboutContentData }) => {
  const { heading, des } = AboutHeadingData
  const { smHeading, lgHeading, para, btnText } = AboutContentData

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
<<<<<<< HEAD
    });
  }, []);
=======
    })
  }, [])
>>>>>>> e7e13f9d0e83a44058d792b2e1f1aefa70fd8547

  return (
    <div
      data-aos="zoom-in"
      className="bg-cover w-full bg-center bg-no-repeat about bg-[#F3F3FA] lg:min-h-[1000px] h-[600px] mt-[1400px] md:mt-[1500px] lg:mt-0 flex flex-col justify-center"
      style={{ backgroundImage: `url('/assets/images/home/about-bg.png')` }}
    >
      <div className="container mx-auto p-2">
        <div className="flex flex-col lg:flex-row justify-center items-center">
<<<<<<< HEAD
          <div className="lg:h-[200px] h-auto py-8 w-full flex flex-col justify-center items-center gap-4 text-center lg:text-left">
=======
          <div className="lg:h-[200px] h-auto py-8 w-full flex flex-col justify-center items-center gap-4 text-center">
            {/* Heading Animation */}
>>>>>>> e7e13f9d0e83a44058d792b2e1f1aefa70fd8547
            <AnimatedText
              as="h1"
              text={heading}
              delay={0.2}
<<<<<<< HEAD
              stagger={0.03}
=======
              stagger={0.05}
>>>>>>> e7e13f9d0e83a44058d792b2e1f1aefa70fd8547
              duration={0.5}
              yFrom={30}
              flip
              className="text-3xl sm:text-4xl md:text-5xl font-[700] text-[var(--text-hover-color)]"
            />
<<<<<<< HEAD

=======
            {/* Description Animation */}
>>>>>>> e7e13f9d0e83a44058d792b2e1f1aefa70fd8547
            <AnimatedText
              as="p"
              text={des}
              delay={0.6}
<<<<<<< HEAD
              stagger={0.015}
              duration={0.4}
              yFrom={20}
              flip={false}
              className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] text-[var(--text-color)] text-base sm:text-lg md:text-xl"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-start lg:items-center mt-10 lg:mt-0">
=======
              stagger={0.06}
              duration={0.4}
              yFrom={20}
              flip={false}
              className="w-[88%] sm:w-[70%] md:w-[60%] lg:w-[35%] text-[var(--text-color)] text-base text-[16px] break-words whitespace-normal"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-start lg:items-center mt-10 lg:mt-0">
          {/* Content Section */}
>>>>>>> e7e13f9d0e83a44058d792b2e1f1aefa70fd8547
          <div className="w-full lg:w-[60%] flex justify-start lg:ml-[70px] order-2 md:order-1 lg:order-1 lg:min-h-[100vh]">
            <div
              data-aos="zoom-in"
              data-aos-delay="500"
              className="w-full lg:w-[60%] flex flex-col justify-center items-start gap-6"
            >
<<<<<<< HEAD
=======
              {/* Small Heading */}
>>>>>>> e7e13f9d0e83a44058d792b2e1f1aefa70fd8547
              <AnimatedText
                as="h5"
                text={smHeading}
                delay={0.3}
<<<<<<< HEAD
                stagger={0.02}
=======
                stagger={0.04}
>>>>>>> e7e13f9d0e83a44058d792b2e1f1aefa70fd8547
                duration={0.4}
                yFrom={18}
                flip
                className="text-[var(--text-color)] text-base sm:text-lg md:text-xl font-[500]"
              />
<<<<<<< HEAD

=======
              {/* Large Heading */}
>>>>>>> e7e13f9d0e83a44058d792b2e1f1aefa70fd8547
              <AnimatedText
                as="h1"
                text={lgHeading}
                delay={0.6}
<<<<<<< HEAD
                stagger={0.02}
=======
                stagger={0.04}
>>>>>>> e7e13f9d0e83a44058d792b2e1f1aefa70fd8547
                duration={0.45}
                yFrom={24}
                flip
                className="text-[var(--text-hover-color)] text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight"
              />
<<<<<<< HEAD

=======
              {/* Paragraph */}
>>>>>>> e7e13f9d0e83a44058d792b2e1f1aefa70fd8547
              <AnimatedText
                as="p"
                text={para}
                delay={0.9}
<<<<<<< HEAD
                stagger={0.012}
                duration={0.35}
                yFrom={15}
                flip={false}
                className="text-[var(--text-color)] w-full text-sm sm:text-base md:text-lg"
              />

=======
                stagger={0.03}
                duration={0.35}
                yFrom={15}
                flip={false}
                className="text-[var(--text-color)] text-[16px] w-[97%] sm:text-base md:text-lg break-words whitespace-normal"
              />
              {/* Button */}
>>>>>>> e7e13f9d0e83a44058d792b2e1f1aefa70fd8547
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                className="w-full my-7"
              >
                <NormalButton
                  text={btnText}
                  className="h-[40px] sm:h-[45px] w-[70%] sm:w-[50%] border border-[#CBE1FF] text-[var(--text-hover-color)] text-sm sm:text-base md:text-lg font-[600] bg-[var(--white-color)] shadow-2xl rounded-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
};
=======
  )
}
>>>>>>> e7e13f9d0e83a44058d792b2e1f1aefa70fd8547

export default AboutSec
