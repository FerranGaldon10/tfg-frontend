import React from "react";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HoverDiv from "./components/HoverDiv";
import InfinityProducts from "./components/InfinityProducts";
import { CartProvider } from "./context/CartContext";
import { useTranslation } from "react-i18next";

function App4() {
  const [t, i18n] = useTranslation("global");


  return (
    <CartProvider>
    <div>
      <Navbar/>
      <div className="w-screen h-screen flex flex-col items-center justify-center relative overflow-hidden text-center">

        <video className="object-cover h-full w-full absolute top-0 left-0" playsInline autoPlay loop muted poster="">
          <source src="/videos/Espacio-Background.mp4" type="video/mp4" />
        </video>

        <div className="relative">
          <p className="text-white font-bold text-4xl tracking-widest mb-4 ">{t("infinity.maintitle")}</p>
        </div>

      </div>


      <div className="bg-black p-10 md:p-4 pt-28 pb-28  text-center ">
      <HoverDiv text={t("infinity.p1")}  />
      <HoverDiv text={t("infinity.p2")} />

      <div className="flex justify-center items-center m-20">
        <video className=" w-96 " playsInline autoPlay loop muted poster="">
            <source src="/videos/VideoInfinity.mp4" type="video/mp4" />
        </video>
      </div>

      <HoverDiv text={t("infinity.p3")} />
      <HoverDiv text={t("infinity.p4")} />
    </div>

    <InfinityProducts/>

    <Features/>
    <hr className="border-gray-800 border-1"/>
    <Footer/>
    <hr className="border-gray-800 border-1" />
    <div className="bg-black text-white flex justify-center p-5 md:text-center text-xs">
        <h4 className="font-thin">{t("footer.end")}</h4>
    </div>

    </div>
    
    </CartProvider>
  );
}



export default App4;
