import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "../firebase/config"
import { Navigate, Route, Routes } from "react-router-dom"
import { login, logout } from "../store/auth/authSlice"


import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui/CheckingAuth"
import { useCheckAuth } from "../hooks"
import { StartPage } from "../ui/StartPage"


export const AppRouter = () => {

  const status = useCheckAuth();

  const showIcon = () => {
    return <StartPage></StartPage>
  }

  const showRetraseIcon = () => {
    setTimeout(showIcon(), 3000);
  }

  if(status === 'checking') {
    return  <CheckingAuth/>
  }


  return (
    <Routes>

        {
          (status === 'authenticated')
          ? <Route path="/*" element={ <JournalRoutes/> }/>
          : <Route path="/auth/*" element={ <AuthRoutes/> }/>
        }

        <Route path="/*" element={<Navigate to={"/auth/login"}/>}/>


        {/* Login y Registro */}
        {/* <Route path="/auth/*" element={ <AuthRoutes/> }/> */}

        {/* JournalApp */}
        {/* <Route path="/*" element={ <JournalRoutes/> }/> */}


    </Routes>
  )
}
