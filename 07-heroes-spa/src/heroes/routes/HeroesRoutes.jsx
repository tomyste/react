import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../../auth/pages"
import { Navbar } from "../../UI"
import { DcPage, MarvelPage } from "../pages"
import { CombinatedPages } from "../pages/CombinatedPages"

import { HeroPage } from "../pages/HeroPage"
import { SearchPage } from "../pages/SearchPage"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar></Navbar>

        <div className="container">

            <Routes>
                <Route path="asoc" element={<CombinatedPages/>}/>
                <Route path="marvel" element={<MarvelPage/>} />
                <Route path="dc" element={<DcPage />} />

                

                <Route path="search" element={<SearchPage />} />
                <Route path="/hero/:id" element={<HeroPage />} />



                <Route path="/" element={<Navigate to="/marvel"></Navigate>}></Route>
            </Routes>

        </div>
    </>
  )
}
