import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { useTranslation } from "react-i18next";

export const ItemCart = ({ item }) => {
  const [t, i18n] = useTranslation("global");
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { editItemToCart } = useContext(CartContext);

  /* Desestructuramos el item para sacar solo la id */
  const { amount } = item;
  console.log(item);

  return (
    <div>
      <div className="flex p-5">
        <img className="h-40 w-40" src={item.img} alt="" />
        <div className="flex flex-col justify-between ml-4">
          <div>
            <h1 className="text-black text-sm font-semibold pb-1">{item.name}</h1>
            <h2 className="font-light text-xs pb-2">€{item.price}</h2>
            <h2 className="font-light text-xs">{item.size}</h2>
          </div>

          <div id="amount" className="flex mt-10">
            <button
              className="font-semibold text-xs mr-3"
              onClick={() => editItemToCart(item._id, "del", amount)}
            >
              -
            </button>
            <div className="font-light text-xs">{item.amount}</div>
            <button
              className="font-semibold text-xs ml-3"
              onClick={() => editItemToCart(item._id, "add", amount)}
            >
              +
            </button>
          </div>
          <div id="remove" className="font-light text-sm mt-auto mb-3">
            <a
              className="underline2 cursor-pointer"
              onClick={() => editItemToCart(item._id, "del", amount)}
            >
              {t("shop.remove")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
