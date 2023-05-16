import React from 'react';
import Slider from 'react-slick';
// import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 import "../Styles/Fdeal.css"
import flashData from './flashData';


const Flashdeal = () => {
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
   
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
          slidesToShow: 1.4,
          slidesToScroll: 1.2,
        },
      },
    ],
  };

  

  return (
    
    <div className="App ">
      <h3 className='text-[1.5rem] font-semibold text-gray-800  mt-[1rem] mb-[1rem]'>
       <span className='text-gray-800'><i className="ri-flashlight-fill"></i></span> Flash Deal</h3>
      <Slider {...settings}>
        {flashData.map((item) => (
          <div className="relative shadow-lg card" key={item.id}>
            <  div className="relative card-top lg:px-[5rem] py-2">
              <img
                src={item.cover }
              alt='h' className='' />
              </div>
             
              <h4 className=' bg-gray-400 text-white w-[5rem]  
               h-10 font-bold py-1 px-1  lg:absolute lg:top-0' >{item.title}</h4>
          </div>
        ))}

      </Slider>
    </div>
  );
}

export default Flashdeal;