import React from 'react'
import { AboutContentData, AboutHeadingData, BannerData, experienceData, FAQsHeadingData, SeviceContent } from '../../assets/ConstantData'
import Banner from './elements/Banner'
import AboutSec from './elements/AboutSec'
import ServiceSec from './elements/ServiceSec'
import FAQs from './elements/FAQs'
import BringIdeas from './elements/BringIdeas'

const Home = () => {
  return (
    <>
     <Banner BannerData={BannerData} experienceData={experienceData} /> 
     <AboutSec AboutHeadingData={AboutHeadingData} AboutContentData={AboutContentData} />
     <ServiceSec SeviceContent={SeviceContent} />
     <FAQs FAQsHeadingData={FAQsHeadingData} />
    </>
  )
}

export default Home