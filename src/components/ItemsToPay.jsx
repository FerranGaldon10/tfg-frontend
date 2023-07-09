import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { useTranslation } from "react-i18next";

export const ItemsToPay = ({ item }) => {
  const [t, i18n] = useTranslation("global");
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { editItemToCart } = useContext(CartContext);

  /* Desestructuramos el item para sacar solo la id */
  const { amount } = item;
  console.log(item);

  return (
    <div>
      <div className="flex p-5">
        <img className="h-24 w-24" src={item.img} alt="" />
        <div className="flex flex-col justify-between ml-4">
          <div>
            <h1 className="text-white text-sm font-semibold pb-1">{item.name}</h1>
            <h2 className="font-light text-white text-xs pb-2">€{item.price}</h2>
            <h2 className="font-light text-white text-xs">{item.size}</h2>
            <div id="amount" className="mt-2">
                <div className="font-light text-white text-xs">{t("shop.amount")} {item.amount}</div>
            </div>
          </div>
 
        </div>
      </div>
    </div>
  );
};
