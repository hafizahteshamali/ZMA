import React from 'react'
import Banner from './elements/Banner'
import { clientsName, CustomGlobalData, ServiceBannerData } from '../../assets/ConstantData'
import CustomGlobal from './elements/CustomGlobal'

const Services = () => {
  return (
    <>
     <Banner ServiceBannerData={ServiceBannerData} />   
     <CustomGlobal clientsName={clientsName} CustomGlobalData={CustomGlobalData} />
    </>
  )
}

export default Services