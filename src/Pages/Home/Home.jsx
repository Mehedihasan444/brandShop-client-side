import { useLoaderData } from "react-router-dom";
import Brands from "../../Component/Brands/Brands";


const Home = () => {
    const brands = useLoaderData()
    return (
        <div>
            <h1 className="">home</h1>
            <Brands brands={brands}></Brands>
        </div>
    );
};

export default Home;