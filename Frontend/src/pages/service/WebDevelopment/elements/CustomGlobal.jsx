"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

const CustomGlobal = ({ clientsName = [] }) => {
  const duplicatedClients = [...clientsName, ...clientsName, ...clientsName]

  return (
    <div className="container mx-auto py-8" style={{ background: "#cbe1ff" }}>
      {/* Logo Slider */}
      <div className="w-[80%] mx-auto relative overflow-hidden">
        <div className="flex animate-slide-left-smooth" style={{ width: `${duplicatedClients.length * 250}px` }}>
          {duplicatedClients.map((src, index) => (
            <div key={index} className="px-4 flex-shrink-0" style={{ width: "250px" }}>
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
        {/* Fade overlays */}
        <div className="fade-left"></div>
        <div className="fade-right"></div>
      </div>

      <style jsx>{`
        :root {
          --bg: #cbe1ff;
        }

        @keyframes slide-left-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-slide-left-smooth {
          animation: slide-left-smooth 35s linear infinite;
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
  )
}

export default CustomGlobal