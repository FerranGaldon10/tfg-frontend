import React from "react";
import { useTranslation } from "react-i18next";

function Colection() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="w-screen h-screen bg-cover bg-center flex flex-col items-center justify-center relative overflow-hidden text-center mx-auto my-auto p-0 pb-6" style={{width: "98vw", height: "100vh"}}>

      <video className="object-cover h-full w-full absolute top-0 left-0" playsInline autoPlay loop muted poster="">
        <source src="videos/Espacio-Background.mp4" type="video/mp4" />
      </video>

      <div className="relative">
        <p className="text-white font-medium text-2xl mb-4">INFINITY COLLECTION</p>
        <button className="text-white border px-8 py-3 text-sm font-medium hover:bg-cyan-600 transition duration-300"><a href="/pages/App4.html">{t("collection.button")}</a></button>
      </div>
    </div>
  );
}

export default Colection;


