import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header"
import HeroSection from "./Components/HeroSection/HeroSection";
import Products from "./Components/Products/Products";
import TopProducts from "./Components/TopProducts/TopProducts";
function App() {
  const [orderPopUp, setOrderPopUp] = useState(false);
  const handleOrderPopUp = () => {

  }

  useEffect(
    () => {
      AOS.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,

      });
      AOS.refresh();
    }, []
  );
  return (

    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 ">
      <Header handleOrderPopUp={handleOrderPopUp} />
      <HeroSection handleOrderPopUp ={handleOrderPopUp} />
      <Products  />
      <TopProducts handleOrderPopUp={handleOrderPopUp} />
      <Banner />
      </div>
    </>
  );
}

export default App;