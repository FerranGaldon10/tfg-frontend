import React from "react";
import Navbar from "./components/Navbar";
import Main_page from "./components/Main_page";
import Bestsellers from "./components/Bestsellers";
import Sections from "./components/Sections";
import Accesories from "./components/Accesories";
import Colection from "./components/Colection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { CartProvider } from "./context/CartContext";
import { useTranslation } from "react-i18next";



function App() {
  const [t, i18n] = useTranslation("global");
  return (
    <CartProvider>
    <main className="">
      <div>
        <Navbar/>
        <Main_page/>
        <Bestsellers/>
        <Sections/>
        <Accesories/>
        <div className="pt-20 ">
          <h1 className=" pb-10 md:pt-15 text-center text-sm font-semibold text-black">{t("collection.title")}</h1>
        </div>
        <Colection/>
        <Contact/>
        <Features/>
        <hr className="border-gray-800 border-1"/>
        <Footer/>
        <hr className="border-gray-800 border-1" />
        <div className="bg-black text-white flex justify-center p-5 md:text-center text-xs">
          <h4 className="font-thin">{t("footer.end")}</h4>
        </div>

        
      </div>
    </main>
    </CartProvider>
    
  );
}

export default App;