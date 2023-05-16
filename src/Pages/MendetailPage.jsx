import React from 'react'
import { Link, useOutletContext  } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import MenData from './Datapges/Mendata'

const MendetailPage = () => {
  const { increaseItemCount, onItemAdd, items } = useOutletContext();
    const [singleProduct, setProduct] =useState([]);
    const {name} = useParams();
    useEffect(()=> {
        const findProuct = () => {
            const newProduct = MenData.find((product) => product.name === name)
            setProduct(newProduct)
        }
        findProuct();
    },[name])
    const handleAddToCart = (item) => {
      increaseItemCount();
      onItemAdd(item);
    }
  return (
    <div className='min-h-screen bg-white'>
      
<main className='sm:flex sm:justify-center lg:flex lg:justify-center'>
<div className="w-[370px] h-[230px]  mr-4 ml-3  rounded-xl  sm:w-[500px] sm:h-[400px]  ">
            <span className="absoulte text-[2.2em] px-4">
                <Link to="/Men"> <i class="ri-arrow-left-line"></i></Link>
               </span>
          <img
            src={singleProduct.cover}
            alt="g"
            className="w-[100%] h-[auto] rounded-xl"
          />
           </div>
          <article className='mt-[10rem] px-3 sm:mt-[4rem] pb-[5rem]'>
          <section className="flex space-x-20 sm:space-x-0 sm:block lg:space-x-0 lg:block">
          <h4 className="font-bold capitalize px-1 text-[22px] my-1 text-gray-700 lg:px-0">
            {singleProduct.name}
          </h4>
            <span className="text-yellow-400 text-[25px] lg:block lg:text-left sm:block sm:text-left ">
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              </span>
          </section>
          <div className="px-2 space-x-12 sm:w-[70%] lg:w-[50%]">
            <p className="text-gray-700">{singleProduct.desc}</p>
          </div>
          <section className="flex justify-center mt-5 space-x-20 sm:py-0 sm:justify-start lg:py-0 lg:justify-start">
            <h4 className="font-medium text-[40px] px-1 text-gray-700"> <span>$</span>{singleProduct.price}</h4>
            <h4 onClick={() => handleAddToCart(singleProduct)} className=" uppercase py-2 px-2 rounded-sm text-[18px]
            h-[3rem] cursor-pointer w-[10rem] bg-gray-800 text-white ">
            <i className="ri-add-circle-fill text-red-400 px-1 text-[22px]"></i>Add to cart
            </h4>
              
              </section>
              </article>
       
        </main>
    </div>
  )
}

export default MendetailPage