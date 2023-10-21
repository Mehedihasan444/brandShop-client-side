import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import ProductCard from "../../Component/ProductCard/ProductCard";
import NoProductFound from "../../Component/NoProductFound/NoProductFound";
const BrandDetailsPage = () => {
  const advertisements = useLoaderData();
  const params = useParams();
  const [filterData, setFilterData] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterProducts, setfilterProducts] = useState([]);
  //   console.log(params.name);

  useEffect(() => {
    const filteredData = advertisements.find(
      (advertisement) => advertisement.brand == params.name.toLowerCase()
    );
    setFilterData(filteredData);
    // console.log(filterData);

    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
    // console.log(products)
    const separatedProducts = products.filter(
      (product) => product.brand == params.name
    );
    setfilterProducts(separatedProducts);
    
  }, [products, filterData, advertisements, params.name]);

  //    console.log(filterData.slider_1);

  // console.log(filterProducts);

  return (
    <div>
      {/* slider */}
      <div className="h-[90vh]">
        <Swiper
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={filterData.slider_1} alt="" className="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={filterData.slider_2} alt="" className="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={filterData.slider_3} alt="" className="" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* products */}

      <div className="max-w-7xl mx-auto my-10">
        <h1 className="text-4xl font-bold mb-10 border p-3">Our Products</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filterProducts.length == 0 ? (
            <NoProductFound></NoProductFound>
          ) : (
            filterProducts.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandDetailsPage;
