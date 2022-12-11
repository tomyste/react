import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages"
import { DcPage, HeroesRoutes, MarvelPage } from "../heroes"

import { Navbar } from "../UI"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"


export const AppRouter = () => {
  return (
    <>
        
          <Routes>            
              <Route path="login" element={
                <PublicRoute>
                  <LoginPage></LoginPage>
                </PublicRoute>
              }>
              </Route>
              
              <Route path="/*" element={
                <PrivateRoute>
                  <HeroesRoutes></HeroesRoutes>
                </PrivateRoute>
              }/>

          </Routes>

          {/* <Route path="login" element={<LoginPage />} /> */}
          {/* <Route path="/*" element={<HeroesRoutes />} /> */}
      
    </>
  )
}
