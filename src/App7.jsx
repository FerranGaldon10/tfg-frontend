import React from "react";
import Navbar from "./components/Navbar"
import Features from "./components/Features";
import Footer from "./components/Footer";
import Legal from "./components/Legal";
import { useTranslation } from "react-i18next";
import { CartProvider } from "./context/CartContext";

function App7() {
  const [t, i18n] = useTranslation("global");

  return (
    <CartProvider>
        <Navbar/>
        <Legal/>
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

export default App7;
