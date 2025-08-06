"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"

const Reviews = ({ Reviews1, Reviews2 }) => {
  const theirWordsRef = useRef(null)
  const isTheirWordsInView = useInView(theirWordsRef, {
    once: false,
    amount: 0.3,
  })

  const duplicatedReviews1 = [...Reviews1, ...Reviews1, ...Reviews1]
  const duplicatedReviews2 = [...Reviews2, ...Reviews2, ...Reviews2]

  return (
    <div className="container mx-auto px-4" style={{ background: "#cbe1ff" }}>
      <div className="w-full">
        <div className="lg:w-[100%] mx-auto">
          <div
            ref={theirWordsRef}
            className={`my-[100px] duration-1000 bg-[#cbe1ff] ${
              isTheirWordsInView ? "opacity-100" : "opacity-100"
            }`}
          >
            <h1 className="text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#006CFF] to-[#00224F]">Reviews</h1>

            {/* First Slider - Left to Right */}
            <div className="w-full my-10 relative overflow-hidden slider-container">
              <div className="flex animate-slide-left-smooth" style={{ width: `${duplicatedReviews1.length * 320}px` }}>
                {duplicatedReviews1.map((item, index) => (
                  <div
                    key={index}
                    className="h-[250px] px-2 flex justify-center items-center flex-shrink-0 slide-item"
                    style={{ width: "320px" }}
                  >
                    <div className="h-full w-full border border-[#9dc0ef] rounded-lg p-5 flex flex-col justify-between bg-[#9dc0ef1e] transition-all duration-500 hover:shadow-lg">
                      <div className="bg-[#bcd1ee77] p-3 rounded-lg">
                        <p className="text-[14px] text-[var(--text-color)]">{item.description}</p>
                      </div>
                      <div className="bg-[#bcd1ee77] p-3 flex justify-start items-center gap-3 mt-3 rounded-lg">
                        <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
                          <img
                            src={item.profileImg || "/placeholder.svg"}
                            alt="profile"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="text-[14px] font-[600] text-[var(--text-hover-color)]">{item.name}</p>
                          <p className="text-[12px] text-[var(--text-color)]">{item.designation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Fade overlays */}
              <div className="fade-left-slider1"></div>
              <div className="fade-right-slider1"></div>
            </div>

            {/* Second Slider - Right to Left */}
            <div className="w-full relative overflow-hidden slider-container">
              <div
                className="flex animate-slide-right-smooth"
                style={{ width: `${duplicatedReviews2.length * 320}px` }}
              >
                {duplicatedReviews2.map((item, index) => (
                  <div
                    key={index}
                    className="h-[250px] px-2 flex justify-center items-center flex-shrink-0 slide-item"
                    style={{ width: "320px" }}
                  >
                    <div className="h-full w-full border border-[#9dc0ef] rounded-lg p-5 flex flex-col justify-between bg-[#9dc0ef1e] transition-all duration-500 hover:shadow-lg">
                      <div className="bg-[#bcd1ee77] p-3 rounded-lg">
                        <p className="text-[14px] text-[var(--text-color)]">{item.description}</p>
                      </div>
                      <div className="bg-[#bcd1ee77] p-3 flex justify-start items-center gap-3 mt-3 rounded-lg">
                        <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
                          <img
                            src={item.profileImg || "/placeholder.svg"}
                            alt="profile"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="text-[14px] font-[600] text-[var(--text-hover-color)]">{item.name}</p>
                          <p className="text-[12px] text-[var(--text-color)]">{item.designation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Fade overlays */}
              <div className="fade-left-slider2"></div>
              <div className="fade-right-slider2"></div>
            </div>
          </div>
        </div>
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

        @keyframes slide-right-smooth {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes fadeInSlide {
          0%, 100% {
            transform: scale(0.95);
          }
          50% {
            transform: scale(1);
          }
        }

        .animate-slide-left-smooth {
          animation: slide-left-smooth 35s linear infinite;
        }

        .animate-slide-right-smooth {
          animation: slide-right-smooth 35s linear infinite;
        }

        .slider-container {
          position: relative;
        }

        .slide-item {
          animation: fadeInSlide 8s ease-in-out infinite;
        }

        .slide-item > div {
          transition: all 0.3s ease;
        }

        .slide-item:hover > div {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        /* Fade overlay for slider 1 (left to right) */
        .fade-left-slider1 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 100%;
          background: linear-gradient(to right, var(--bg) 0%, transparent 100%);
          pointer-events: none;
          z-index: 10;
        }

        .fade-right-slider1 {
          position: absolute;
          top: 0;
          right: 0;
          width: 100px;
          height: 100%;
          background: linear-gradient(to left, var(--bg) 0%, transparent 100%);
          pointer-events: none;
          z-index: 10;
        }

        /* Fade overlay for slider 2 (right to left) */
        .fade-left-slider2 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 100%;
          background: linear-gradient(to right, var(--bg) 0%, transparent 100%);
          pointer-events: none;
          z-index: 10;
        }

        .fade-right-slider2 {
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
          .fade-left-slider1,
          .fade-right-slider1,
          .fade-left-slider2,
          .fade-right-slider2 {
            width: 50px;
          }
        }
      `}</style>
    </div>
  )
}

export default Reviews