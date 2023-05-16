import React from 'react';
import "../Styles/banner.css"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import banner1 from "./images/blog-1.jpg"
import banner2 from "./images/blog-2.jpg";
import banner3 from "./images/blog-3.jpg";
import banner4 from "./images/blog-4.jpg";
// const {banner1, banner2, banner3, banner4} = (Bannerdata)

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
     autoplay: true,
      autoplaySpeed: 2000,
      
       
       
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    

  return (
    <>
    <section className='App2'>
 
    <section className='card2 '>
    <Slider {...settings}>
        <div className='w-[400px] h-[300px]'>
         <img src={banner1} alt="baner" className='w-[100%] h-[auto]' />
    </div>
    <div className='w-[400px] h-[300px]'>
         <img src={banner2} alt="baner" className='w-[100%] h-[auto]' />
    </div>
    <div className='w-[400px] h-[300px]'>
         <img src={banner3} alt="baner" className='w-[100%] h-[auto]' />
    </div>
    <div className='w-[400px] h-[300px]'>
         <img src={banner4} alt="baner" className='w-[100%] h-[auto]' />
    </div>
       
    
    </Slider>
    </section>
    </section>
        
    
    </>
  )
}

export default Banner