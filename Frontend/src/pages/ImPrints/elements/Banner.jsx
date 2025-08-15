"use client"

import { useInView, motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Header from "../../../navigation/Header"

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

const ContentSection = ({ content, borderr, onViewportEnter, isFirst }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5, margin: "0px 0px -50% 0px" })

  useEffect(() => {
    if (isInView) {
      onViewportEnter()
    }
  }, [isInView, onViewportEnter])

  return (
    <motion.section
      ref={ref}
      className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div className={!borderr ? "mb-6 pb-6" : "mb-6 py-6 border-b-2 border-[#00254b2c]"}>
        <motion.div
          className="text-[var(--text-color)] leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: isFirst ? 0.4 : 0.2 }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </motion.div>
    </motion.section>
  )
}

const ImprintPage = () => {
  const containerRef = useRef(null)
  const [activeSection, setActiveSection] = useState(0)
  const [activatedSections, setActivatedSections] = useState(new Set([0]))

  const imprintSections = [
    {
      content: `
        <p>ZMA (ZMA Solutions)</p>
        <p>Legal form: ZMA Solutions (SMC-Private Limited)</p>
        <p>Registered office / Address:</p>
        <p>House no #152 area 36/C Korangh ro #5 Karachi, Pakistan</p>
        <p>FY180 Karachi</p>
        <p>Pakistan</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>Contact:</p>
        <p>Phone: +92 312 0288551</p>
        <p>Email: office@zma-solutions.com</p>
        <p>Website: zma.com</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>Represented by / Managing Director:</p>
        <p>Shams Ilyas</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>Company registration:</p>
        <p>Registered with: Securities and Exchange Commission of Pakistan</p>
        <p>Corporate Unique Identification Number (CUIN) : 0297649</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>Tax</p>
        <p>National Tax Number (NTN) : GA59754-2</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>Responsible for content:</p>
        <p>Shams Ilyas, House no #152 area 36/C Korangi no #5 Karachi, Pakistan</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>Professional liability / regulatory authority (if applicable):</p>
        <p>Professional title and issuing country: IT-Services, Pakistan</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>Dispute resolution / online dispute platform (EU sellers):</p>
        <p>The European Commission provides an Online Dispute Resolution platform: http://ec.europa.eu/consumers/odr/. We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>Copyright & trademark notice:</p>
        <p>All content on this website (texts, images, design, logos) is protected by copyright. Content may not be reproduced, distributed or modified without prior written consent from ZMA.</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>Limitation of liability:</p>
        <p>The information on this website is provided “as is”. ZMA makes reasonable efforts to keep content current and correct, but provides no warranty for completeness, accuracy, or fitness for a particular purpose. ZMA is not liable for indirect or consequential damages to the fullest extent permitted by law.</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>External links:</p>
        <p>This website may contain links to third-party websites. ZMA is not responsible for the content or privacy practices of those sites.</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>Privacy & data protection:</p>
        <p>For information on the processing of personal data, please see our Privacy Policy: [link to privacy policy].</p>
      `,
      borderr: false
    },
    {
      content: `
        <p>Contact for legal notices:</p>
        <p>For legal notices or takedown requests, please contact: zma@office.com</p>
        <p><strong>Effective date:</strong> 12/8/2025</p>
      `,
      borderr: false
    },
  ]

  useEffect(() => {
    setActiveSection(0)
    setActivatedSections(new Set([0]))
  }, [])

  const handleSectionEnter = (index) => {
    setActiveSection(index)
  }

  return (
    <div className="relative" ref={containerRef}>
      <Header />

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
            text="Imprint – Legal Information"
            className="text-4xl lg:text-5xl xl:text-6xl font-[500] text-[var(--text-hover-color)] lg:leading-[1.2]"
          />
          <AnimatedLetters
            text="This Imprint provides essential legal details about ZMA, including ownership, contact, and business information in compliance with applicable laws."
            className="text-[var(--text-color)] mt-5 w-full lg:w-[70%] mx-auto text-lg"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row mb-[100px]">
        {/* Static Left Side Title */}
        <div className="block lg:w-1/4 lg:pr-8 mb-8 lg:mb-0 sticky top-20 self-start lg:h-[calc(100vh-80px)]">
          <div className="pl-6">
            <h2 className="text-[18px] px-2 border-l-3 border-[var(--text-hover-color)] font-[500] text-[var(--text-hover-color)] sticky top-20">
              Imprint / Legal Notice
            </h2>
          </div>
        </div>

        {/* Content Sections */}
        <div className="block lg:w-3/4 lg:border-l-2 lg:border-[#00254b2c] lg:pl-8">
          {imprintSections.map((section, index) => (
            <ContentSection
              key={index}
              borderr={section.borderr}
              content={section.content}
              onViewportEnter={() => handleSectionEnter(index)}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImprintPage