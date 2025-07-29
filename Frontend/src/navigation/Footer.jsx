import React from "react";
import { NavLink } from "react-router-dom";
import { FooterData } from "../assets/ConstantData";
import NormalButton from "../components/NormalButton";

const Footer = () => {
  const { logo, para, btnText, socialHead, socialIcons, bullets } = FooterData;
  return (
    <div className="bg-[#F3F3FA]">
      <div className="helpBox">
        <div className="container mx-auto">
          <div className="lg:h-[500px] flex flex-row justify-center items-center">
            <div className="lg:h-[400px] w-full flex flex-col lg:flex-row items-center mt-[50px] lg:my-0">
              <div className="w-[100%] lg:w-[25%] h-[100%] flex flex-col gap-10 p-3">
                <NavLink to="/">
                  <img src={logo} className="object-contain" alt="" />
                </NavLink>
                <p className="text-[var(--white-color)]">{para}</p>

                <NormalButton
                  text={btnText}
                  className="btn h-[50px] w-[70%] border-2 border-[var(--white-color)] font-[600] text-[var(--white-color)]"
                />

                <div className="flex flex-col gap-5">
                  <h3 className="text-[var(--white-color)]">{socialHead}</h3>
                  <ul className="flex items-center gap-5">
                    {socialIcons.map((social, index) => {
                      return (
                        <li key={index}>
                          <NavLink to={social.link}>{social.icon}</NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="w-full lg:w-[75%] h-full p-3 mt-[50px] lg:my-0 flex flex-wrap justify-around items-center">
                {bullets.map((item, index) => {
                  const { links } = item;
                  return (
                    <ul
                      key={index}
                      className="flex flex-col gap-7 min-h-[250px] w-[50%] md:w-[33%] lg:w-[25%]"
                    >
                      <h3 className="text-xl text-[var(--white-color)] font-[700]">
                        {item.subHead}
                      </h3>
                      <ul className="flex flex-col gap-4">
                        {links.map((item, index) => {
                          return (
                            <li className="text-[#DBDBDB]" key={index}>
                              <NavLink to={item.url}>{item.text}</NavLink>
                            </li>
                          );
                        })}
                      </ul>
                    </ul>
                  );
                })}
                <div className="flex flex-col gap-7 min-h-[250px] w-[50%] md:w-[100%] md:gap-3.5 md:mt-7 lg:mt-0 lg:w-[25%]">
                  <h3 className="text-xl text-[var(--white-color)] font-[700]">
                    Contact Details
                  </h3>
                  <p className="text-[#DBDBDB]">
                    Banglow 9c hotel faran street, Karachi, P.E.C.H.S Block 2
                    Karachi, 75400
                  </p>
                  <p className="text-[#DBDBDB]">+92 312 0288551</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
