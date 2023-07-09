import React, { useContext, useEffect, useState, useRef } from "react";
import Pay from "./components/Pay";
import Navbar from "./components/Navbar";
import { useTranslation } from "react-i18next";
import { CartProvider } from "./context/CartContext";

function App5() {
  const [t, i18n] = useTranslation("global");

  return (
    <CartProvider>
        <Navbar/>
        <Pay />
    </CartProvider>
  );
}

export default App5;
