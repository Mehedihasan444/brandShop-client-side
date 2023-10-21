import { useLoaderData } from "react-router-dom";
import Brands from "../../Component/Brands/Brands";
import HomeBanner from "../../Component/HomeBanner/HomeBanner";
import { useEffect, useState } from "react";
import ProductCard from "../../Component/ProductCard/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://brand-shop-server-side-nu.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const brands = useLoaderData();
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Brands brands={brands}></Brands>
      <div className="">
        <h1 className="text-4xl font-bold text-center">Featured Products</h1>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5  my-10">
          {products.length > 6
            ? products
                .slice(0, 6)
                .map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                  ></ProductCard>
                ))
            : products.map((product) => (
                <ProductCard key={product._id} product={product}></ProductCard>
              ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto my-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center ">
        <div className="flex gap-3 justify-center">
          <img
            src="https://neytri.wpengine.com/wp-content/uploads/2023/06/Icon-Box-1.png"
            alt=""
            className=""
          />
          <div className="">
            <h3 className="text-xl font-semibold">Free Shipping</h3>
            <p className="">Free Shipping World wide</p>
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <img
            src="https://neytri.wpengine.com/wp-content/uploads/2023/06/Icon-Box-2.png"
            alt=""
            className=""
          />
          <div className="">
            <h3 className="text-xl font-semibold">Secured Payment</h3>
            <p className="">Safe & Secured Payments</p>
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <img
            src="https://neytri.wpengine.com/wp-content/uploads/2023/06/Icon-Box-3.png"
            alt=""
            className=""
          />
          <div className="">
            <h3 className="text-xl font-semibold">24/7 Support</h3>
            <p className="">Support Arround The Clock</p>
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <img
            src="https://neytri.wpengine.com/wp-content/uploads/2023/06/Icon-Box-4.png"
            alt=""
            className=""
          />
          <div className="">
            <h3 className="text-xl font-semibold">Surprise Gifts</h3>
            <p className="">Free Gift Cards & Vouchers</p>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Home;
