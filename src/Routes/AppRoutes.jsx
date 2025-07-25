import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../pages/home/Home'
import Services from '../pages/service/Services'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/service' element={<Services />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes