import React, { useEffect } from "react";
import NormalButton from "../../../components/NormalButton";
import ProcessTabs from "../../../components/Tabs";
import { tabs } from "../../../assets/ConstantData";
import Aos from "aos";

const ServiceSec = ({SeviceContent}) => {
    const {lgHeading, smHeading, description, btnText, imgUrl} = SeviceContent;


    useEffect(() => {
      Aos.init({
        duration: 1000,
        once: false, // repeat animation every time on scroll
      });
    }, []);
    

  return (
    <>
      <div className="lg:h-[900px] mt-[100px]">
        <img
          src="/assets/images/home/mobileBanner.png"
          className="h-[100%] w-[100%] object-fill"
          alt=""
        />
      </div>

      <div
        className="min-h-[800px] bg-cover bg-no-repeat py-[70px]  mt-10"
        style={{ backgroundImage: `url('/assets/images/home/service-bg.png')` }}
      >
        <div className="container mx-auto lg:min-h-[700px]">
          <div className="h-full flex flex-col lg:flex-row justify-between items-center p-3">
            <div data-aos="fade-right" className="w-[100%] lg:w-[50%] flex flex-col justify-center items-start gap-7">
                <h1 className="text-4xl w-[100%] lg:w-[70%] overflow-hidden font-[600] leading-12">{lgHeading}</h1>
                <h2 className="text-xl text-[var(--text-color)] font-[500]">{smHeading}</h2>
                <p className="w-[100%] lg:w-[70%] text-[var(--text-color)]">{description}</p>
                <NormalButton
                  text={btnText}
                  className="h-[45px] w-[60%] lg:w-[30%] border border-[#CBE1FF] text-[var(--text-hover-color)] font-[600] bg-[var(--white-color)] shadow-2xl rounded-full"
                />
            </div>

            <div data-aos="fade-left" className="w-[100%] lg:w-[50%] my-7 lg:my-0">
                <img src={imgUrl} className="h-[100%] w-[100%] object-contain" alt="" />
            </div>
          </div>


          <div className="mt-[100px]">
            <ProcessTabs tabs={tabs} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSec;
