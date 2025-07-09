import React from "react";
import NormalButton from "../../../components/NormalButton";

const AboutSec = ({ AboutHeadingData, AboutContentData }) => {
  const { heading, des } = AboutHeadingData;
  const { smHeading, lgHeading, para, btnText, imgUrl } = AboutContentData;
  return (
    <>
      <div
        className="bg-cover w-full bg-center bg-no-repeat about"
        style={{ backgroundImage: `url('/assets/images/home/about-bg.png')` }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center ">
            <div className="lg:h-[200px] h-[400px] w-full flex flex-col justify-center items-center gap-4">
              <h1 className="text-5xl font-[700] text-center lg:text-left overflow-hidden text-[var(--text-hover-color)]">
                {heading}
              </h1>
              <p className="lg:w-[40%] text-[var(--text-color)] text-center">
                {des}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:flex-row justify-between items-start lg:items-center">
            {/* Content Section */}
            <div className="w-full lg:w-[60%] flex justify-start lg:ml-[70px] order-2 md:order-1 lg:order-1 lg:min-h-[100vh]">
              <div className="w-[90%] lg:w-[70%] p-4 flex flex-col justify-center items-start gap-6">
                <h5 className="text-[var(--text-color)] font-[500]">
                  {smHeading}
                </h5>
                <h1 className="text-[var(--text-hover-color)] text-3xl lg:text-4xl overflow-hidden">
                  {lgHeading}
                </h1>
                <p className="text-[var(--text-color)]">{para}</p>
                <NormalButton
                  text={btnText}
                  className="h-[45px] w-[50%] border border-[#CBE1FF] text-[var(--text-hover-color)] font-[600] bg-[var(--white-color)] shadow-2xl rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSec;
