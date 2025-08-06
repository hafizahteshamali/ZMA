import React from "react";
import Banner from "./elements/Banner";
import CreativeSec from "./elements/CreativeSec";
import ProcessSec from "../AiDevelopment/elements/ProcessSec";
import {
  GraphicBannerData,
  GraphicReviews1,
  GraphicReviews2,
} from "../../../assets/ConstantData";
import Reviews from "../../../components/Reviews";
import DiscoverBanner from "../../../components/DiscoverBanner";

const GraphicDesigning = () => {
  return (
    <>
      <Banner GraphicBannerData={GraphicBannerData} />
      <CreativeSec />
      <ProcessSec />
      <Reviews Reviews1={GraphicReviews1} Reviews2={GraphicReviews2} bgColor="#cbe1ff" />
      <DiscoverBanner
        image="/assets/images/graphic-designing/bottom-banner.jpg"
        className="bg-bottom"
        spanClass="text-[var(--text-hover-color)]"
        btnClass="border-2 border-[#CBE1FF]"
        iconClass="text-[var(--text-hover-color)]"
        text1="Design isn’t just visual."
        text2="It’s strategic storytelling."
      />
    </>
  );
};

export default GraphicDesigning;
