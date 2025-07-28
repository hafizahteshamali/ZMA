import React from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGoogleDrive } from "react-icons/fa";

const WhatWeDo = () => {
  const scrollControls = useAnimation();

  const handleHoverStart = () => {
    scrollControls.start({
      y: "-30%", // you can adjust this value
      transition: { duration: 1, ease: "easeInOut" },
    });
  };

  const handleHoverEnd = () => {
    scrollControls.start({
      y: "0%",
      transition: { duration: 1, ease: "easeInOut" },
    });
  };

  return (
    <div className="w-full">
      <div className="container min-h-screen mx-auto p-3">
        <h1 className="text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#006CFF] to-[#00224F]">
          What we do?
        </h1>

        <div className="my-10 flex flex-wrap justify-between items-center gap-5 lg:gap-0">
          <div
            className="h-[500px] w-full lg:w-[48%] rounded-2xl flex justify-center items-center border border-[var(--text-hover-color)] group"
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
          >
            <div className="h-[400px] w-[90%] flex flex-col justify-center items-start gap-4">
              {/* Outer scroll box */}
              <div className="h-[220px] lg:h-[180px] w-full overflow-hidden rounded-lg p-3 bg-[#bcd1ee] border border-[var(--text-hover-color)]">
                {/* Animated scrollable inner content */}
                <motion.div
                  className="flex flex-col items-start gap-4"
                  animate={scrollControls}
                >
                  {/* Message 1 */}
                  <div className="flex justify-between items-center gap-3">
                    <div className="h-[60px] w-[60px] rounded-md flex justify-center items-center border">
                      <img
                        src="/assets/images/ai-development/face.svg"
                        className="h-[40px] w-[40px] object-contain"
                        alt=""
                      />
                    </div>
                    <div className="w-[80%] flex flex-col justify-center items-start">
                      <p className="text-[14px] text-[var(--text-hover-color)]">
                        You 8:50PM
                      </p>
                      <p className="text-[12px] text-[var(--text-hover-color)]">
                        Schedule a Google meeting with Shmas for 2:35PM
                        tomorrow!
                      </p>
                    </div>
                  </div>

                  {/* Message 2 */}
                  <div className="flex justify-between items-center gap-3">
                    <div className="h-[60px] w-[60px] rounded-md flex justify-center items-center border">
                      <img
                        src="/assets/images/ai-development/AI.svg"
                        className="h-[40px] w-[40px] object-contain"
                        alt=""
                      />
                    </div>
                    <div className="w-[80%] flex flex-col justify-center items-start">
                      <div className="flex justify-center items-center gap-3">
                        <p className="text-[14px] text-transparent bg-clip-text bg-gradient-to-r from-[#006CFF] to-[#00224F66]">
                          AI Assistant
                        </p>
                        <p className="text-[14px] text-[var(--text-hover-color)]">
                          8:30PM
                        </p>
                      </div>
                      <p className="text-[12px] text-[var(--text-hover-color)]">
                        Schedule a Google meeting with Shmas for 2:35PM
                        tomorrow!
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex justify-end items-center">
                    {/* Google Meet Card */}
                    <div className="flex justify-center items-center gap-3 border border-[var(--text-hover-color)] rounded-lg min-h-[50px] w-[80%]">
                      <FaGoogleDrive className="text-2xl" />
                      <p>Google Meet with Shams</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="my-4 w-full border border-[var(--text-hover-color)] rounded-lg py-2 px-3 flex justify-between items-center">
                <img
                  src="/assets/images/ai-development/plus.svg"
                  className="h-[40px] w-[40px]"
                  alt=""
                />
                <div className="w-[85%] flex justify-between items-center">
                  <p className="text-[14px] text-[var(--text-hover-color)]">
                    Message AI Assistant...
                  </p>
                  <img
                    src="/assets/images/ai-development/bottom-arrow.svg"
                    className="h-[40px] w-[40px]"
                    alt=""
                  />
                </div>
              </div>

              <h1 className="text-2xl text-[var(--text-hover-color)] font-[600]">
                Chatbot Development
              </h1>
              <p className="text-[12px] text-[var(--text-color)]">
                We develop intelligent chatbots that leverage advanced NLP to
                elevate customer interactions and streamline your business
                processes.
              </p>
            </div>
          </div>

          <div className="h-[500px] w-full lg:w-[48%] rounded-2xl flex justify-center items-center border border-[var(--text-hover-color)] group">
            <div className="h-[400px] w-[90%] flex flex-col justify-center items-start gap-4">
              {/* Outer scroll box */}
              <div className="h-[220px] lg:h-[180px] w-full overflow-hidden flex justify-center items-center rounded-lg p-3 bg-[#bcd1ee] border border-[var(--text-hover-color)]">
                <div
                  className="w-[70%] lg:w-[50%] h-auto rounded-lg bg-amber-400 bg-gradient-to-r from-[#006CFF] to-[#00224F66] p-[2px] mt-5 transition-all duration-300 
             hover:scale-105"
                >
                  <button className="w-full h-[40px] rounded-lg bg-[#bcd1ee] text-[#006CFF] font-semibold ">
                    Generating image...
                  </button>
                </div>
              </div>

              <div className="my-4 w-full border border-[var(--text-hover-color)] rounded-lg py-2 px-3 flex justify-between items-center">
                <div className="w-[100%] flex justify-between items-center">
                  <p className="text-[14px] text-[var(--text-hover-color)]">
                    Generate an image of...
                  </p>
                  <img
                    src="/assets/images/ai-development/bottom-arrow.svg"
                    className="h-[40px] w-[40px]"
                    alt=""
                  />
                </div>
              </div>

              <h1 className="text-2xl text-[var(--text-hover-color)] font-[600]">
                Content Creation
              </h1>
              <p className="text-[12px] text-[var(--text-color)]">
                Our content creation solutions effortlessly generate
                high-quality, engaging content according to your brand's
                guidelines to captivate your audience.
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
