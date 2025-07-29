import React from 'react'
import Banner from './elements/Banner'
import WhatWeDo from './elements/WhatWeDo'
import { AiDevelopBannerData } from '../../../assets/ConstantData'
import ProcessSec from './elements/ProcessSec'

const AIDevelopment = () => {
  return (
    <>
     <Banner AiDevelopBannerData={AiDevelopBannerData} />  
     <WhatWeDo /> 
     <ProcessSec />
    </>
  )
}

export default AIDevelopment