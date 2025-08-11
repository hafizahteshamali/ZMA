import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ProjectData } from "../../../assets/ConstantData";
import CaseStudyModal from "../../../components/CaseStudyModal";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex flex-col justify-end items-center">
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

                  <button className="h-[40px] flex justify-center items-center gap-2 bg-[#00000015] text-[var(--text-hover-color)] font-[500] rounded w-[50%] lg:w-[10%]">
                    <img
                      src="/assets/images/case-study/vector2.svg"
                      className="h-5 w-5 text-[var(--text-color)]"
                      alt=""
                    />
                    Audit
                  </button>
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
                        className="group h-[300px] w-[100%] sm:w-[50%]  md:w-[50%] lg:w-[25%] flex justify-center items-center relative border border-[#00000015] overflow-hidden"
                      >
                        {/* Project Image */}
                        <img
                          src={pro.imgUrl}
                          className="h-[200px] w-[80%] object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:scale-105"
                          alt=""
                        />

                        {/* Overlay Button */}
                        <NavLink
                          onClick={(e) => {
                            if (pro.isCaseStudy) {
                              e.preventDefault(); // Prevent navigation for case studies
                              openModal();
                            }
                          }}
                          to={pro.isCaseStudy ? "#" : pro.websiteUrl} // Use "#" for case studies to maintain styling
                          className="opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out font-[500] flex justify-center items-center gap-3 !text-[#cbe1ff] bg-[var(--text-hover-color)] absolute bottom-[10%] left-1/2 transform -translate-x-1/2 rounded shadow-lg h-[45px] w-[50%]"
                        >
                          <img
                            src={
                              pro.isCaseStudy
                                ? "/assets/images/case-study/file-case.png"
                                : "/assets/images/case-study/world-wide-web.png"
                            }
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
      </div>

      {/* CaseStudyModal component with isOpen and onClose props */}
      <CaseStudyModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Projects;
