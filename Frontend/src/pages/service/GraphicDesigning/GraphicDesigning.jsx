import React from "react";
import Banner from "./elements/Banner";
import CreativeSec from "./elements/CreativeSec";
import ProcessSec from "../AiDevelopment/elements/ProcessSec";
import { GraphicBannerData, Reviews1 } from "../../../assets/ConstantData";
import Reviews from "../../../components/Reviews";
import DiscoverBanner from "../../../components/DiscoverBanner";

const GraphicDesigning = () => {
  return (
    <>
      <Banner GraphicBannerData={GraphicBannerData} />
      <CreativeSec />
      <ProcessSec />
      <Reviews Reviews1={Reviews1} />
     <DiscoverBanner />
    </>
  );
};

export default GraphicDesigning;
