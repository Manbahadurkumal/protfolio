import { Outlet } from "react-router-dom";
import HeaderComponent from "../../components/common/header";
import FooterComponent from "../../components/common/footer";



const HomeLayout = () =>{
    return (<>
    <HeaderComponent />
        <Outlet />
    <FooterComponent />
    </>)
}
export default HomeLayout
