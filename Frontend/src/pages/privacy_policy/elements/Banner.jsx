"use client"

import { useInView, motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { privacySections } from "../../../assets/ConstantData"
import Header from "../../../navigation/Header" // <- apne project ke header ka path yahan sahi lagao

// Animated heading letters
const AnimatedLetters = ({ text, className }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.03 },
    },
  }

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  }

  const words = text.split(/(\s+)/).filter((word) => word.length > 0)

  return (
    <motion.div
      ref={ref}
      className={`${className || ""} flex flex-wrap justify-center text-center`}
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
  )
}

// Privacy section component
const PrivacySection = ({ title, content, borderr, onViewportEnter }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      onViewportEnter()
    }
  }, [isInView, onViewportEnter])

  return (
    <motion.section
      ref={ref}
      id={title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
      className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <motion.div className={!borderr ? "mb-6 py-6" : "mb-6 py-6 border-b-2 border-[#00254b2c]"}>
        <motion.h2
          className="text-2xl md:text-3xl text-[var(--text-hover-color)] mb-5 font-[500]"
          initial={{ x: -20, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-[var(--text-color)] leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          {content}
        </motion.p>
      </motion.div>
    </motion.section>
  )
}

const Banner = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const [activeSection, setActiveSection] = useState(0)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [activatedSections, setActivatedSections] = useState(new Set())
  const [sequentialActivationStarted, setSequentialActivationStarted] = useState(false)

  // Sequential activation of sections
  useEffect(() => {
    if (isInView && !sequentialActivationStarted) {
      setSequentialActivationStarted(true)
      privacySections.forEach((_, index) => {
        setTimeout(() => {
          setActivatedSections((prev) => new Set([...prev, index]))
        }, index * 800)
      })
    }
  }, [isInView, sequentialActivationStarted])

  const handleSectionEnter = (index) => {
    setActiveSection(index)
  }

  return (
    <div className="relative" ref={containerRef}>
      {/* Header added */}
      <Header />

      {/* Banner Image + Headings */}
      <div className="min-h-[600px] w-full relative overflow-hidden">
        <motion.img
          src="/assets/images/about/top-banner-bg.png"
          alt=""
          className="absolute top-0 right-0 object-cover w-full h-full"
          initial={{ x: "30%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{
            duration: 3.5,
            ease: [0.16, 0.77, 0.47, 0.97],
            delay: 0.2,
          }}
        />

        <div className="container mx-auto w-full mt-[200px] xl:w-[70%] px-4 sm:px-6 lg:px-8 absolute left-[50%] transform -translate-x-[50%]">
          <AnimatedLetters
            text="Privacy Policy"
            className="text-4xl lg:text-5xl xl:text-6xl font-[500] text-[var(--text-hover-color)]"
          />
          <AnimatedLetters
            text="Thank you for choosing ZMA. This Privacy Policy explains how we collect, use, and protect information when you visit our website or use our services (web development, AI development, graphic design, and IT services). By using our site or services, you agree to the practices described below."
            className="text-[var(--text-color)] mt-5 lg:w-[80%] mx-auto"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row mb-[100px]">
        {/* Mobile Navigation */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="flex items-center justify-between w-full p-4 bg-[#00254b1a] rounded-lg"
          >
            <span className="font-medium text-[var(--text-hover-color)]">
              {privacySections[activeSection].title}
            </span>
            <motion.div animate={{ rotate: mobileNavOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </button>
        </div>

        {mobileNavOpen && (
          <motion.div
            className="lg:hidden mb-8 bg-white shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="py-2">
              {privacySections.map((section, index) => (
                <li key={index}>
                  <a
                    href={`#${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    onClick={() => {
                      setActiveSection(index)
                      setMobileNavOpen(false)
                    }}
                    className={`block px-4 py-3 transition-colors ${
                      activeSection === index
                        ? "bg-[#00254b1a] text-[var(--text-hover-color)] font-medium"
                        : "text-[var(--text-color)] hover:bg-[#00254b0d]"
                    }`}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Desktop Navigation */}
        <div className="hidden lg:block lg:w-1/4 lg:pr-8 mb-8 lg:mb-0 sticky top-20 self-start h-[calc(100vh-80px)] overflow-y-auto">
          <motion.div
            className="pl-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <ul className="space-y-4">
              {privacySections.map((section, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.05 }}
                >
                  <a
                    href={`#${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className={`block transition-colors duration-300 ${
                      activeSection === index
                        ? "text-[var(--text-hover-color)] font-medium"
                        : "text-[var(--text-color)] hover:text-[var(--text-hover-color)]"
                    }`}
                    onClick={() => setActiveSection(index)}
                  >
                    <motion.div
                      className="flex items-center"
                      animate={activeSection === index ? { x: 5 } : { x: 0 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      {activeSection === index && (
                        <motion.span
                          className="w-0.5 h-[40px] bg-[var(--text-hover-color)] mr-2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500 }}
                        />
                      )}
                      {section.title}
                    </motion.div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Right Side Content */}
        <div className="lg:w-3/4 lg:border-l-2 lg:border-[#00254b2c] lg:pl-8">
          {privacySections.map(
            (section, index) =>
              activatedSections.has(index) && (
                <PrivacySection
                  key={index}
                  borderr={section.borderr}
                  title={section.title}
                  content={section.content}
                  onViewportEnter={() => handleSectionEnter(index)}
                />
              )
          )}
        </div>
      </div>
    </div>
  )
}

export default Banner
