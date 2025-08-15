"use client";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ProjectData } from "../../../assets/ConstantData";
import CaseStudyModal from "../../../components/CaseStudyModal";
import Header from "../../../navigation/Header";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeDevice, setActiveDevice] = useState("desktop"); // 'desktop' or 'mobile'
  const [isSelected, setIsSelected] = useState(null)

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCase(null);
    setActiveDevice("desktop"); // Reset to desktop when closing
  };

  const handleCaseStudyModal = (id) => {
    const caseData = ProjectData.find((item) => item.id === id);
    setSelectedCase(caseData);
    setActiveDevice("desktop"); // Start with desktop video
    openModal();
  };

  const handleDeviceSwitch = (device) => {
    setActiveDevice(device);
  };

  const selectedCate = (cat)=>{
    setIsSelected(cat)
    setIsModalOpen(false);
  }

  return (
    <div className="flex flex-col justify-end items-center">
      <Header />
      <div className="w-full mt-[150px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-start items-center gap-5 py-10">
            {/* Title */}
            <h1 className="text-3xl lg:text-5xl text-[var(--text-hover-color)] font-medium text-center">
              Comprehensive Commerce & Technology Audit
            </h1>

            {/* Services Tag */}
            <div className="flex justify-center items-center gap-2.5">
              <div className="h-[10px] w-[10px] bg-[#519BFF] rounded-full blink-dot"></div>
              <p className="uppercase text-[#519BFF] font-medium">services</p>
            </div>

            {/* Content Area */}
            <div className="w-full mt-10 flex items-start flex-col justify-start gap-5">
              <div className="w-full flex justify-start items-center gap-5">
                <button className="h-[40px] flex justify-center items-center gap-2 text-[var(--text-color)] bg-[#00000015] rounded w-[50%] lg:w-[15%]">
                  <img
                    src="/assets/images/case-study/vector.svg"
                    className="h-5 w-5 text-[var(--text-color)]"
                    alt=""
                  />
                  All projects
                </button>

                {isSelected && (
                  <button className="h-[40px] flex justify-center items-center gap-2 bg-[#00000015] text-[var(--text-hover-color)] font-[500] rounded px-2">
                  <img
                    src="/assets/images/case-study/vector2.svg"
                    className="h-5 w-5 text-[var(--text-color)]"
                    alt=""
                  />
                  {isSelected}
                </button>
                )}
              </div>

              <div className="h-[50px] w-[100%] flex justify-between items-center">
                <div className="h-[50px] w-[60%] lg:w-[80%] bg-[#00000015] rounded-lg flex justify-start gap-2 items-center px-5">
                  <img
                    src="/assets/images/case-study/gridicons_filter.svg"
                    className="h-5 w-5 text-[var(--text-color)]"
                    alt=""
                  />
                  <input
                    placeholder="Filter projects"
                    type="text"
                    className="bg-transparent h-full w-[100%] px-5 border-none outline-none text-[var(--text-color)]"
                  />
                </div>
                <button className="h-[50px] w-[35%] lg:w-[18%] flex justify-center items-center gap-2 bg-[#00000015] text-[var(--text-color)] font-[500] rounded ">
                  Companies
                </button>
              </div>

              <div className="w-full bg-[#00000015] flex items-center flex-wrap">
                {ProjectData.map((pro, index) => {
                  return (
                    <div
                      key={index}
                      className="group h-[300px] w-[100%] sm:w-[50%] md:w-[50%] lg:w-[25%] flex justify-center items-center relative border border-[#00000015] overflow-hidden"
                    >
                      {/* Project Image */}
                      <img
                        src={pro.img1Url || "/placeholder.svg"}
                        className="h-[170px] w-[80%] object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:scale-105"
                        alt=""
                      />

                      {/* Overlay Button */}
                      <NavLink
                        onClick={(e) => {
                          if (pro.isCaseStudy) {
                            e.preventDefault();
                            handleCaseStudyModal(pro.id);
                          }
                        }}
                        to={pro.isCaseStudy ? "#" : pro.websiteUrl}
                        className="opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out font-[500] flex justify-center items-center gap-1 !text-[#cbe1ff] bg-[var(--text-hover-color)] absolute bottom-[10%] left-1/2 transform -translate-x-1/2 rounded shadow-lg p-2 text-[10px]"
                      >
                        <img
                          src={
                            pro.isCaseStudy
                              ? "/assets/images/case-study/file-case.png"
                              : "/assets/images/case-study/world-wide-web.png"
                          }
                          className="h-[10px] w-[10px] object-contain"
                          alt=""
                        />
                        {pro.isCaseStudy ? "Case Study" : "Website URL"}
                      </NavLink>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CaseStudyModal */}
      {selectedCase && (
        <CaseStudyModal isOpen={isModalOpen} onClose={closeModal}>
          <div className="h-[100%] w-[100%] flex flex-col-reverse lg:flex-row justify-end items-start gap-5">
            {/* Left Content Section */}
            <div
              className="w-full lg:w-[45%] h-auto lg:h-[89vh] p-5 overflow-y-auto"
              style={{
                scrollbarWidth: "none" /* Firefox */,
                msOverflowStyle: "none" /* Internet Explorer 10+ */,
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none; /* Safari and Chrome */
                }
              `}</style>

              <div className="flex flex-col justify-center items-start gap-5">
                {/* Project Info */}
                <div className="min-h-[300px] w-full flex flex-col justify-center items-start gap-5 border-b-2 border-[#777c8385]">
                  <h1 className="text-3xl text-[var(--text-hover-color)] font-[500]">
                    {selectedCase.projectName}
                  </h1>
                  <div className="flex justify-start items-center gap-2">
                    <div className="h-[10px] w-[10px] bg-[var(--text-hover-color)] rounded-full blink-dot"></div>
                    <p className="text-xl text-[var(--text-hover-color)] font-[500]">
                      {selectedCase.runningOn}
                    </p>
                  </div>
                  <p className="text-2xl text-[var(--text-hover-color)] font-[500]">
                    {selectedCase.tech}
                  </p>
                  <div className="flex justify-start items-center gap-2 w-[100%] flex-wrap">
                    {selectedCase.phases.map((ph, index) => (
                      <div
                        key={index}
                        className="p-1.5 flex justify-center items-center bg-[#005AB1] rounded text-[var(--white-color)] text-[10px]"
                      >
                        {ph}
                      </div>
                    ))}
                    <div className="p-1.5 flex justify-center items-center bg-[#B1C5DF4D] rounded text-[var(--text-color)] text-[10px]">
                      {selectedCase.category}
                    </div>
                  </div>
                </div>

                {/* About */}
                <div className=" lg:h-[250px] w-full flex flex-col lg:flex-row justify-around items-start gap-5 border-b-2 border-[#777c8385]">
                  <h1 className="text-xl text-[#4E667D] font-[500] lg:w-[30%] w-full">
                    ABOUT
                  </h1>
                  <p className="text-[13px] lg:w-[65%] w-full text-[#8CABC9]">
                    {selectedCase.aboutPara}
                  </p>
                </div>

                {/* Services */}
                <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-5 pb-5 border-b-2 border-[#777c8385]">
                  <h1 className="text-xl text-[#4E667D] font-[500] lg:w-[30%] w-full">
                    SERVICES
                  </h1>
                  <div className="flex flex-col w-full lg:w-[65%] gap-5">
                    {selectedCase.services.map((ser, index) => (
                      <div
                        key={index}
                        className="flex flex-col justify-center items-start gap-3"
                      >
                        <h1 className="text-xl text-[#4E667D] font-[500]">
                          {ser.heading}
                        </h1>
                        <div className="flex flex-wrap items-center gap-3">
                          {ser.taggs.map((item, idx) => (
                            <div
                              key={idx}
                              onClick={()=>selectedCate(item)}
                              className="bg-[#B1C5DF4D] px-2 py-1.5 text-[10px] text-[var(--text-color)] !cursor-pointer"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Integrations */}
                <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-5 pb-5 border-b-2 border-[#777c8385]">
                  <h1 className="text-xl text-[#4E667D] font-[500] lg:w-[30%] w-full">
                    INTEGRATIONS
                  </h1>
                  <div className="flex flex-wrap items-center w-full lg:w-[65%] gap-3">
                    {selectedCase.integration.map((int, index) => (
                      <div
                        key={index}
                        onClick={()=>selectedCate(int)}
                        className="bg-[#B1C5DF4D] px-2 py-1.5 text-[10px] text-[var(--text-color)] !cursor-pointer"
                      >
                        {int}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-5 pb-5">
                  <h1 className="text-xl text-[#4E667D] font-[500] lg:w-[30%] w-full">
                    KEY FEATURES
                  </h1>
                  <div className="flex flex-col items-start w-full lg:w-[65%] gap-2">
                    {selectedCase.keyFeatures.map((kf, index) => (
                      <div
                        key={index}
                        className="px-2 py-1.5 text-[16px] text-[var(--text-color)]"
                      >
                        {kf}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Video/Image Section */}
            <div
              className="min-h-[400px] lg:h-[800px] relative w-full lg:w-[50%] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${selectedCase.img2Url})` }}
            >
              {/* Video Container */}
              <div className="lg:h-[60%] md:h-[70%] absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] lg:-translate-y-[60%] vide p-3 w-[90%] flex flex-col items-center justify-center z-10">
                <video
                  key={activeDevice}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src={
                      activeDevice === "desktop"
                        ? selectedCase.desktopVideoUrl || selectedCase.video1
                        : selectedCase.mobileVideoUrl || selectedCase.video2
                    }
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Device Switching Controls */}
                <div className="bg-[#B1C5DF] rounded-xl mt-[50px] w-max p-2 flex justify-center items-center gap-3 z-20">
                  <div className="w-[50%] flex justify-center gap-2 items-center border-r border-[var(--text-hover-color)]">
                    <button
                      onClick={() => handleDeviceSwitch("desktop")}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        activeDevice === "desktop" &&
                        "bg-[#CBE1FF] text-white shadow-lg"
                      }`}
                      title="Desktop View"
                    >
                      <img
                        src="/assets/images/case-study/mdi_monitor.svg"
                        className="lg:h-5 lg:w-5 h-3 w-3"
                        alt=""
                      />
                    </button>

                    <button
                      onClick={() => handleDeviceSwitch("mobile")}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        activeDevice === "mobile" &&
                        "bg-[#CBE1FF] text-white shadow-lg"
                      }`}
                      title="Mobile View"
                    >
                      <img
                        src="/assets/images/case-study/mdi_mobile.svg"
                        className="lg:h-5 lg:w-5 h-3 w-3"
                        alt=""
                      />
                    </button>
                  </div>
                  <NavLink
                    to={selectedCase.websiteUrl}
                    className="text-[14px] flex justify-center items-center gap-1 text-[var(--text-hover-color)] font-[500]"
                  >
                    <img
                      src="/assets/images/case-study/link.svg"
                      className="h-5 w-5"
                      alt=""
                    />
                    {selectedCase.projectName}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </CaseStudyModal>
      )}
    </div>
  );
};

export default Projects;
