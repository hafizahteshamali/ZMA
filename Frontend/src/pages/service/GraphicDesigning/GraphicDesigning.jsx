import React from "react";
import Banner from "./elements/Banner";
import CreativeSec from "./elements/CreativeSec";
import ProcessSec from "../AiDevelopment/elements/ProcessSec";
import { GraphicBannerData } from "../../../assets/ConstantData";

const GraphicDesigning = () => {
  return (
    <>
      <Banner GraphicBannerData={GraphicBannerData} />
      <CreativeSec />
      <ProcessSec />
    </>
  );
};

export default GraphicDesigning;
