import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import MenCategory from "./Pages/MenCategory";
import WomenCategory from "./Pages/WomenCategory";
import AccessoriesCateg from "./Pages/AccessoriesCateg";
import Cart from "./Pages/Cart";
import ProductDetail from "./Pages/ProductDetail";
import MendetailPage from "./Pages/MendetailPage";
import Womendpage from "./Pages/Womendpage";
import Accessdpage from "./Pages/Accessdpage";
import HeaderFooter from "./Components/Header/HeaderFooter";
// import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";

const Layout = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart(prev => [...prev, item]);
  }

  const handleAddToCart = () => setCartItemsCount(cartItemsCount + 1); 
  const deleteItems = (index) => {
    const filteredItems = cart.filter((_, indx) => indx !== index);
    setCart(filteredItems);
  }

  return (
      <>
        <HeaderFooter itemCount={cartItemsCount}/>
        {/* <Header itemCount={cartItemsCount}/> */}
     
       
        <Outlet context={{
          items: cart,
          increaseItemCount: handleAddToCart,
          onItemAdd: addToCart,
          deleteQty: deleteItems
        }}/>
      </>
  )
}
  


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },

      {
        path: "/Men",
        element: <MenCategory/>,
      },

      {
        path: "/Women",
        element: <WomenCategory />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/mendetailpage/:name",
        element: <MendetailPage />,
      },
      {
        path: "/Womendpage/:names",
        element: <Womendpage />,
      },

      {
        path: "/Access/:Anames",
        element: <Accessdpage />,
      },

      {
        path: "/Accessories",
        element: <AccessoriesCateg />,
      },

      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
