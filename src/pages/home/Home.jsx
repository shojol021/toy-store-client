import useTitle from "../../hooks/pageTitle";
import Banner from "./Banner";
import Gallery from "./Gallery";
import ShopByCategory from "./ShopByCategory";


const Home = () => {
    useTitle("Home")
    return (
        <div className="">
            <Banner></Banner>
            <Gallery></Gallery>
            <div className="divider"></div> 
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;