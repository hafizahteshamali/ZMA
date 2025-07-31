import React from 'react'
import Banner from './elements/Banner'
import WhatWeDo from './elements/WhatWeDo'
import { AiDevelopBannerData, Reviews1 } from '../../../assets/ConstantData'
import ProcessSec from './elements/ProcessSec'
import Reviews from '../../../components/Reviews'
import DiscoverBanner from '../../../components/DiscoverBanner'

const AIDevelopment = () => {
  return (
    <>
     <Banner AiDevelopBannerData={AiDevelopBannerData} />  
     <WhatWeDo /> 
     <ProcessSec />
     <Reviews Reviews1={Reviews1} />
     <DiscoverBanner />
    </>
  )
}

export default AIDevelopment