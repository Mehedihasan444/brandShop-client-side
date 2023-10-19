import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import {Autoplay, Navigation } from "swiper/modules";
const HomeBanner = () => {
  return (
    <div>
      <Swiper 
      navigation={true} 
      loop={true}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} 
        modules={[Navigation,Autoplay]} 
         className="mySwiper"
         >
        <SwiperSlide>
          {" "}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437080.jpg?w=1060&t=st=1697738410~exp=1697739010~hmac=4ef76e83dd70962c4b11819f1c2ffaeec5ff2fd10a6e2429312d2b0014263fb1)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide> <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v29-pro-2.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide> <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-n2-flip-1.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide> <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-11-4.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide> <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-13-ultra/pc/4bc309b95c7ea99ad67e0d86954778e1.jpg?f=webp)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide> <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://media.wired.com/photos/63d982af49591433ecea8701/4:3/w_2195,h_1646,c_limit/Samsung-Galaxy-S23-lineup-SOURCE-Samsung-Gear.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div></SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default HomeBanner;
