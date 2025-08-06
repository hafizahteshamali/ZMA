import React from "react";
import Banner from "./elements/Banner";
import WhatWeDo from "./elements/WhatWeDo";
import {
  AiDevelopBannerData,
  AIReviews1,
  AIReviews2,
} from "../../../assets/ConstantData";
import ProcessSec from "./elements/ProcessSec";
import Reviews from "../../../components/Reviews";
import DiscoverBanner from "../../../components/DiscoverBanner";

const AIDevelopment = () => {
  return (
    <>
      <Banner AiDevelopBannerData={AiDevelopBannerData} />
      <WhatWeDo />
      <ProcessSec />
      <Reviews Reviews1={AIReviews1} Reviews2={AIReviews2} bgColor="#cbe1ff" />
      <DiscoverBanner
        image="/assets/images/ai-development/bottom-banner.png"
        className="bg-center"
        spanClass="text-[var(--text-hover-color)]"
        btnClass="border-2 border-[#CBE1FF]"
        iconClass="text-[var(--text-hover-color)]"
        text1="AI shouldn’t be complex."
        text2="We streamline every step."
      />
    </>
  );
};

export default AIDevelopment;
