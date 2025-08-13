import React from 'react'
import Banner from './elements/Banner'
import { FAQsHeadingData, GetInTouchData } from '../../assets/ConstantData'
import FAQs from '../home/elements/FAQs'

const Contact = () => {
  return (
    <>
     <Banner GetInTouchData={GetInTouchData} />  
     <FAQs FAQsHeadingData={FAQsHeadingData} /> 
    </>
  )
}

export default Contact