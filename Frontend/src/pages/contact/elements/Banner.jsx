import React from "react";
import Header from "../../../navigation/Header";
import { NavLink } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import MapEmbed from "../../../components/MapEmbed";

const Banner = ({ GetInTouchData }) => {
  const { lgHeading, smHeading, para, contactWay } = GetInTouchData;
  return (
    <>
      <div className="w-full bg-cover bg-no-repeat">
        <div className="container mx-auto flex flex-col justify-center lg:justify-end items-start p-3">
          <Header />

          <h1 className="text-4xl mt-[150px] mb-[50px] lg:text-7xl font-[600] text-[var(--text-hover-color)]">
            {lgHeading}
          </h1>

          <div className=" w-full flex flex-col lg:flex-row items-center gap-7 px-4 mb-[100px]">
            <div className="w-full lg:w-[50%] h-full flex flex-col justify-center gap-10 items-start">
              <div className="w-full flex flex-col gap-10 lg:border-r-2 lg:border-[var(--text-hover-color)]">
                <div className="flex flex-col gap-2.5 w-full lg:w-[90%]">
                  <h3 className="text-[var(--text-hover-color)] text-2xl font-[500]">
                    {smHeading}
                  </h3>
                  <p className="text-[var(--text-color)] text-base max-w-4xl">
                    {para}
                  </p>
                </div>

                <div className="w-full lg:w-[90%]">
                  <form className="flex flex-col justify-center items-start gap-5 w-full">
                    <div className="w-full flex justify-between items-center p-2">
                      <input
                        type="text"
                        placeholder="Name"
                        className="h-[50px] bg-transparent placeholder:text-[var(--text-hover-color)] border-b-2 border-[var(--text-hover-color)] w-[49%] outline-none text-xl py-5 text-[var(--text-hover-color)]"
                      />

                      <input
                        type="email"
                        placeholder="Email Address"
                        className="h-[50px] bg-transparent border-b-2 placeholder:text-[var(--text-hover-color)] border-[var(--text-hover-color)] w-[49%] outline-none text-xl py-5 text-[var(--text-hover-color)]"
                      />
                    </div>

                    <div className="w-full flex justify-between items-center p-2">
                      <input
                        type="text"
                        placeholder="Interested In"
                        className="h-[50px] bg-transparent border-b-2 placeholder:text-[var(--text-hover-color)] border-[var(--text-hover-color)] w-[49%] outline-none text-xl py-5 text-[var(--text-hover-color)]"
                      />

                      <input
                        type="number"
                        placeholder="Phone Number"
                        className="h-[50px] bg-transparent border-b-2 placeholder:text-[var(--text-hover-color)] border-[var(--text-hover-color)] w-[49%] outline-none text-xl py-5 text-[var(--text-hover-color)]"
                      />
                    </div>

                    <div className="w-full flex justify-between items-center p-2">
                      <textarea
                        name=""
                        id=""
                        placeholder="Message"
                        className="h-[50px] bg-transparent border-b-2 placeholder:text-[var(--text-hover-color)] border-[var(--text-hover-color)] w-[100%] min-h-[150px] max-h-[200px] outline-none text-xl py-5 text-[var(--text-hover-color)]"
                      ></textarea>
                    </div>

                    <div className="w-full p-2 flex justify-end items-center">
                      <button
                        type="button"
                        className="h-[50px] w-[25%] bg-[var(--text-hover-color)] text-[var(--white-color)] rounded"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[50%] p-2 flex flex-col justify-center items-start gap-5">
              {contactWay.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col justify-center items-start gap-3.5">
                    <h2 className="text-2xl text-[var(--text-hover-color)] font-[500]">
                      {item.heading}
                    </h2>
                    <p className="text-[var(--text-color)] text-[18px]">{item.descrip}</p>
                    <div className="flex justify-start items-center gap-5 w-full">
                      <div className="h-[50px] w-[50px] bg-[#005AB1] rounded-full flex justify-center items-center">
                        <img src={item.icon} alt="" className="h-5 w-5" />
                      </div>
                      <p className="text-[#005AB1] lg:text-xl w-[80%]">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="h-[400px] container mx-auto mb-[50px] rounded-xl overflow-hidden">
        <MapEmbed />
        </div>
      </div>
    </>
  );
};

export default Banner;
