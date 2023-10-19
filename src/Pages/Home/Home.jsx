import { useLoaderData } from "react-router-dom";
import Brands from "../../Component/Brands/Brands";
import HomeBanner from "../../Component/HomeBanner/HomeBanner";


const Home = () => {
    const brands = useLoaderData()
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Brands brands={brands}></Brands>
        </div>
    );
};

export default Home;