import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import newarrivalData from "../Components/NewArrival/Narrival";
// import flashData from "../Components/FlashDeal/flashData";
import HeaderFooter from "../Components/Header/HeaderFooter";
import "../Components/Styles/Product.css"
import { Link, useOutletContext } from "react-router-dom";
const ProductDetail = () => {
  const { increaseItemCount, onItemAdd, items } = useOutletContext();
  const [product, setProduct] = useState();
  const { productId } = useParams();

  useEffect(() => {
    const data = [...newarrivalData,];
    let newProduct = data.find((el) => el.id === productId);
    setProduct(newProduct);
  }, [productId]);

  const handleAddToCart = (item) => {
    increaseItemCount();
    onItemAdd(item);
  }
  console.log(items);

  return (
    <>
    <section className="min-h-screen bg-white">
    <main className=' sm:flex sm:justify-center lg:flex lg:justify-center'>
    {
        product && (<div className="h-[16rem] ">
        <div className="w-[370px] h-[230px]  mr-4 ml-3  rounded-xl">
            <span className="absoulte text-[2.2em] px-4">
                <Link to="/"> <i class="ri-arrow-left-line"></i></Link>
               </span>
          <img
            src={product.cover}
            alt="g"
            className="w-[100%] h-[auto] rounded-xl"
          />
           </div>
           <article className="mt-[8rem] sm:mt-[5rem] px-4 pb-[5rem]">
          <section className="flex space-x-20 sm:space-x-0 sm:block lg:space-x-0 lg:block">
          <h4 className="font-medium capitalize px-1 text-[25px] my-1 text-gray-700">
          {product.title}
          </h4>
            <span className="text-yellow-400 text-[25px] sm:block sm:text-left  lg:block lg:text-left">
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              </span>
          </section>
          <div className="px-2 space-x-12 sm:w-[50%] lg:w-[50%]">
            <p className="text-gray-700">{product.desc}</p>
          </div>
          <section className="flex justify-center mt-5 space-x-20">
            <h4 className="font-medium text-[40px] px-1 text-gray-700"><span>$</span>{product.price}</h4>
            <h4 onClick={() => handleAddToCart(product)}  className=" uppercase py-2 px-2 rounded-sm text-[18px]
            h-[3rem] cursor-pointer w-[10rem] bg-gray-800 text-white">
            <i className="ri-add-circle-fill text-red-400 px-1 text-[22px]"></i>Add to cart
            </h4>
              
              </section>
      </article>
      </div>
      )
    }
    </main>
    </section>
    
    {/* <HeaderFooter></HeaderFooter> */}
    </>
  );
};

export default ProductDetail;
