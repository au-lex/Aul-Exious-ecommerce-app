import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Styles/home.css";

import Sdata from "./Sdata";

import { Autoplay, Pagination, Navigation } from "swiper";

const Heroslider = () => {
  return (
    <>
    <div className="lg:hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Sdata.map((feature, index) => (
          <div key={index}>
            <SwiperSlide>
              <section className="flex justify-center">
                <div className="w-[400px] h-[400px]  sm:w-[800px] sm:h-[500px] lg:hidden ">
                  {/* <span className=" text-red-500 absolute right-2 uppercase font-semibold w-12 h-12 rounded-[5%] px-2 py-2 block">{feature.title}</span> */}
                  <img
                    src={feature.cover}
                    alt=""
                    className="w-[100%] h-[auto] drop-shadow-md"
                  />
                </div>

                <section className="mr-[4rem]  absolute left-[0rem] top-[0rem] desc">
                
                 
                </section>
              </section>
             
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      </div>
      <section className="flex justify-center hero2">
        <div className="w-[1200px] h-[550px]">
        <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1683816461/Women_s_Men_s_Clothing_Shop_Online_Fashion_SHEIN_orkgc0.gif" alt=""
        className="drop-shadow-md "
        />
        </div>
      </section>
    </>
  );
};

export default Heroslider;
