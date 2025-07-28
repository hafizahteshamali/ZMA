import React from 'react'
import Banner from './elements/Banner'
import WhatWeDo from './elements/WhatWeDo'
import { AiDevelopBannerData } from '../../../assets/ConstantData'

const AIDevelopment = () => {
  return (
    <>
     <Banner AiDevelopBannerData={AiDevelopBannerData} />  
     <WhatWeDo /> 
    </>
  )
}

export default AIDevelopment