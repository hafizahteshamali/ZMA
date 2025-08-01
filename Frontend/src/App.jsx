import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Routes/AppRoutes'
import CustomCursor from './components/CustomCursor'

const App = () => {
  return (
    <BrowserRouter>
    <CustomCursor />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App