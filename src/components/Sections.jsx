import React from "react";
import { useTranslation } from "react-i18next";

function Sections() {

  const [t, i18n] = useTranslation("global");

  const handleOpenSeccionHoddie = () => {
    const filtro = "hoddie";
    const url = `/pages/App2.html?filtro=${filtro}`;
    window.location.assign(url);
  };

  const handleOpenSeccionTshirt = () => {
    const filtro = "t-shirts";
    const url = `/pages/App2.html?filtro=${filtro}`;
    window.location.assign(url);
  };

  const handleOpenSeccionAllprod = () => {
    const url = `/pages/App2.html`;
    window.location.assign(url);
  };


  return (
    <div className="grid grid-cols-3 md:grid-cols-1 md:grid-flow-row md:grid-rows-3 w-screen z-10">
      
      <button onClick={handleOpenSeccionTshirt} className="bg-tshirts m-4 bg-cover bg-center flex justify-center items-center text-white font-bold text-xl hover:brightness-90 saturate-100 transition-all duration-500">
        {t("sections.tshirts")}
      </button>

      <button onClick={handleOpenSeccionHoddie} className="bg-hoddies m-4  bg-cover bg-center flex justify-center items-center text-black font-bold text-xl hover:brightness-90 saturate-100 transition-all duration-500 z-10">
        {t("sections.hoodies")}
      </button>

      <button onClick={handleOpenSeccionAllprod} className="bg-allprod m-4 bg-cover bg-center flex justify-center items-center text-white font-bold text-xl hover:brightness-90 saturate-100 transition-all duration-500">
        {t("sections.allprod")}
      </button>

    </div>
  );
}

export default Sections;
