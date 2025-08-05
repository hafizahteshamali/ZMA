import React from 'react'
import Banner from './elements/Banner'
import { clientsName, FutureWorkData } from '../../../assets/ConstantData'
import FutureWork from './elements/FutureWork'

const ITSolutions = () => {
  return (
    <>
     <Banner clientsName={clientsName} /> 
     <FutureWork FutureWorkData={FutureWorkData} />
    </>
  )
}

export default ITSolutions