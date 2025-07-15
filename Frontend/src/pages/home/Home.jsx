import React from "react";
import {
  AboutContentData,
  AboutHeadingData,
  BannerData,
  experienceData,
  FAQsHeadingData,
  HelpSecData,
  SeviceContent,
} from "../../assets/ConstantData";
import Banner from "./elements/Banner";
import AboutSec from "./elements/AboutSec";
import ServiceSec from "./elements/ServiceSec";
import FAQs from "./elements/FAQs";
import BringIdeas from "./elements/BringIdeas";
import HelpingSec from "./elements/HelpingSec";

const Home = () => {
  return (
    <>
      <Banner BannerData={BannerData} experienceData={experienceData} />
      <AboutSec
        AboutHeadingData={AboutHeadingData}
        AboutContentData={AboutContentData}
      />
      <ServiceSec SeviceContent={SeviceContent} />
      <FAQs FAQsHeadingData={FAQsHeadingData} />
      <HelpingSec HelpSecData={HelpSecData} />
    </>
  );
};

export default Home;
