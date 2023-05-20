import useTitle from "../../hooks/pageTitle";
import Banner from "./Banner";
import Gallery from "./Gallery";
import ShopByCategory from "./ShopByCategory";
import Testimonials from "./Testimonials";


const Home = () => {
    useTitle("Home")
    return (
        <div className="">
            <Banner></Banner>
            <Gallery></Gallery>
            <div className="divider"></div> 
            <ShopByCategory></ShopByCategory>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;