import React, { useContext, useEffect, useState, useRef } from "react";
import {ItemsToPay} from "./ItemsToPay";
import CartContext from "../context/CartContext";
import { useTranslation } from "react-i18next";




function Pay() {
    const [t, i18n] = useTranslation("global");
    const [isOpen3, setIsOpen3] = useState(false);

    const toggleDropdown2 = () => {
        setIsOpen3(!isOpen3);

    };

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
  
  let descuento = 0;
  const envio = 3;

  if (total > 100) {
    descuento = descuento;
  } else {
    descuento = envio;
  }
  
  const totalenvio = total + descuento;

  console.log("Cart Items ",cartItems);
  const cartItemsDef = JSON.stringify(cartItems);

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const response = await fetch("http://localhost:3000/payform", {
    const response = await fetch("https://tfg-backend-camals.up.railway.app/payform", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: event.target.email.value,
        country: event.target.country.value,
        name: event.target.name.value,
        surnames: event.target.surnames.value,
        street: event.target.street.value,
        house: event.target.house.value,
        postal: event.target.postal.value,
        city: event.target.city.value,
        state: event.target.state.value,
        phone: event.target.phone.value,
        number: event.target.number.value,
        expire: event.target.expire.value,
        cvv: event.target.cvv.value,
        cartitems: cartItemsDef,
      }),
    });

    if (response.ok) {
      setShowPopup(true);
    }
  };
  const handlePopupClose = () => {
    setShowPopup(false);
    const url = `/index.html`;
    window.location.assign(url);
  };



  return (
    <div className="w-full pt-20 flex md:flex-none md:grid md:grid-flow-row md:grid-rows-2">

        <div className="w-7/12 h-full md:h-0 md:w-full p-20 md:p-2 md:flex md:flex-row md:justify-center">
            <div >
            <div className="flex flex-col w-full h-full justify-center items-center md:mt-10 md:mb-10">
            <a href="/index.html"><img src="/Camals_MainPage.png" className="w-64 flex justify-center items-center " /></a>
            </div>

            <div className="hidden md:block">
                <div className="w-full p-4 bg-gray-100 flex justify-between mt-5">
                    <button onClick={toggleDropdown2} className="font-light text-sm">{t("pay.show")} <span className="font-bold">▼</span></button>
                    <h1 className="font-bold">{totalenvio} €</h1>
                </div>

                <div>
                    {isOpen3 && (
                        <div className="w-5/12 md:w-full bg-cyan-600 ">

                        <div className="w-full p-5">
            
                            <div className="p-5">
                                <hr className="bg-black mt-4 mb-4 border-gray-300 border-1"/>
                                <h1 className="text-white font-medium mt-7 text-lg">{t("pay.summary")}</h1>
                            </div>
            
                            <div>
                                {cartItems.map((item, i) => (
                                    <ItemsToPay key={i} item={item} />
                                ))}
                            </div>
            
                            <div className="p-5">
                                <hr className="bg-black mt-8 mb-8 border-gray-300 border-1"/>
            
                                <div className="flex justify-between mb-3">
                                    <h1 className="text-white font-extralight">{t("pay.subtotal")}</h1>
                                    <div className="text-white ">{total} €</div>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="text-white font-extralight">{t("pay.shippingpay")}</h1>
                                    <div className="text-white">{envio} €</div>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="text-white font-extralight">{t("pay.discount")}</h1>
                                    <div className="text-white">
                                        {descuento === 3 ? "- 0 €" : descuento === 0 ? "- 3 €" : ''}
                                    </div>
                                </div>
                                <hr className="bg-black mt-8 mb-8 border-gray-300 border-1"/>
            
                                <div className="flex justify-between">
                                    <h1 className="text-white text-lg font-semibold">{t("pay.total")}</h1>
                                    <p className="text-white text-2xl font-bold">{totalenvio} €</p>
                                </div>
            
                            </div>
                        </div>
            
                    </div>

                        )}
                </div>
            </div>
            <hr className="bg-black mt-8 mb-8 border-gray-800 border-1"/>
            
            <form onSubmit={handleSubmit}>
            <p className="text-lg mb-4">{t("pay.info")}</p>
            <input className="w-full h-12 p-2 border bg-gray-50" type="text" name="email" placeholder={t("pay.infoplaceholder")} required/>

            <p className="text-lg mt-8 mb-4">{t("pay.shipping")}</p>
            <input className="w-full h-12 mb-2 p-2 border bg-gray-50" type="text" name="country" placeholder={t("pay.country")} required />
            <div className="flex">
                <input className="w-full h-12 mb-2 p-2 border bg-gray-50 mr-2" type="text" name="name" placeholder={t("pay.name")} required/>
                <input className="w-full h-12 mb-2 p-2 border bg-gray-50" type="text" name="surnames" placeholder={t("pay.surnames")} required/>
            </div>
            <input className="w-full h-12 mb-2 p-2 border bg-gray-50" type="text" name="street" placeholder={t("pay.street")} required/>
            <input className="w-full h-12 mb-2 p-2 border bg-gray-50" type="text" name="house" placeholder={t("pay.house")} />
            <div className="flex">
                <input className="w-full h-12 mb-2 p-2 border bg-gray-50 mr-2" type="text" name="postal" placeholder={t("pay.postal")} required/>
                <input className="w-full h-12 mb-2 p-2 border bg-gray-50 mr-2" type="text" name="city" placeholder={t("pay.city")} required/>
                <input className="w-full h-12 mb-2 p-2 border bg-gray-50" type="text" name="state" placeholder={t("pay.state")} required/>
            </div>
            <input className="w-full h-12 mb-2 p-2 border bg-gray-50" type="text" name="phone" placeholder={t("pay.phone")} required/>

            <p className="mt-8 mb-4 text-lg">{t("pay.payment")}</p>

            <div className=" border border-gray-300 p-4">
                <p className="mb-2">{t("pay.card")}</p>
                <div className="flex mb-2">
                    <input className="w-full h-12 mb-2 p-2 border bg-gray-50 mr-2" type="text" name="number" placeholder={t("pay.number")} required/>
                    <input className="w-full h-12 mb-2 p-2 border bg-gray-50 mr-2" type="month" name="expire" placeholder={t("pay.expire")} required/>
                    <input className="w-full h-12 mb-2 p-2 border bg-gray-50" type="text" name="cvv" maxLength={4} placeholder="CVV/CVC" required/>
                </div>
                <div className="flex mb-2">
                    <img className="w-6 h-6 ml-2" src="/visa.svg" alt="" />
                    <img className="w-6 h-6 ml-2" src="/amex.svg" alt="" />
                    <img className="w-6 h-6 ml-2" src="/mastercard.svg" alt="" />
                </div>
            </div>
            

            <div className="flex justify-between mt-8">
                <button className="font-light"><a href="/pages/App2.html">- {t("pay.button1")} -</a></button>
                <button type="submit" className="bg-cyan-600 text-white p-5 text-sm font-light">{t("pay.button2")}</button>

            </div>
            </form>
            {showPopup && (
            <div className="fixed z-10 inset-0 flex items-center justify-center">
              <div className='bg-cyan-500 relative p-5 rounded'>
                <button className='absolute top-0 right-0 m-2 mr-4 text-white' onClick={handlePopupClose}>X</button>
                <div className='text-center font-bold m-3 mt-5 text-white'>Compra realizada con exito</div>   
              </div>
            </div>
          )}


            </div>
        </div>


        <div className="w-5/12 md:w-full bg-cyan-600 md:hidden">

            <div className="w-full p-5">

                <div className="p-5">
                    <hr className="bg-black mt-16 mb-4 border-gray-300 border-1"/>
                    <h1 className="text-white font-medium mt-7 text-lg">{t("pay.summary")}</h1>
                </div>

                <div>
                    {cartItems.map((item, i) => (
                        <ItemsToPay key={i} item={item} />
                    ))}
                </div>

                <div className="p-5">
                    <hr className="bg-black mt-8 mb-8 border-gray-300 border-1"/>

                    <div className="flex justify-between mb-3">
                        <h1 className="text-white font-extralight">{t("pay.subtotal")}</h1>
                        <div className="text-white ">{total} €</div>
                    </div>
                    <div className="flex justify-between mb-3">
                        <h1 className="text-white font-extralight">{t("pay.shippingpay")}</h1>
                        <div className="text-white">+ {envio} €</div>
                    </div>
                    <div className="flex justify-between">
                        <h1 className="text-white font-extralight">{t("pay.discount")}</h1>
                        <div className="text-white">
                            {descuento === 3 ? "- 0 €" : descuento === 0 ? "- 3 €" : ''}
                        </div>
                    </div>
                    
                    <hr className="bg-black mt-8 mb-8 border-gray-300 border-1"/>

                    <div className="flex justify-between">
                        <h1 className="text-white text-lg font-semibold">{t("pay.total")}</h1>
                        <p className="text-white text-2xl font-bold">{totalenvio} €</p>
                    </div>

                </div>
            </div>

        </div>

    </div>
  );
  
}

export default Pay;
