import React from 'react'
import { BannerData, experienceData } from '../../assets/ConstantData'
import Banner from './elements/Banner'

const Home = () => {
  return (
    <>
     <Banner BannerData={BannerData} experienceData={experienceData} /> 
    </>
  )
}

export default Home