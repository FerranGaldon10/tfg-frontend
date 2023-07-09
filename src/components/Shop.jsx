import React, {useState, useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import CartContext from "../context/CartContext";
import { useTranslation } from "react-i18next";

function Shop() {
    const [t, i18n] = useTranslation("global");
    const [isOpen2, setIsOpen2] = useState(false);

    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);

    };


    const { addItemToCart, products } = useContext(CartContext);

    const [selectedFilter, setSelectedFilter] = useState("ALL");

    const handleProductFilter = (filter) => {
      setSelectedFilter(filter);
    };

    const handleProductClick = (product) => {
        const queryString = `?name=${product.name}&price=${product.price}&img=${product.img}&imghover=${product.imghover}&description=${product.description}`;
        const url = `/pages/App3.html${queryString}`;
        window.location.assign(url);
      };
    
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const handleMouseEnter = (product) => {
        setHoveredProduct(product);
      };
    
    const handleMouseLeave = () => {
        setHoveredProduct(null);
      };
    
    useEffect(() => {
        setSelectedFilter("ALL"); // Establecer el filtro en "ALL" por defecto
    }, []);
    
    useEffect(() => {
        // Obtener el valor del parámetro de consulta "filtro" de la URL
        const params = new URLSearchParams(window.location.search);
        const filtro = params.get("filtro");
        console.log(filtro);
        setSelectedFilter(filtro || "ALL");
        
    }, [])
    
    useEffect(() => {
        // Precargar las imágenes de product.imghover
        products.forEach((product) => {
          const img = new Image();
          img.src = product.imghover;
        });
      }, [products]);



  return (
    <div className=" pb-20 mt-10" >
        <div className="flex justify-between items-center mr-8 ml-8">
            <h1 className=" pb-5 md:pt-15 text-center text-sm font-semibold text-black">{t("shop.title")}</h1>
            <button className=" mb-10 md:pt-15 text-center text-sm font-semibold text-black underline" onClick={toggleDropdown2}>{t("shop.filters")} ↓</button>
            
        </div>

        <div>
        {isOpen2 && (
            <div className="h-screen dropdown-menu-2">
              

              <div className="">

                <div className="pb-4 pt-4 mr-8 ml-8 flex justify-between items-center ">
                  <p className="flex-start text-sm">{t("shop.filterby")} </p>

                  <div className="flex md:flex-wrap justify-between items-center ml-8 mr-8 ">  
                    <span className="items-center flex justify-between text-sm font-light">
                      <br />
                      <input name="filters" type="radio" value="ALL" checked={selectedFilter == "ALL"} onChange={() => handleProductFilter("ALL")} />{t("shop.all")}
                    </span>
                    <span className="items-center flex justify-between text-sm font-light">
                      <br className=""/>
                      <input className="ml-4" name="filters" type="radio" value="hoddie" checked={selectedFilter == "hoddie"} onChange={() => handleProductFilter("hoddie")} />{t("shop.hoodies")}
                    </span>
                    <span className="items-center flex justify-between text-sm font-light">
                      <br />
                      <input className="ml-4" name="filters" type="radio" value="t-shirts" checked={selectedFilter == "t-shirts"} onChange={() => handleProductFilter("t-shirts")} />{t("shop.tshirts")}
                    </span>
                    <span className="items-center flex justify-between text-sm font-light">
                      <br />
                      <input className="ml-4" name="filters" type="radio" value="pants" checked={selectedFilter == "pants"} onChange={() => handleProductFilter("pants")}/>{t("shop.pants")}
                    </span>
                    <span className="items-center flex justify-between text-sm font-light">
                      <br />
                      <input className="ml-4" name="filters" type="radio" value="moreless" checked={selectedFilter == "moreless"} onChange={() => handleProductFilter("moreless")} />{t("shop.moreless")}
                    </span>
                    <span className="items-center flex justify-between text-sm font-light">
                      <br />
                      <input className="ml-4" name="filters" type="radio" value="lessmore" checked={selectedFilter == "lessmore"} onChange={() => handleProductFilter("lessmore")} />{t("shop.lessmore")}
                    </span>
                  </div>




                  <button className="dropdown-close-button-2 font-bold flex-end" onClick={toggleDropdown2}>X</button>
                </div>


              </div>
            </div>
            )}
        </div>
        

        <div className="grid grid-cols-4 md:grid-cols-1 md:grid-flow-row md:grid-rows-4 lg:grid-cols-2  w-screen justify-items-center justify-content-center mt-6 md:mt-6">

          {products && (
            <>
              {selectedFilter === "ALL" && products.map((product, i) => (
                <div key={i} className="md:mb-4">
                  <a href="#" onClick={() => handleProductClick(product)}>
                    <img
                      className="size-bestsellers md:h-80 md:w-80 items-center text-center"
                      src={hoveredProduct === product ? product.imghover : product.img}
                      onMouseEnter={() => handleMouseEnter(product)}
                      onMouseLeave={handleMouseLeave}
                      alt=""
                    />
                  </a>
                  <div className="flex justify-center text-black text-xs mt-4 font-semibold mb-4">
                    {product.name} | <span className="font-light text">${product.price}</span>
                  </div>
                </div>
              ))}


              {selectedFilter === "hoddie" && products.filter((product) => product.type === "hoddie").map((product, i) => (
                <div key={i} className="md:mb-4">
                  <a href="#" onClick={() => handleProductClick(product)}>
                    <img
                      className="size-bestsellers md:h-80 md:w-80 items-center text-center"
                      src={hoveredProduct === product ? product.imghover : product.img}
                      onMouseEnter={() => handleMouseEnter(product)}
                      onMouseLeave={handleMouseLeave}
                      alt=""
                    />
                  </a>
                  <div className="flex justify-center text-black text-xs mt-4 font-semibold">
                    {product.name} | <span className="font-light text">${product.price}</span>
                  </div>
                </div>
              ))}

              {selectedFilter === "t-shirts" && products.filter((product) => product.type === "tshirt").map((product, i) => (
                <div key={i} className="md:mb-4">
                  <a href="#" onClick={() => handleProductClick(product)}>
                    <img
                      className="size-bestsellers md:h-80 md:w-80 items-center text-center"
                      src={hoveredProduct === product ? product.imghover : product.img}
                      onMouseEnter={() => handleMouseEnter(product)}
                      onMouseLeave={handleMouseLeave}
                      alt=""
                    />
                  </a>
                  <div className="flex justify-center text-black text-xs mt-4 font-semibold">
                    {product.name} | <span className="font-light text">${product.price}</span>
                  </div>
                </div>
              ))}

              {selectedFilter === "pants" && products.filter((product) => product.type === "pants").map((product, i) => (
                <div key={i} className="md:mb-4">
                  <a href="#" onClick={() => handleProductClick(product)}>
                    <img
                      className="size-bestsellers md:h-80 md:w-80 items-center text-center"
                      src={hoveredProduct === product ? product.imghover : product.img}
                      onMouseEnter={() => handleMouseEnter(product)}
                      onMouseLeave={handleMouseLeave}
                      alt=""
                    />
                  </a>
                  <div className="flex justify-center text-black text-xs mt-4 font-semibold">
                    {product.name} | <span className="font-light text">${product.price}</span>
                  </div>
                </div>
              ))}

              {selectedFilter === "moreless" && products
                .sort((a, b) => b.price - a.price) // Ordenar por precio de mayor a menor
                .map((product, i) => (
                  <div key={i} className="md:mb-4">
                    <a href="#" onClick={() => handleProductClick(product)}>
                      <img
                        className="size-bestsellers md:h-80 md:w-80 items-center text-center"
                        src={hoveredProduct === product ? product.imghover : product.img}
                        onMouseEnter={() => handleMouseEnter(product)}
                        onMouseLeave={handleMouseLeave}
                        alt=""
                      />
                    </a>
                    <div className="flex justify-center text-black text-xs mt-4 font-semibold">
                      {product.name} | <span className="font-light text">${product.price}</span>
                    </div>
                  </div>
                ))}

                {selectedFilter === "lessmore" && products
                  .sort((a, b) => a.price - b.price) // Ordenar por precio de menor a mayor
                  .map((product, i) => (
                    <div key={i} className="md:mb-4">
                      <a href="#" onClick={() => handleProductClick(product)}>
                        <img
                          className="size-bestsellers md:h-80 md:w-80 items-center text-center"
                          src={hoveredProduct === product ? product.imghover : product.img}
                          onMouseEnter={() => handleMouseEnter(product)}
                          onMouseLeave={handleMouseLeave}
                          alt=""
                        />
                      </a>
                      <div className="flex justify-center text-black text-xs mt-4 font-semibold">
                        {product.name} | <span className="font-light text">${product.price}</span>
                      </div>
                    </div>
                  ))}
            </>
          )}


 
        </div>
        
    </div>
  );
}

export default Shop;
