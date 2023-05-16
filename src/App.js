import "./App.css";

import Heroslider from "./Components/Hero/Heroslider";
import Newarrival from "./Components/NewArrival/Newarrival";
import Flashdeal from "./Components/FlashDeal/Flashdeal";
import Banner from "./Components/Anoucement/Banner";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
// import Cart from "./Pages/Cart";

import { useState, useEffect } from "react";

import { BallTriangle } from "react-loader-spinner";

function App() {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div>
        {showLoader ? (
          <div className="loader">
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="gray"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={true}
            />
          </div>
        ) : (
          <div>
         <Header />
            <Heroslider />
            <Flashdeal />
            <Newarrival />
            <Banner />
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
