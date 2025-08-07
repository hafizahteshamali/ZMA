import React from 'react'
import Banner from './elements/Banner'
import TailoredSection from './elements/TailoredSection'
import { FAQsHeadingData, TailoredSectionData, TrustedWorldWideData } from '../../assets/ConstantData'
import TrustedWorldWide from './elements/TrustedWorldWide'
import FAQs from '../home/elements/FAQs'
import DiscoverBanner from '../../components/DiscoverBanner'

const About = () => {
  return (
    <>
     <Banner /> 
     <TailoredSection TailoredSectionData={TailoredSectionData} />
     <TrustedWorldWide TrustedWorldWideData={TrustedWorldWideData} />
     <FAQs FAQsHeadingData={FAQsHeadingData} />
     <DiscoverBanner
        text1="IT doesn’t have to be complex. "
        text2="We make it effortless."
      />
    </>
  )
}

export default About