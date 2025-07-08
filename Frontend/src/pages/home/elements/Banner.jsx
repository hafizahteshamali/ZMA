import { useGSAP } from "@gsap/react";
import NormalButton from "../../../components/NormalButton";
import Header from "../../../navigation/Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Banner = ({ BannerData, experienceData }) => {
  const { heading, para, btnText, imgUrl } = BannerData;

  // Register plugin
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const isLargeScreen = window.innerWidth >= 1024; // 1024px is Tailwind's `lg` breakpoint
  
    gsap.to(".img", {
      scrollTrigger: {
        trigger: ".img",
        start: "top 30%",
        end: "+=1000",
        scrub: 2,
        markers: false,
      },
      y: isLargeScreen ? 800 : 900,
      x: isLargeScreen ? -1400 : 0, // 👈 x only if large screen
      width: isLargeScreen ? "200px" : "380px",
      ease: "power4.inOut",
    });
  }, []);

  return (
    <>
      <div
        className="bg-cover w-full bg-no-repeat py-10 filter brightness-100 saturate-150"
        style={{ backgroundImage: `url('/assets/images/home/banne-bg.png')` }}
      >
        <div className="container mx-auto">
          <Header />

          <div className="w-full flex flex-col lg:flex-row justify-start items-center lg:my-[70px] px-5 min-h-[900px] lg:min-h-[500px] relative">
            {/* Text section */}
            <div className="lg:w-[45%] w-full h-max flex flex-col gap-7 justify-center items-start text-center lg:text-left absolute lg:left-11 top-[60%] lg:top-7 bottom-[100px]">
              <h1 className="text-4xl lg:text-5xl lg:w-[80%] font-semibold leading-[1.2] text-[var(--text-hover-color)]">
                {heading}
              </h1>

              <p className="text-xl text-[var(--sm-heading)] lg:w-[85%] font-medium p-2">
                {para}
              </p>

              <NormalButton
                text={btnText}
                className="h-[55px] font-semibold w-full lg:w-[50%] bg-[#d5d5f1] shadow-2xl rounded-full text-[var(--text-hover-color)] text-xl"
              />
            </div>

            <img src={imgUrl} className="lg:right-16 top-[150px] lg:top-[220px] img fixed" alt="" />
          </div>

          <div className="flex flex-wrap justify-start mt-[400px] lg:mt-0">
            <div className="w-[100%] lg:w-[30%]"></div>

            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="w-[100%] lg:w-[30%] m-2 rounded-2xl py-10 px-7 bg-cover shadow-2xl"
                style={{
                  backgroundImage: `url('/assets/images/home/card-bg.png')`,
                }}
              >
                <div className="h-full flex gap-2.5 justify-between">
                  {/* Image on top */}
                  <div className="h-full flex flex-col justify-end items-start">
                    <img
                      src={exp.vector}
                      alt=""
                      className="w-[100px] object-contain"
                    />
                  </div>

                  {/* Text below */}
                  <div className="flex flex-col justify-between">
                    <h1 className=" text-[var(--text-hover-color)] text-3xl font-bold rounded">
                      {exp.head}
                    </h1>

                    <p className="text-[var(--text-color)] text-[16px] font-[600]">
                      {exp.pg}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
