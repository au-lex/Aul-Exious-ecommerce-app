import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import WomenData from './Datapges/Womendata'
import "../Components/Styles/banner.css"
import { useState, useEffect } from 'react';

import { BallTriangle  } from  'react-loader-spinner'
import Header from '../Components/Header/Header';



const WomenCategory = () => {
  const { increaseItemCount, onItemAdd, items } = useOutletContext();
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const handleAddToCart = (item) => {
    increaseItemCount();
    onItemAdd(item);
  }
  
  return (
    <>
    
   <div>
   {showLoader ? (
        <div className="loader">
         <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>
        </div>
      ) : (
        <div>
          <Header />
        <section className='mb-[6rem] ' >
      
      
    <section>
     
       <p><Link to="/"></Link></p>
      </section>
      <section className='flex justify-center bannerimg'>
      <div className='lg:w-[1200px] lg:h-[430px]   sm:w-[700px] sm:h-[280px]' >
        <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1683816459/Women_s_Clothing_Women_Fashion_Sale_gmswxy.png" 
        alt="" className='w-[100%] h-[auto]' />
      </div>
      </section>
      <div className="banner2 lg:hidden"></div>
      <section className='flex flex-wrap justify-center' >
      {WomenData.map((Wgoods) => (

        
         
            <  div className="h-[220px] w-[170px] mx-2 menImg bg-white mt-5 lg:mx-2">
              <Link to={`/Womendpage/${Wgoods.names}`}>
              <img
                src={Wgoods.cover}
                alt='h' className='w-[100%] h-[auto] px-2' />
                </Link>

                <article className='relative px-4'>
           <h4 className='font-medium capitalize px-1 text-[15px] my-1'>{Wgoods.names}</h4>
           <span className='text-yellow-300 absolute top-[-1.2rem]'>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            </span>
           <div className='relative flex px-1 space-x-12'>
           <h4 className='font-medium text-[16px] '><span>$</span>{Wgoods.price}</h4>
           <h4 onClick={() => handleAddToCart(Wgoods)} className='text-red-400 uppercase cursor-pointer font-medium text-[25px] absolute top-[-.5rem] right-0'
           ><i className="ri-add-circle-fill"></i></h4>
           </div>
           </article>
              </div>
  
 ))}


      </section>
      
    </section>
    </div>
      )}
    {/* <HeaderFooter></HeaderFooter> */}
   </div>
   
    </>
  )
}

export default WomenCategory