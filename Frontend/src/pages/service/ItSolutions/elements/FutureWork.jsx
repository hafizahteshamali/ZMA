import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { img } from "framer-motion/client";

const FutureWork = ({ FutureWorkData }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false, // Animation runs every time on scroll
    });
  }, []);

  const { heading, para } = FutureWorkData;
  const [isImgChange, setIsImgChange] = useState(false);

  const Card3imgChange = () => {
    setIsImgChange(true);
  };

  const Card3imgDefault = () => {
    setIsImgChange(false);
  };

  return (
    <div className="container mx-auto min-h-screen w-[90%]">
      {/* Heading Section */}
      <div className="min-h-[300px] flex justify-center items-center">
        <div className="h-[100%] lg:w-[45%] mx-auto flex flex-col justify-center items-center gap-5">
          <h1
            className="text-3xl text-[var(--text-hover-color)]"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            {heading}
          </h1>
          <p
            className="text-center text-[var(--text-hover-color)]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {para}
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full lg:w-[90%] mx-auto mb-[100px] flex flex-wrap justify-around items-center gap-5">
        {/* Card 1 */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="min-h-[400px] w-full md:w-[45%] lg:w-[50%] bg-cover bg-no-repeat !overflow-hidden rounded-2xl relative"
          style={{
            backgroundImage: `url('/assets/images/it-solutions/card1.png')`,
          }}
        >
          <div className="bg-[var(--text-hover-color)] w-[25%] py-1 flex justify-center items-center text-[var(--white-color)] rounded-full absolute top-6 left-6">
            IT-Driven
          </div>
          <div className="lg:h-[50%] w-[90%] absolute left-[50%] transform -translate-x-[50%] bottom-5">
            <h1 className="text-xl lg:text-3xl xl:text-4xl w-[90%] lg:leading-9 xl:leading-12 text-[var(--white-color)]">
              We Help You Build Scalable IT-Driven Products
            </h1>
            <p className="my-5 text-[var(--white-color)] text-[14px] font-[200]">
              From backend systems to cloud architecture, we deliver end-to-end
              IT solutions that grow with your business and adapt to change.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="h-[400px] w-full md:w-[45%] lg:w-[45%] bg-cover bg-no-repeat !overflow-hidden rounded-2xl"
        >
          <img
            src="/assets/images/it-solutions/card2.jpg"
            className="h-full w-full object-cover"
            alt=""
          />
        </div>

        {/* Card 3 */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="h-[400px] w-full md:w-[45%] lg:w-[31%] bg-cover bg-no-repeat flex justify-center items-center overflow-hidden rounded-2xl bg-[var(--text-hover-color)]"
          onMouseOver={Card3imgChange}
          onMouseOut={Card3imgDefault}
        >
          <div className="min-h-[350px] w-[90%] relative">
            {/* Default Image */}
            <img
              src="/assets/images/it-solutions/card3.svg"
              className={`h-[100px] w-[80%] object-contain mx-auto mt-10 transition-all duration-500 ${
                isImgChange ? "opacity-0" : "opacity-100"
              }`}
              alt=""
            />

            {/* Hover Image */}
            <img
              src="/assets/images/it-solutions/card3-hover.svg"
              className={`h-[100px] w-[80%] object-contain mx-auto mt-12 absolute top-0 left-0 right-0 transition-all duration-500 ${
                isImgChange ? "opacity-100" : "opacity-0"
              }`}
              alt=""
            />

            <div className="absolute bottom-5 left-[50%] transform -translate-x-[50%] w-full">
              <h1 className="my-5 text-2xl text-[var(--white-color)]">
                Stable & Secure Systems
              </h1>
              <p className="text-[14px] font-[200] text-[var(--white-color)]">
                Keep your operations smooth with reliable infrastructure,
                real-time monitoring, and expert maintenance.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 with Animated Span */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="group min-h-[400px] w-full md:w-[45%] lg:w-[31%] bg-cover bg-no-repeat flex justify-center items-center overflow-hidden rounded-2xl bg-[var(--text-hover-color)]"
        >
          <div className="h-[300px] w-[90%] relative">
            <div className="h-[150px] w-full flex flex-col justify-center items-center absolute">
              <img
                src="/assets/images/it-solutions/card4.svg"
                className="w-[90%] object-cover mx-auto"
                alt=""
              />
              <span
                className="text-white absolute bottom-0 left-0 opacity-0 -translate-x-[100%] 
        group-hover:opacity-100 group-hover:translate-x-[140px] bg-gray-500 px-1.5 rounded
        transition-all duration-1000 ease-out"
              >
                90%
              </span>
            </div>
            <div className="absolute bottom-0 left-[50%] transform -translate-x-[50%] w-full">
              <h1 className="my-5 text-2xl text-[var(--white-color)]">
                Built for Loyalty
              </h1>
              <p className="text-[14px] font-[200] text-[var(--white-color)]">
                Our IT solutions are designed to keep users engaged, satisfied,
                and coming back driving long-term value and trust.
              </p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="h-[400px] w-full lg:w-[31%] bg-cover bg-no-repeat flex flex-col justify-between items-center overflow-hidden rounded-2xl relative"
        >
          <div className="min-h-[150px] w-[100%] bg-[var(--text-hover-color)] p-5 rounded-2xl flex flex-col justify-around items-start absolute top-0 left-[50%] transform -translate-x-[50%]">
            <img
              src="/assets/images/it-solutions/card5.svg"
              className="h-[40px] object-contain"
              alt=""
            />
            <p className="text-[var(--white-color)] text-[14px] font-[200]">
              Our users span across the different continents of the world.
            </p>
          </div>
          <div className="min-h-[230px] w-[100%] bg-[var(--text-hover-color)] p-5 rounded-2xl flex flex-col justify-around items-start absolute bottom-0 left-[50%] transform -translate-x-[50%] card5">
            <div className="min-h-[200px] w-[100%] flex flex-col justify-center items-start">
              <h1 className="my-5 text-2xl text-[var(--white-color)]">
                Start with Real Insights
              </h1>
              <p className="text-[14px] font-[200] text-[var(--white-color)]">
                Gain full visibility into your IT infrastructure with real-time
                analytics, empowering smarter decisions and continuous
                improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureWork;
