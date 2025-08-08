import React from "react";
import NormalButton from "./NormalButton";
import { useNavigate } from "react-router-dom";

const BlogSidebar = ({ SidebarBlogsData }) => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="h-[400px] w-full bg-[#00000027] flex justify-center items-center">
        <img
          src="/assets/images/home/logo.png"
          className="h-[150px] w-[150px] object-contain"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-5 mt-[50px]">
        {SidebarBlogsData.map((item) => {
          return (
            <div
              key={item.slug}
              className="w-full flex flex-col justify-start items-center gap-6 my-[30px]"
            >
              {item.topLine && (
                <div className="w-full h-[50px] border-t-2 border-[var(--text-hover-color)] flex justify-center items-center">
                  <h3 className="text-2xl text-[va(--text-hover-color)] font-[500]">
                    {item.topText}
                  </h3>
                </div>
              )}

              <div className=" w-full">
                <img src={item.img} alt="" />
              </div>

              <span
                className="text-[var(--text-hover-color)] text-[16px] font-[500] relative 
                before:absolute before:h-[2px] before:w-[100%] before:-left-[100px] before:bg-[var(--text-hover-color)] before:top-[50%]
                after:absolute after:h-[2px] after:w-[100%] after:-right-[100px] after:bg-[var(--text-hover-color)] after:top-[50%]"
              >
                {item.feature}
              </span>

              <h1 className="text-2xl w-[100%] mx-auto font-[500] text-[var(--text-hover-color)] text-center">
                {item.title}
              </h1>

              <NormalButton
                onClick={() => navigate(`/blog/:${item.slug}`)}
                text={item.btnText}
                className="h-[50px] min-w-[150px] bg-[var(--text-hover-color)] text-[var(--white-color)] rounded-none"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogSidebar;
