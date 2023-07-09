import { createContext, useEffect, useState } from "react";
import axios from "axios";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  /* Creamos un estado para el carrito */
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await axios
      //.get("http://localhost:4000/products")
      .get("https://tfg-backend-camals.up.railway.app/products")
      .then(({ data }) => setProducts(data.products));
  };

  const getProductsCart = async () => {
    return await axios
      //.get("http://localhost:4000/products-cart")
      .get("https://tfg-backend-camals.up.railway.app/products-cart")
      .then(({ data }) => setCartItems(data.productsCart))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProducts();
    getProductsCart();
  }, []);

  const addItemToCart = async (product) => {
    const { name, img, price, size } = product;

    //await axios.post("http://localhost:4000/products-cart", { name, img, price, size });
    await axios.post("https://tfg-backend-camals.up.railway.app/products-cart", { name, img, price, size });

    getProducts();
    getProductsCart();
  };

  const editItemToCart = async (id, query, amount) => {
    if (query === "del" && amount === 1) {
      await axios
        //.delete(`http://localhost:4000/products-cart/${id}`)
        .delete(`https://tfg-backend-camals.up.railway.app/products-cart/${id}`)
        .then(({ data }) => console.log(data));
    } else {
      await axios
        //.put(`http://localhost:4000/products-cart/${id}?query=${query}`, {
         .put(`https://tfg-backend-camals.up.railway.app/products-cart/${id}?query=${query}`, {
          amount,
        })
        .then(({ data }) => console.log(data));
    }

    getProducts();
    getProductsCart();
  };

  return (
    /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
    <CartContext.Provider
      value={{ cartItems, products, addItemToCart, editItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
