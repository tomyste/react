import { Navigate, Route, Routes } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { UserProvider } from "./context/UserProvider"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"

export const MainApp = () => {
  return (
    <UserProvider>
        <h1 className="text-center">MainApp</h1>
        <Navbar></Navbar>
        <hr/>

        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>

          <Route path="/login" element={<LoginPage></LoginPage>}></Route>

          <Route path="/about" element={<AboutPage></AboutPage>}></Route>

          <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
    </UserProvider>
  )
}
