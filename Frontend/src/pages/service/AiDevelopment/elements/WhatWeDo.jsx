import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGoogleDrive } from "react-icons/fa";
import Slider from "react-slick";
import Aos from "aos";

const WhatWeDo = () => {
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
  };

  const settings2 = {
    ...settings1,
    rtl: true,
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false, // repeat animation every time on scroll
    });
  }, []);

  const slides = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const cardMessageControls = useAnimation();
  const barMessageControls = useAnimation();
  const contentCardTextControls = useAnimation();
  const contentLLMCardTextControls = useAnimation();
  const efficiencyControls = useAnimation();
  const costControls = useAnimation();

  const handleHoverStartCard1 = () => {
    cardMessageControls.start({
      y: "-40%",
      transition: { duration: 0.6, ease: "easeInOut" },
    });
    barMessageControls.start({
      y: "-50px",
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  };

  const handleHoverEndCard1 = () => {
    cardMessageControls.start({
      y: "0%",
      transition: { duration: 0.6, ease: "easeInOut" },
    });
    barMessageControls.start({
      y: "0px",
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  };

  const handleHoverStartCard2 = () => {
    contentCardTextControls.start({
      y: "-50px",
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  };

  const handleHoverEndCard2 = () => {
    contentCardTextControls.start({
      y: "0px",
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  };

  const handleHoverStartCard3 = () => {
    contentLLMCardTextControls.start({
      y: "-50px",
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  };

  const handleHoverEndCard3 = () => {
    contentLLMCardTextControls.start({
      y: "0px",
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  };

  const handleHoverStartLastCard = () => {
    efficiencyControls.start({
      x: 100,
      transition: { duration: 0.6, ease: "easeInOut" },
    });
    costControls.start({
      rotate: 0,
      y: 70,
      x: -80,
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  };

  const handleHoverEndLastCard = () => {
    efficiencyControls.start({
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    });
    costControls.start({
      rotate: 0,
      y: 0,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  };

  return (
    <div className="w-full">
      <div className="container min-h-screen mx-auto p-3">
        <h1 className="text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#006CFF] to-[#00224F]">
          What we do?
        </h1>

        <div className="my-10 flex flex-wrap justify-around items-center gap-5 lg:gap-0">
          {/* ----- Card 1 ----- */}
          <div
            data-aos="flip-up"
            data-aos-delay="300"
            className="h-[500px] w-full lg:w-[48%] rounded-2xl flex justify-center items-center border-t border-[var(--text-hover-color)] shadow group"
            onMouseEnter={handleHoverStartCard1}
            onMouseLeave={handleHoverEndCard1}
          >
            <div className="h-[400px] w-[90%] flex flex-col justify-center items-start gap-4">
              <div className="h-[220px] lg:h-[180px] w-full overflow-hidden rounded-lg p-3 bg-[#bcd1ee] border border-gray-500">
                <motion.div
                  className="flex flex-col gap-4"
                  animate={cardMessageControls}
                  initial={{ y: "0%" }}
                >
                  <div className="flex gap-3">
                    <div className="h-[40px] w-[40px] rounded-md flex justify-center items-center border">
                      <img
                        src="/assets/images/ai-development/face.svg"
                        className="h-[30px] w-[30px] object-contain"
                        alt=""
                      />
                    </div>
                    <div className="w-[80%]">
                      <p className="text-[14px] text-[var(--text-hover-color)]">
                        You 8:50PM
                      </p>
                      <p className="text-[12px] text-[var(--text-hover-color)]">
                        Schedule a Google meeting with Shmas for 2:35PM
                        tomorrow!
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="h-[40px] w-[40px] rounded-md flex justify-center items-center border">
                      <img
                        src="/assets/images/ai-development/AI.svg"
                        className="h-[20px] w-[20px] object-contain"
                        alt=""
                      />
                    </div>
                    <div className="w-[80%]">
                      <div className="flex items-center gap-3">
                        <p className="text-[14px] text-transparent bg-clip-text bg-gradient-to-r from-[#006CFF] to-[#00224F66]">
                          AI Assistant
                        </p>
                        <p className="text-[14px] text-[var(--text-hover-color)]">
                          8:30PM
                        </p>
                      </div>
                      <p className="text-[12px] text-[var(--text-hover-color)]">
                        Meeting scheduled successfully!
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex justify-end items-center">
                    <div className="flex items-center gap-3 border border-[var(--text-hover-color)] rounded-lg min-h-[50px] w-[80%] px-3 py-2">
                      <FaGoogleDrive className="text-2xl" />
                      <p className="text-[12px]">Google Meet with Shmas</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="my-4 w-full border border-gray-500 rounded-lg py-2 px-3 flex justify-between items-center overflow-hidden h-[50px] relative">
                <img
                  src="/assets/images/ai-development/plus.svg"
                  className="h-[30px] w-[30px] z-10 mr-3"
                  alt=""
                />
                <div className="w-[80%] px-1 overflow-hidden h-[50px] relative">
                  <motion.div
                    className="absolute top-0 left-0 flex flex-col"
                    animate={barMessageControls}
                    initial={{ y: "0px" }}
                  >
                    <p className="text-[14px] text-[var(--text-hover-color)] h-[50px] flex items-center">
                      Message AI Assistant...
                    </p>
                    <p className="text-[14px] text-[var(--text-hover-color)] h-[50px] flex items-center">
                      How can I help you today?
                    </p>
                  </motion.div>
                </div>
                <img
                  src="/assets/images/ai-development/bottom-arrow.svg"
                  className="h-[30px] w-[30px] z-10"
                  alt=""
                />
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

          {/* ----- Card 2 ----- */}
          <div
            data-aos="flip-up"
            data-aos-delay="500"
            className="h-[500px] w-full lg:w-[48%] rounded-2xl flex justify-center items-center border-t border-[var(--text-hover-color)] shadow group"
            onMouseEnter={handleHoverStartCard2}
            onMouseLeave={handleHoverEndCard2}
          >
            <div className="h-[400px] w-[90%] flex flex-col justify-center items-start gap-4">
              <div className="h-[220px] lg:h-[180px] w-full overflow-hidden flex justify-center items-center rounded-lg p-3 bg-[#bcd1ee] border border-gray-500">
                <motion.div className="w-[70%] lg:w-[50%] h-auto group-hover:scale-105 transition-all duration-300 rounded-lg bg-gradient-to-r from-[#006CFF] to-[#00224F66] p-[2px] mt-5">
                  <button className="w-full h-[40px] rounded-lg bg-[#bcd1ee] text-[#006CFF] font-semibold">
                    Generating image...
                  </button>
                </motion.div>
              </div>

              <div className="my-4 w-full border border-gray-500 rounded-lg py-2 px-3 flex justify-between items-center overflow-hidden h-[50px] relative">
                <div className="w-[100%] px-1 overflow-hidden h-[50px] relative">
                  <motion.div
                    className="absolute top-0 left-0 flex flex-col"
                    animate={contentCardTextControls}
                    initial={{ y: "0px" }}
                  >
                    <p className="text-[14px] text-[var(--text-hover-color)] h-[50px] flex items-center">
                      Generate an image of...
                    </p>
                    <p className="text-[14px] text-[var(--text-hover-color)] h-[50px] flex items-center">
                      AI generating artwork based on prompt
                    </p>
                  </motion.div>
                </div>
                <img
                  src="/assets/images/ai-development/bottom-arrow.svg"
                  className="h-[30px] w-[30px] z-10"
                  alt=""
                />
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

          {/* ----- Row 2 Card 1: Dual Slider ----- */}
          <div
            data-aos="flip-up"
            data-aos-delay="700"
            className="h-[400px] w-full lg:w-[32%] relative rounded-2xl flex justify-center items-center border-t border-[var(--text-hover-color)] shadow my-8"
          >
            <div className="w-full absolute top-[10%]">
              {/* First Slider - Left to Right */}
              {/* First Row */}
              <Slider {...settings1} className="w-full p-1">
                {slides.map((item, i) => (
                  <div key={i} className="px-2">
                    <div className="h-[70px] w-[70px] bg-[#c2d7f4] flex items-center justify-center rounded-lg">
                      <h3 className="text-sm font-semibold"></h3>
                    </div>
                  </div>
                ))}
              </Slider>

              {/* Second Row */}
              <Slider {...settings2} className="w-full mt-3 p-1">
                {slides.map((item, i) => (
                  <div key={i} className="px-2">
                    <div className="h-[70px] w-[70px] bg-[#c2d7f4] flex items-center justify-center rounded-lg">
                      <h3 className="text-sm font-semibold"></h3>
                    </div>
                  </div>
                ))}
              </Slider>
              <img
                src="/assets/images/ai-development/ellips.svg"
                className="h-[200px] w-[200px] rounded-full bg-[#c2d7f4] object-contain absolute z-10 -top-[15px] left-[50%] transform -translate-x-[50%]"
                alt=""
              />
            </div>

            <div className="absolute bottom-[5%] w-[90%]">
              <h1 className="text-2xl lg:text-3xl text-[var(--text-hover-color)] font-[600]">
                Workflow Automations
              </h1>
              <p className="text-[16px] text-[var(--text-color)] mt-4">
                We automate your workflows to streamline repetitive tasks,
                enhance efficiency, save time, and eliminate errors.
              </p>
            </div>
          </div>

          {/* ----- Row 2 Card 2: Dual Slider ----- */}
          <div
            data-aos="flip-up"
            data-aos-delay="900"
            className="h-[400px] w-full lg:w-[32%] relative rounded-2xl flex justify-center items-center border-t border-[var(--text-hover-color)] shadow my-8"
            onMouseEnter={handleHoverStartCard3}
            onMouseLeave={handleHoverEndCard3}
          >
            <div className="h-[300px] w-[90%]">
              <div className="w-full flex justify-center items-center">
                <img
                  src="/assets/images/ai-development/llm-img.svg"
                  className="w-[100%] object-contain"
                  alt=""
                />
              </div>

              <div className="my-4 w-full border border-gray-500 rounded-lg py-2 px-3 flex justify-between items-center overflow-hidden h-[50px] relative">
                <div className="w-[100%] px-1 overflow-hidden h-[50px] relative">
                  <motion.div
                    className="absolute top-0 left-0 flex flex-col"
                    animate={contentLLMCardTextControls}
                    initial={{ y: "0px" }}
                  >
                    <p className="text-[14px] text-[var(--text-hover-color)] h-[50px] flex items-center">
                      Generate an image of...
                    </p>
                    <p className="text-[14px] text-[var(--text-hover-color)] h-[50px] flex items-center">
                      AI generating artwork based on prompt
                    </p>
                  </motion.div>
                </div>
                <img
                  src="/assets/images/ai-development/bottom-arrow.svg"
                  className="h-[30px] w-[30px] z-10"
                  alt=""
                />
              </div>

              <h1 className="text-2xl lg:text-3xl text-[var(--text-hover-color)] font-[600] my-6">
                LLM Development
              </h1>
              <p className="text-[16px] text-[var(--text-color)] mt-4">
                We develop Large Language Models that transform how your company
                interacts with data and customers.
              </p>
            </div>
          </div>

          {/* ----- Last Card with Animation ----- */}
          <div
            data-aos="flip-up"
            data-aos-delay="1100"
            className="h-[400px] w-full lg:w-[32%] rounded-2xl px-5 py-3 flex justify-center items-center border-t border-[var(--text-hover-color)] shadow my-8"
            onMouseEnter={handleHoverStartLastCard}
            onMouseLeave={handleHoverEndLastCard}
          >
            <div className="w-full relative">
              <img
                src="/assets/images/ai-development/graph.svg"
                className="w-full"
                alt=""
              />
              <motion.div
                className="w-max h-auto rounded bg-gradient-to-r from-[#006CFF] to-[#00224F66] p-[1px] absolute top-[20px] left-[50px]"
                animate={efficiencyControls}
                initial={{ x: 0 }}
              >
                <button className="w-full rounded h-[25px] px-2 text-[12px] bg-[#bcd1ee] text-[#006CFF] font-semibold">
                  Efficiency +103%
                </button>
              </motion.div>

              <motion.div
                className="w-max h-auto rounded bg-gradient-to-r from-[#006CFF] to-[#00224F66] p-[1px] absolute top-[45px] right-[50px]"
                animate={costControls}
                initial={{ rotate: 0, y: 0 }}
              >
                <button className="w-full rounded h-[25px] px-2 text-[12px] bg-[#bcd1ee] text-[#006CFF] font-semibold">
                  Cost -67%
                </button>
              </motion.div>

              <h1 className="text-2xl lg:text-3xl text-[var(--text-hover-color)] font-[600] my-6">
                AI Consulting
              </h1>
              <p className="text-[16px] text-[var(--text-color)] mt-4">
                Our experts provide strategic guidance, enabling your business
                to implement AI solutions that drive transformative growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
