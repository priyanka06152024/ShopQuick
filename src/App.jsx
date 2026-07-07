import AOS from "aos"
import "aos/dist/aos.css"
import {useEffect,useState} from "react";

function App() {
   const [orderPopUp,setOrderPopUp] = useState(false);
    const handlePopUp = ()=>{

    }

    useEffect(
      ()=>{
        Aos.init({
          offset:100,
          duration:800,
          easing: "ease-in-sine",
          delay:100,
       
        });
        Aos.refresh
      },[]
    );
  return (
   
    <>
    <div className = "bg-white dark:bg-gray-900 dark:text-white duration-200 ">

    </div>
    </>
  );
}

export default App;