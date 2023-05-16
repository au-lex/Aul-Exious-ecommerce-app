import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/header.css"

const HeaderFooter = ({ itemCount }) => {
    function handleClick() {
        
        const Menubar = document.querySelector(".Menubar")
        const Navlinks = document.querySelectorAll(".Navlinks")
        Navlinks.forEach((item)=>{
            item.addEventListener("click",()=> {
                Menubar.classList.remove("active")
            })
        })
        Menubar.classList.toggle("active")
    }
  return (
    <>
    <section className='flex justify-center'>
        <div className=' Menubar  bg-gray-800 w-[22rem] h-[16rem]  rounded-xl fixed z-50 ' >
            <ul className='text-[20px] text-center text-white py-5'>
            <li className=' Navlinks py-3 cursor-pointer'><Link to="/">Home</Link></li>
            <li className=' Navlinks py-3 cursor-pointer'><Link to="/Men">Men category</Link></li>
            <li className=' Navlinks py-3 cursor-pointer'><Link to="/Women">Women category</Link></li>
            <li className=' Navlinks py-3 cursor-pointer'><Link to="/Accessories">Accessories</Link></li>
            </ul>
        </div>
       
    </section>
    <section className=' z-20 lg:hidden'>
        <div className='w-[100%] fixed bottom-0 z-20 bg-gray-100 h-[4rem] shadow-lg'>
            <section className='flex  justify-center space-x-14'>
                <div className='text-[2rem] text-gray-400 cursor-pointer' onClick={handleClick} ><i class="ri-apps-line"></i></div>
                <div className='text-[2rem] text-gray-400'><Link to="/"><i class="ri-home-2-line"></i></Link></div>
                <div className='text-[2rem] text-gray-400  relative'><Link to="/Cart" >
                    <i class="ri-shopping-basket-line"></i></Link>
                    <span className='absolute  text-red-500 h-[2.5rem] w-[2.5rem] rounded-full text-[19px] font-extrabold left-[18px]
                    top-3'>{itemCount}</span></div>
                <div className='text-[2rem] text-gray-400'><i class="ri-heart-line"></i></div>
                
            </section>
        </div>
    </section>
    
    </>
  )
}

export default HeaderFooter