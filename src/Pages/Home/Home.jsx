import { useLoaderData } from "react-router-dom";
import Brands from "../../Component/Brands/Brands";
import HomeBanner from "../../Component/HomeBanner/HomeBanner";
import { useEffect, useState } from "react";
import ProductCard from "../../Component/ProductCard/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://brand-shop-server-side-mehedihasan444.vercel.app/products")
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
{/*  */}

{/* 
<div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
  <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
    <img
      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
      alt="tania andrew"
      className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
    />
    <div className="flex w-full flex-col gap-0.5">
      <div className="flex items-center justify-between">
        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Tania Andrew
        </h5>
        <div className="flex items-center gap-0 5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-5 h-5 text-yellow-700"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-5 h-5 text-yellow-700"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-5 h-5 text-yellow-700"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-5 h-5 text-yellow-700"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-5 h-5 text-yellow-700"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
        Frontend Lead @ Google
      </p>
    </div>
  </div>
  <div className="p-0 mb-6">
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      "I found solution to all my design needs from Creative Tim. I use them
      as a freelancer in my hobby projects for fun! And its really affordable,
      very humble guys !!!"
    </p>
  </div>
</div> */}
    
    </div>
  );
};

export default Home;
