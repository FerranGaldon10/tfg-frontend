import React, { useContext, useEffect, useState} from "react";
import {ItemCart} from "./ItemCart";
import CartContext from "../context/CartContext";
import { useTranslation } from "react-i18next";
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import global_es from "../translations/es/global.json";
import global_en from "../translations/en/global.json";

i18next.init({
  interpolation: { escapeValue: false},
  lng: "en",
  resources : {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});


function Navbar() {

  const [t, i18n] = useTranslation("global");

  const buttonText = {
    en: 'EN',
    es: 'ES',
  };

  const [language, setLanguage] = useState('en');

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    i18next.changeLanguage(newLanguage);
  };

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  
  const handleMouseEnter = () => {
    setIsOpenMenu(true);
  };
  
  const handleMouseLeave = () => {
    setIsOpenMenu(false);
  };

  const handleClick = () => {
    if (isOpenMenu) {
      setIsOpenMenu(false);
    }
  };
  
  const [isOpen, setIsOpen] = useState(false);
  const [productsLength, setProductsLength] = useState(0);

  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    setProductsLength(
      cartItems?.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItems]);

  const total = cartItems?.reduce(
    (previous, current) => previous + current.amount * current.price,
    0
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);

  };

  useEffect(() => {
    if (isOpen) {
      // Agregar clase al body
      document.body.classList.add("darken-page");
    } else {
      // Remover clase del body
      document.body.classList.remove("darken-page");
    }
  }, [isOpen]);

  return (
    <I18nextProvider i18n={i18next}>
    <div >
    
    <nav className="flex justify-between w-screen p-7 bg-white fixed top-0 sombra z-[9999]">
      <div className="text-sm font-normal flex p-0 m-0">
        <div className="hidden md:block">
            <div
              className="dropdown-navbar"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="menu-navbar mt-2" onClick={handleClick}>{t("navbar.menu")}</div>
              {isOpenMenu && (
                <div className="dropdown-content-navbar">
                  <div className="item-navbar"><a href="/pages/App2.html">{t("navbar.shop")}</a></div>
                  <div className="item-navbar"><a href="/pages/App6.html">{t("navbar.about")}</a></div>
                  <div className="item-navbar"><a href="/pages/App4.html">{t("navbar.collection")}</a></div>
                  <div className="item-navbar">
                      {language === 'en' ? (
                        <button onClick={() => changeLanguage('es')}>{buttonText.es}</button>
                      ) : (
                        <button onClick={() => changeLanguage('en')}>{buttonText.en}</button>
                      )}
                  </div>
                </div>
              )}
            </div>
        </div>
        <button className="mr-8 md:hidden md:mr-0 bg-transparent border-0 underline focus:outline-none focus:ring-0"><a href="/pages/App2.html">{t("navbar.shop")}</a></button>

        <button className="mr-8 md:mr-0 bg-transparent border-0 underline focus:outline-none focus:ring-0 md:hidden"><a href="/pages/App6.html">{t("navbar.about")}</a></button>

        <button className="md:mr-0 bg-transparent border-0 underline focus:outline-none focus:ring-0 md:hidden"><a href="/pages/App4.html">{t("navbar.collection")}</a></button>
        
        
      </div>

      <div className="p-0">
        <a className="font-bold text-xl" href="/index.html">
          <img src="/LOGOpequeño.png" className="w-24 h-9" alt="" />
        </a>
      </div>

      <div className="text-sm flex">

        <div className="mt-2" >
          {language === 'en' ? (
            <button className="ml-16 md:ml-0 bg-transparent border-0 underline focus:outline-none focus:ring-0 md:hidden" onClick={() => changeLanguage('es')}>{buttonText.es}</button>
          ) : (
            <button className="ml-16 md:ml-0 bg-transparent border-0 underline focus:outline-none focus:ring-0 md:hidden" onClick={() => changeLanguage('en')}>{buttonText.en}</button>
          )}
        </div>
      

        <div className="dropdown-container">
          <button className="ml-16 md:ml-0 bg-transparent border-0 underline focus:outline-none focus:ring-0" onClick={toggleDropdown}>
          {t("navbar.cart")} <span className="font-light">({cartItems.length})</span>
          </button>
          {isOpen && (
            <div className="h-screen dropdown-menu">
              
              <div className="flex flex-col h-screen">
                <div className="p-4">
                  <p className="">{t("navbar.cart")}</p>
                  <button className="dropdown-close-button font-bold" onClick={toggleDropdown}>X</button>
                </div>

                <hr className="border-gray-400 border-1" />

                <div id="scroll" style={{ overflowY: "auto" }}>
                
                  {cartItems.length === 0 ? (
                    <p className="text-center text-sm font-semibold text-black mt-72">{t("navbar.empty")}</p>
                  ) : (
                    <div>
                      {cartItems.map((item, i) => (
                        <ItemCart key={i} item={item} />
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="mt-auto p-4">
                  <h2 className="text-sm font-semibold">{t("navbar.subtotal")}: ${total}</h2>
                  {cartItems.length === 0 ? (
                  <button className="w-full h-12 bg-black text-gray-100 font-light mt-5">
                    <a href="/pages/App2.html">{t("navbar.buying")}</a>
                  </button>
                  ) : (
                    <button className="w-full h-12 bg-black text-gray-100 font-light mt-5">
                      <a href="/pages/App5.html">{t("navbar.finish")}</a>
                    </button>
                  )}
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
    </div>
    </I18nextProvider>
  );
}

export default Navbar;
