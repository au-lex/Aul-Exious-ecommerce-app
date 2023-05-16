import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import MenData from './Datapges/Mendata'
import "../Components/Styles/banner.css"
import Header from '../Components/Header/Header'
import { useState, useEffect } from 'react';

import { BallTriangle  } from  'react-loader-spinner'



const MenCategory = () => {
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

  console.log(items);
  

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
    
    <div className=' mb-[8rem]'>
      <section className='mt-1 ml-2 '>
        
       <p  className='fixed top-[-.5rem] cursor-pointer'><Link to="/">
        <span className='text-[1.5rem] text-gray-500 '><i class="ri-arrow--line"></i>
        </span>
        </Link></p>
      </section>

      <section className='mIMG' >
      <section className='lg:w-[1200px] lg:h-[500px]  sm:w-[700px] sm:h-[280px]' >
        <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1683816439/download_5_p8qqpq.jpg" alt="" 
        className='w-[100%] h-[auto]'
        />
     
      </section>
      </section>
        <div className='banner lg:hidden '>
         
        </div>
      <section className='flex flex-wrap justify-center' >
      {MenData.map((goods) => (

        
         
            <  div className="h-[220px] w-[170px] mx-2 bg-white menImg mt-4">
              <Link to={`/mendetailpage/${goods.name}`}>
              <img
                src={goods.cover}
                alt='h' className='w-[100%] h-[auto] px-1' />
                </Link>

                <article className='relative px-4'>
           <h4 className='font-medium capitalize px-1 text-[15px] my-1'>{goods.name}</h4>
           <span className='text-yellow-300 absolute top-[-1.2rem]'>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            </span>
           <div className='relative flex px-1 space-x-12'>
           <h4 className='font-medium text-[16px] '><span>$</span>{goods.price}</h4>
           <h4 onClick={() => handleAddToCart(goods)} className='text-red-400 uppercase cursor-pointer font-medium text-[25px] 
           absolute top-[-.5rem] right-0'
           ><i className="ri-add-circle-fill"></i></h4>
           </div>
           </article>
              </div>
  
 ))}


      </section>
    </div>
    </div>
      )}
    {/* <HeaderFooter></HeaderFooter> */}
    </div>
    </>
  )
}

export default MenCategory