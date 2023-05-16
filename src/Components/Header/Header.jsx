import React from 'react'
import "../Styles/home.css"
import "../Styles/banner.css"
import { Link } from 'react-router-dom'

const Header = ({ itemCount }) => {
  

  return (
    <>
  
    <div >
   
         
    <section className='relative flex justify-center mt:-8 lg:space-x-40'>
    <h1 className='text-[1.5rem] text-center logo1 '>Aul <span className='logo'>Exious</span></h1>
    <div className='z-50 nav headNav' >
            <ul className='text-[20px]   flex font-semibold'>
            <li className='px-3 py-3 cursor-pointer Navlinks'><Link to="/">Home</Link></li>
            <li className='px-3 py-3 cursor-pointer Navlinks'><Link to="/Men">Men category</Link></li>
            <li className='px-3 py-3 cursor-pointer Navlinks'><Link to="/Women">Women category</Link></li>
            <li className='px-3 py-3 cursor-pointer Navlinks'><Link to="/Accessories">Accessories</Link></li>
            </ul>
        </div>
        <div className='text-[2rem] text-gray-400  cart relative'><Link to="/Cart" >
                    <i class="ri-shopping-basket-line"></i></Link>
                    <span className='absolute  text-red-500 h-[2.5rem] w-[2.5rem] rounded-full text-[19px] font-extrabold left-[-48px]
                    top-3'>{itemCount}</span></div>
    </section>
    <section className='text-center mb-[1.4rem] ' >
      <input type="text" placeholder='Search  ......'  className='w-[22rem] lg:w-[60rem]
         h-[2.3rem] rounded-[5px] bg-slate-100 mt-1 px-3 py-2
           border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none
           focus:border-sky-500 '/>
    </section>
    
    
    </div>
    </>
  )
}

export default Header