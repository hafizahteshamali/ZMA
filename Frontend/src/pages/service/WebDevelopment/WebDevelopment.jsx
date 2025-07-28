import React from 'react'
import Banner from './elements/Banner'
import { clientsName, CustomGlobalData, DesignGlobalData, ServiceBannerData, theriData } from '../../../assets/ConstantData'
import CustomGlobal from './elements/CustomGlobal'
import DesignSection from './elements/DesignSection'

const WebDevelopment = () => {
  return (
    <>
     <Banner ServiceBannerData={ServiceBannerData} />   
     <CustomGlobal clientsName={clientsName} CustomGlobalData={CustomGlobalData} />
     <DesignSection DesignGlobalData={DesignGlobalData} theriData={theriData} />
    </>
  )
}

export default WebDevelopment