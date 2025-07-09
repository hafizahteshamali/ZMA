import React from 'react'
import { AboutContentData, AboutHeadingData, BannerData, experienceData, SeviceContent } from '../../assets/ConstantData'
import Banner from './elements/Banner'
import AboutSec from './elements/AboutSec'
import ServiceSec from './elements/ServiceSec'

const Home = () => {
  return (
    <>
     <Banner BannerData={BannerData} experienceData={experienceData} /> 
     <AboutSec AboutHeadingData={AboutHeadingData} AboutContentData={AboutContentData} />
     <ServiceSec SeviceContent={SeviceContent} />
    </>
  )
}

export default Home