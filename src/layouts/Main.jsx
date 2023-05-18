import { Outlet } from "react-router-dom";
import Header from "../pages/shared/NavBar";
import Footer from "../pages/shared/Footer";
import Footer2 from "../pages/shared/Footer2";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <div>Text</div>
            <Footer></Footer>
        </div>
    );
};

export default Main;