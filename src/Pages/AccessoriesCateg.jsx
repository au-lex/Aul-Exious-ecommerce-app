import React from 'react'
import HeaderFooter from '../Components/Header/HeaderFooter'
import { Link, useOutletContext } from 'react-router-dom'
import Accessdata from './Datapges/Accessdata'
import "../Components/Styles/banner.css"
import { useState, useEffect } from 'react';

import { BallTriangle  } from  'react-loader-spinner'
import Header from '../Components/Header/Header'


const AccessoriesCateg = () => {
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

    <section className=' mb-[6rem]'>
    <section>
       
      </section>
      <section className='flex justify-center banner3'>
      <div className='lg:w-[1200px] lg:h-[500px]  sm:w-[700px] sm:h-[280px]' >
        <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1683816440/download_4_skekxj.jpg" 
        alt="" className='w-[100%] h-[auto]' />
      </div>
      </section>
      <section className='flex flex-wrap justify-center acMain' >
      {Accessdata.map((Agoods) => (

        
         
            <  div className="h-[220px] w-[170px] mx-2 bg-white mt-5 aImg">
              <Link to={`/Access/${Agoods.Anames}`}>
              <img
                src={Agoods.cover}
                alt='h' className='w-[100%] h-[auto] px-2' />
                </Link>

                <article className='relative px-4'>
           <h4 className='font-medium capitalize px-1 text-[15px] my-1'>{Agoods.Anames}</h4>
           <span className='text-yellow-300 absolute top-[-1.2rem]'>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            </span>
           <div className='relative flex px-1 space-x-12'>
           <h4 className='font-medium text-[16px] '><span>$</span>{Agoods.price}</h4>
           <h4 onClick={() => handleAddToCart(Agoods)} className='text-red-400 uppercase cursor-pointer font-medium text-[25px] absolute top-[-1.5rem] right-0'
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

export default AccessoriesCateg