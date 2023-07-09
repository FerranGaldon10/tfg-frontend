import React from "react";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Buy from "./components/Buy";
import { CartProvider } from "./context/CartContext";
import { useTranslation } from "react-i18next";

function App3() {
  const [t, i18n] = useTranslation("global");
  return (
    <CartProvider>
    <div>
      <Navbar />
      <div className="bg-cyan-600 text-white infoshop pt-4 pb-2 text-center">
        <p className="">
          {t("shop.discount")}
        </p>
      </div>
      <Buy />
      <Features />
      <hr className="border-gray-800 border-1" />
      <Footer />
      <hr className="border-gray-800 border-1" />
      <div className="bg-black text-white flex justify-center p-5 md:text-center text-xs">
        <h4 className="font-thin">
          {t("footer.end")}
        </h4>
      </div>
    </div>
    </CartProvider>
  );
}

export default App3;
