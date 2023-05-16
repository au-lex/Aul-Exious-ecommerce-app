import React from 'react'
import { useState, useEffect } from 'react';

import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Cart = () => {
  const { items, deleteQty } = useOutletContext();
  const [Price, setPrice] = useState(0);
  useEffect(() => {
    let total = 0;
   items.map((product) => (total  += product.amount * product.price));
    setPrice( total);
  }, [items]);


 


  return (

      <section className='relative '>
        <div className=' mb-[2rem] py-1 px-4 '>
        <span className='absolute text-[1.8rem] px-4 top-3'><Link to="/"><i class="ri-arrow-left-line"></i></Link></span>
        <h4 className='capitalize text-[1.5rem]    text-center 
        font-bold mt-3 text-gray-500 mb-2'>shopping Cart</h4>
        <span className='block border-b border-indigo-200 '></span>
        </div>
    {items.length === 0 ? (
      <div>
      <p className= "text-center text-[1.7rem]">Your cart is empty.</p>
     
      </div>
      
      ) : (
       
        
        <>

{items.map((product, idx) => (
  <main className='px-4' key={idx}>
  <figure className='flex mt-3 bg-white  rounded-[5px] pt-3 px-2 drop-shadow-md border border-indigo-200 '>
  <div className='w-[100px] h-[100px] '>

    <img src={ product.cover } alt="" className='w-[100%] h-[auto]' />
    </div>
    <figcaption  className='relative'>
      <h4>{product.name || product.names || product.Anames  || product.title}</h4>
      <section className='flex space-x-48'>
      <h3><span>$</span>{product.price}</h3>
      <span className='absolute text-red-400  font-bold  text-[1.5rem]' onClick={() => deleteQty(idx)}>
        <i class="ri-delete-bin-5-line"></i></span>
        </section>
    </figcaption>
    </figure>
    </main>

))}
 <span className='block mt-10 border-b border-indigo-200 '></span>
<p  className=' text-center capitalize font-semibold text-[1.5rem] text-gray-800'>main total: <span>$</span>{ Price}</p>
   <div className='px-4 mt-6'>

<h1 className='capitalize font-bold mb-[5rem] bg-green-400 text-gray-100 text-[1.2rem] py-4 rounded-[5px] text-center'>checkout</h1>
   </div>
 
   
    </>
     )}
    </section>
  )


}
export default Cart