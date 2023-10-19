import { useLoaderData } from "react-router-dom";
import Brands from "../../Component/Brands/Brands";
import HomeBanner from "../../Component/HomeBanner/HomeBanner";
import { useEffect, useState } from "react";
import ProductCard from "../../Component/ProductCard/ProductCard";


const Home = () => {
const [products,setProducts] = useState([])
useEffect(() =>{
fetch('http://localhost:5000/products')
.then((res) => res.json())
.then((data) => {
    setProducts(data);
  })

},[]);


    const brands = useLoaderData()
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Brands brands={brands}></Brands>
            <div className="">
                <h1 className="text-4xl font-bold text-center">Featured Products</h1>
                 <div className="max-w-7xl mx-auto grid grid-cols-3 gap-5  my-10">
                {
products.map((product) =><ProductCard key={product._id} product={product} ></ProductCard>)
                }
            </div>
            </div>
           
        </div>
    );
};

export default Home;