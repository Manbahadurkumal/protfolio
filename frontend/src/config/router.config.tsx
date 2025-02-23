import { Route, Routes } from "react-router-dom"
import HomeLayout from "../pages/layouts"
import LandingPage from "../pages/landing/landing.page"
import NotFound from "../components/common/notfound"
// import { LampDemo } from "../components/ui/lamp"
// import { Cover } from "../components/ui/cover"
import { CoverDemo } from "../pages/hireme"
import { ToastContainer } from "react-toastify"



const RoutingConfig = () =>{
    
    return (
        
        <>
        <ToastContainer />
        <Routes>
            <Route path = "/" element = {<HomeLayout/>}>
                <Route index element = {<LandingPage />}></Route>
                <Route path="home" element={<LandingPage />}></Route>
                {/* <Route path="projects" element={<SocketExample />}></Route>
                <Route path="contacts" element={<RegisterPage />}></Route> */}
                <Route path="hireme" element={<CoverDemo />}></Route>

                <Route path="*" element={<NotFound />}></Route>
            </Route>
        </Routes>
        </>
    )
}
export default RoutingConfig