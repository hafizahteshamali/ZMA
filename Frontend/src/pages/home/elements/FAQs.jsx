import Aos from "aos";
import React, { useEffect } from "react";

const FAQs = ({ FAQsHeadingData }) => {
  const { lgHeading, description, FAQsTabs } = FAQsHeadingData;

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false, // repeat animation every time on scroll
    });
  }, []);

  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('/assets/images/home/faq-bg.png')` }}
    >
      <div className="container mx-auto">
        <div className="w-full flex justify-center items-center">
          <div className="w-full p-5 flex flex-col gap-5 justify-center items-center">
            <h1
              data-aos="fade-up"
              className="text-4xl font-[500] overflow-hidden"
            >
              {lgHeading}
            </h1>
            <p
              data-aos="fade-up"
              className="lg:w-[40%] lg:text-center text-[var(--text-color)]"
            >
              {description}
            </p>

            <div className="flex justify-center flex-wrap w-[100%] items-center gap-10">
              {FAQsTabs.map((item, index) => {
                return (
                  <div
                    key={index}
                    data-aos={item.fade}
                    className={
                      item.isLarge == true
                        ? "lg:h-[200px] w-[100%] rounded-4xl my-3 box relative"
                        : "lg:h-[200px] w-[100%] md:w-[47%] lg:w-[45%] rounded-4xl my-3 box relative"
                    }
                  >
                    <img
                      src="/assets/images/home/3d-vector.svg"
                      className="absolute h-[40px] w-[40px] object-contain left-16 top-[-20px]"
                      alt=""
                    />
                    <img
                      src="/assets/images/home/3d-vector.svg"
                      className="absolute h-[40px] w-[40px] object-contain -right-[18px] top-[50%]"
                      alt=""
                    />

                    <div className="h-[100%] w-[100%] flex justify-center items-center ">
                      <div
                        className={
                          item.isLarge
                            ? "min-h-[270px] lg:min-h-[150px] w-[90%] flex flex-col gap-3 justify-center items-start"
                            : "min-h-[150px] w-[80%] flex flex-col gap-3 justify-center items-start"
                        }
                      >
                        <h1 className="text-xl lg:text-2xl font-[600] text-[var(--text-hover-color)]">
                          {item.question}
                        </h1>
                        <p className="text-[16px] font-[400] text-[var(--text-color)]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
