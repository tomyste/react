import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { PortofolioRouter } from './router/PortofolioRouter'

export const PortofolioApp = () => {
  return (
    <BrowserRouter>
        <PortofolioRouter/> 

    </BrowserRouter>
    
  )
}
