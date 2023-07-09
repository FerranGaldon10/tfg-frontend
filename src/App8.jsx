import React from "react";
import Navbar from "./components/Navbar"
import Features from "./components/Features";
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";
import { useTranslation } from "react-i18next";
import { CartProvider } from "./context/CartContext";

function App8() {
  const [t, i18n] = useTranslation("global");

  return (
    <CartProvider>
        <Navbar/>
        <Privacy/>
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

export default App8;
