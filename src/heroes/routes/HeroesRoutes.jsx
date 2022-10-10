import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, MarvelPage, SearchHeroPage, HeroPage } from "../pages"

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>

                    <Route path="/marvel" element={<MarvelPage />}/>
                    <Route path="/dc" element={<DcPage />}/>
                    <Route path="/search" element={<SearchHeroPage />}/>
                    <Route path="/hero/:idHero" element={<HeroPage />}/>

                    {/* <Route path="/*" element={<Navigate  to={'/login'}/>}/> Si NOO encuentra NINGUNA de las rutas anteriores, pues que me redireccione inmediatamente al "Login*/} 
                    <Route path="/*" element={<Navigate to='/marvel' />}/>

                </Routes>
            </div>
        </>
    )
}
