import React, {useContext, useState, useEffect} from "react";
import CartContext from "../context/CartContext";
import { useTranslation } from "react-i18next";



function Accesories() {

    const [t, i18n] = useTranslation("global");

    const { addItemToCart, products } = useContext(CartContext);
    console.log ("prueba2:", products)
    const productToImport = products.filter((product) => product.type === "accesories");

    const handleProductClick = (product) => {
        const queryString = `?name=${product.name}&price=${product.price}&img=${product.img}&imghover=${product.imghover}&size=${product.size}&description=${product.description}`;
        const url = `/pages/App3.html${queryString}`;
        window.location.href = url;
      };
    
    
      const [hoveredProduct, setHoveredProduct] = useState(null);

      const handleMouseEnter = (product) => {
          setHoveredProduct(product);
        };
      
      const handleMouseLeave = () => {
          setHoveredProduct(null);
        };
      
      useEffect(() => {
          // Precargar las imágenes de product.imghover
          products.forEach((product) => {
            const img = new Image();
            img.src = product.imghover;
          });
        }, [products]);

  return (
    <div className="pt-20 pb-20" >
        <h1 className=" pb-10 md:pt-15 text-center text-sm font-semibold text-black">{t("accesories.title")}</h1>

        <div className="grid grid-cols-4 md:grid-cols-1 md:grid-flow-row md:grid-rows-4 lg:grid-cols-2 lg:grid-flow-row lg:grid-rows-2 w-screen justify-items-center justify-content-center ">
            
            {productToImport.map((product) =>(
                <div className="md:mb-4" key={product.id} >
                    <a href="#" onClick={() => handleProductClick(product)}>
                        <img className="size-bestsellers md:h-80 md:w-80 items-center text-center imagen-hover" src={hoveredProduct === product ? product.imghover : product.img} onMouseEnter={() => handleMouseEnter(product)} onMouseLeave={handleMouseLeave}/>
                    </a>
                    <div className="flex justify-center text-black text-xs mt-4 font-semibold">{product.name} |{" "}<span className="font-light text"> ${product.price}</span></div>

                </div>
            ))
            }
            
        </div>

        
    </div>
  );
}

export default Accesories;
