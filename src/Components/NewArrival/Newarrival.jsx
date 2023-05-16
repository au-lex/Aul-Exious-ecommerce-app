import React from 'react'
import "../Styles/Newarrival.css"
import NewData from "./Narrival"
import { Link } from 'react-router-dom'
import {  useOutletContext } from 'react-router-dom'
import "../Styles/Newarrival.css"

const Newarrival = () => {
  const { increaseItemCount, onItemAdd, items } = useOutletContext();



  const handleAddToCart = (item) => {
    increaseItemCount();
    onItemAdd(item);
  }
  return (
    <>
    
    <h2 className='text-[1.5rem] capitalize mt-8 mx-8 lg:ml-12 font-semibold text-gray-800'>
      <span className='text-gray-800'><i className="ri-gift-fill"></i></span> new arrivals</h2>
    
    <section className='flex flex-wrap justify-center mt-4 '>
      {NewData.map((value) =>(
        
        <div className='h-[16rem]' key={value.id}>
          <div className='w-[170px] h-[230px]  newimg bg-white mr-2 ml-2  rounded-xl '>
          <Link to={`/products/${value.id}`}>
          <img src={value.cover} alt="g" className='w-[100%] h-[auto] rounded-xl'
           />
           </Link>
           <article className='relative px-4'>
           <h4 className='font-medium capitalize px-1 text-[15px] my-1'>{value.title}</h4>
           <span className='text-yellow-300 absolute top-[-1.2rem]'>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            </span>
           <div className='relative flex px-1 space-x-12'>
           <h4 className='font-medium text-[16px] '><span>$</span>{value.price}</h4>
           <h4 onClick={() => handleAddToCart(value)}  className='text-red-400 uppercase cursor-pointer font-medium text-[25px] absolute top-1 right-0'
           ><i className="ri-add-circle-fill"></i></h4>
           </div>
           </article>
          </div>
        </div>
      ))}
    </section>
    </>
  )
}

export default Newarrival