import React, { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CartContext from "../context/CartContext";
import { useTranslation } from "react-i18next";
import Popup from "reactjs-popup";

function Buy() {
  const [t, i18n] = useTranslation("global");
  const [popupOpen, setPopupOpen] = useState(false);

  const handleSubscribe = () => {
    setPopupOpen(true);
  };

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const productName = urlParams.get("name");
  const productPrice = urlParams.get("price");
  const productImg = urlParams.get("img");
  const productImgHover = urlParams.get("imghover");
  const productDesc = urlParams.get("description");

  const productSize = urlParams.get("size");

  const { addItemToCart, products } = useContext(CartContext);
  console.log("Prueba", products);

  let productToImport2 = products.find(
    (product) => product.name === productName
  );

  const [selectedSize, setSelectedSize] = useState(productSize || "XS");

  const handleAddToCart = () => {
    addItemToCart(productToImport2);
    const url = `/pages/App2.html`;
    window.location.replace(url); // Redirigir a App2.html y refrescar la página por completo
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);

    console.log("Size dentro:", size);
  };

  useEffect(() => {
    if (productToImport2 && selectedSize) {
      productToImport2.size = selectedSize;
      console.log("Size:", selectedSize);
      console.log("prueba:", productToImport2.size);
    } else {
      setSelectedSize("XS");
    }
  }, [selectedSize]);

  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");

  const toggleDesplegable = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const [isOpen1, setIsOpen1] = useState(false);
  const [text1, setText1] = useState("");

  const toggleDesplegable1 = () => {
    setIsOpen1(!isOpen1);
  };

  const handleInputChange1 = (event) => {
    setText1(event.target.value);
  };

  const [isOpen2, setIsOpen2] = useState(false);
  const [text2, setText2] = useState("");

  const toggleDesplegable2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleInputChange2 = (event) => {
    setText2(event.target.value);
  };
  const handlePopupClose = () => {
    setShowPopup(false);
    window.location.reload();
  };

  return (
    <div>
      <div className="grid grid-flow-col grid-cols-3 md:grid-cols-1 md:grid-flow-row md:grid-rows- h-auto md:h-auto mb-10  mt-20">
        <div className="">
          <img className="p-7" src={productImgHover} alt="" />
        </div>

        <div className="">
          <img className="p-7" src={productImg} alt="" />
        </div>

        <div className="mr-16 md:ml-5">
          <div className="pt-7">
            <h1 className="text-lg font-semibold text-black mb-7">
              {productName}
            </h1>
            <h2 className="text-lg font-light text-black mb-7">
              €{productPrice}
            </h2>

            <div className="flex mb-7">
              <button
                className={`w-14 h-14 mr-3 border-2 ${
                  selectedSize === "XS"
                    ? "border-black font-bold"
                    : "border-gray-300"
                } bg-white`}
                onClick={() => handleSizeClick("XS")}
              >
                XS
              </button>
              <button
                className={`w-14 h-14 mr-3 border-2 ${
                  selectedSize === "S"
                    ? "border-black font-bold"
                    : "border-gray-300"
                } bg-white`}
                onClick={() => handleSizeClick("S")}
              >
                S
              </button>
              <button
                className={`w-14 h-14 mr-3 border-2 ${
                  selectedSize === "M"
                    ? "border-black font-bold"
                    : "border-gray-300"
                } bg-white`}
                onClick={() => handleSizeClick("M")}
              >
                M
              </button>
              <button
                className={`w-14 h-14 mr-3 border-2 ${
                  selectedSize === "L"
                    ? "border-black font-bold"
                    : "border-gray-300"
                } bg-white`}
                onClick={() => handleSizeClick("L")}
              >
                L
              </button>
              <button
                className={`w-14 h-14 mr-3 border-2 ${
                  selectedSize === "XL"
                    ? "border-black font-bold"
                    : "border-gray-300"
                } bg-white`}
                onClick={() => handleSizeClick("XL")}
              >
                XL
              </button>
            </div>

            <button
              className="bg-cyan-600 text-white w-2/3 h-14 text-sm font-light mb-7"
              onClick={handleAddToCart}
            >
              {t("buy.button1")}
            </button>

            <button
              onClick={handleSubscribe}
              className="bg-black text-white w-2/3 h-14 text-sm font-light mb-7"
            >
              {t("buy.button2")}
            </button>
            <Popup
              open={popupOpen}
              onClose={() => setPopupOpen(false)}
              closeOnDocumentClick={false}
            >
              {" "}
              <div className="bg-cyan-500 relative p-5 rounded">
                <button
                  className="absolute top-0 right-0 m-2 mr-4 text-white"
                  onClick={() => setPopupOpen(false)}
                >
                  X
                </button>
                <div className="text-center font-bold m-3 mt-5 text-white">
                {t("buy.popup")}
                </div>
              </div>
            </Popup>

            <p className="text-base mb-7 font-light text-black">
              {productDesc}
            </p>

            <hr className="border-black" />

            <div>
              <div className="grid grid-flow-col grid-cols-2 mt-4 mb-4">
                <p className="font-light text-black">{t("buy.details")}</p>
                <button
                  onClick={toggleDesplegable}
                  className="text-right mr-4 text-lg font-bold text-black"
                >
                  {isOpen ? "-" : "+"}
                </button>
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className=" p-4 mt-4 rounded-md"
                  >
                    <ul>
                      <li className="font-light ml-10 mb-2" type="disc">
                        {t("descbuy.detail1")}
                      </li>
                      <li className="font-light ml-10 mb-2" type="disc">
                        {t("descbuy.detail2")}
                      </li>
                      <li className="font-light ml-10 mb-2" type="disc">
                        {t("descbuy.detail3")}
                      </li>
                      <li className="font-light ml-10 mb-2" type="disc">
                        {t("descbuy.detail4")}n
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <hr className="border-black" />

            <div>
              <div className="grid grid-flow-col grid-cols-2 mt-4 mb-4">
                <p className="font-light text-black">{t("buy.size")}</p>
                <button
                  onClick={toggleDesplegable1}
                  className="text-right mr-4 text-lg font-bold text-black"
                >
                  {isOpen1 ? "-" : "+"}
                </button>
              </div>
              <AnimatePresence>
                {isOpen1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className=" p-4 mt-4 rounded-md"
                  >
                    <p className="font-light mb-3">{t("descbuy.size")}</p>
                    <img src="/size-guide.png" alt="" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <hr className="border-black" />

            <div>
              <div className="grid grid-flow-col grid-cols-2 mt-4 mb-4">
                <p className="font-light text-black">{t("buy.shipping")}</p>
                <button
                  onClick={toggleDesplegable2}
                  className="text-right mr-4 text-lg font-bold text-black"
                >
                  {isOpen2 ? "-" : "+"}
                </button>
              </div>
              <AnimatePresence>
                {isOpen2 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className=" p-4 mt-4 rounded-md"
                  >
                    <p className="font-light ml-5 mb-3">
                      {t("descbuy.shipping1")}
                    </p>
                    <p className="font-light ml-5 mb-3">
                      {t("descbuy.shipping2")}
                    </p>
                    <p className="font-light ml-5 mb-5">
                      {t("descbuy.shipping3")}
                    </p>
                    <p className="font-light text-sm ml-5 mb-3">
                      {t("descbuy.shipping4")}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <hr className="border-black md:mb-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
