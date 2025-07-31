import React from 'react'
import Banner from './elements/Banner'
import { clientsName, CustomGlobalData, DesignGlobalData, Reviews1, ServiceBannerData, theriData } from '../../../assets/ConstantData'
import CustomGlobal from './elements/CustomGlobal'
import DesignSection from './elements/DesignSection'
import Reviews from '../../../components/Reviews'

const WebDevelopment = () => {
  return (
    <>
     <Banner ServiceBannerData={ServiceBannerData} />   
     <CustomGlobal clientsName={clientsName} CustomGlobalData={CustomGlobalData} />
     <DesignSection DesignGlobalData={DesignGlobalData} theriData={theriData} />
     <Reviews Reviews1={Reviews1} />
    </>
  )
}

export default WebDevelopment