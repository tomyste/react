import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages'
import { MainPage } from '../Portofolio/pages/MainPage'

export const PortofolioRouter = () => {

    //* Provisional statuts
    const status = 'authenticated' // -> 'not-authenticated

  return (
    <Routes>
        {
            ( status === 'authenticated')
            ? <Route path='/*' element={ <MainPage/> }/>
            : <Route path='/auth/*' element={ <LoginPage/> }/>
        }

        <Route path='/*' element={ <Navigate to={"/auth/login"} /> } />
    </Routes>
  )
}
