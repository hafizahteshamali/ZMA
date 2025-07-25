import React from 'react'
import Banner from './elements/Banner'
import { clientsName, CustomGlobalData, DesignGlobalData, ServiceBannerData, theriData } from '../../assets/ConstantData'
import CustomGlobal from './elements/CustomGlobal'
import DesignSection from './elements/DesignSection'
import DiscoverProject from './elements/DiscoverProject'

const Services = () => {
  return (
    <>
     <Banner ServiceBannerData={ServiceBannerData} />   
     <CustomGlobal clientsName={clientsName} CustomGlobalData={CustomGlobalData} />
     <DesignSection DesignGlobalData={DesignGlobalData} theriData={theriData} />
     <DiscoverProject />
    </>
  )
}

export default Services