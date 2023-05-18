import { Outlet } from "react-router-dom";
import Header from "../pages/shared/NavBar";
import Footer from "../pages/shared/Footer";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;