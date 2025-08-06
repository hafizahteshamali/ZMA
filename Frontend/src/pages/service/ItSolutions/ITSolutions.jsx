import React from 'react'
import Banner from './elements/Banner'
import { clientsName, FeaturesData, FutureWorkData, ITSolutionReviews1, ITSolutionReviews2 } from '../../../assets/ConstantData'
import FutureWork from './elements/FutureWork'
import FeatureSection from './elements/FeatureSection'
import Reviews from '../../../components/Reviews'
import DiscoverBanner from '../../../components/DiscoverBanner'

const ITSolutions = () => {
  return (
    <>
     <Banner clientsName={clientsName} /> 
     <FutureWork FutureWorkData={FutureWorkData} />
     <FeatureSection FeaturesData={FeaturesData} />
     <Reviews Reviews1={ITSolutionReviews1} Reviews2={ITSolutionReviews2} />
     <DiscoverBanner
        image="/assets/images/it-solutions/bottom-banner.jpg"
        className="bg-bottom"
        spanClass="text-[var(--text-hover-color)]"
        btnClass="border-2 border-[#CBE1FF]"
        iconClass="text-[var(--text-hover-color)]"
        text1="IT shouldn’t be overwhelming. "
        text2="We make it seamless."
      />
    </>
  )
}

export default ITSolutions