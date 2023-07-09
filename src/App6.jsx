import React, { useContext, useEffect, useState, useRef } from "react";
import Pay from "./components/Pay";
import Navbar from "./components/Navbar"
import Features from "./components/Features";
import Footer from "./components/Footer";
import About from "./components/About";
import { useTranslation } from "react-i18next";
import { CartProvider } from "./context/CartContext";

function App6() {
  const [t, i18n] = useTranslation("global");

  return (
    <CartProvider>
        <Navbar/>
        <About/>
        <Features/>
        <hr className="border-gray-800 border-1"/>
        <Footer/>
        <hr className="border-gray-800 border-1" />
        <div className="bg-black text-white flex justify-center p-5 md:text-center text-xs">
          <h4 className="font-thin">{t("footer.end")}</h4>
        </div>
    </CartProvider>
  );
}

export default App6;
