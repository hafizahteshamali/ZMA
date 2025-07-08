import React from 'react'
import { BannerData, experienceData } from '../../assets/ConstantData'
import Banner from './elements/Banner'
import AboutSec from './elements/AboutSec'

const Home = () => {
  return (
    <>
     <Banner BannerData={BannerData} experienceData={experienceData} /> 
     <AboutSec />
    </>
  )
}

export default Home