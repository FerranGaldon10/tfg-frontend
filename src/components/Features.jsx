import React from "react";
import { useTranslation } from "react-i18next";

function Features() {

  const [t, i18n] = useTranslation("global");

  return (
   
    <div className="grid grid-cols-3 w-screen justify-items-center justify-content-center pt-10 pb-10 pr-3 md:pr-0 md:pl-0 pl-3 bg-black md:grid-cols-1 md:grid-flow-row md:grid-rows-3">
        <div className="m-2 md:m-4 w-1/3 md:w-2/3 text-center">
            <img className="w-10 h-10 mx-auto filter grayscale invert" src="/express-delivery.png" alt="" />
            <div className="text-white font-medium m-3 text-xs ">{t("features.delivery")}</div>
            <div className="font-extralight text-white text-xs">{t("features.deliverydesc")}</div>
        </div>
        <div className="m-2 w-1/3 md:m-4  md:w-2/3 text-center">
            <img className="w-10 h-10 mx-auto filter grayscale invert" src="/regalo.png" alt="" />
            <div className="text-white font-medium m-3 text-xs">{t("features.packaging")}</div>
            <div className="font-extralight text-white text-xs ">{t("features.packagingdesc")}</div>
        </div>
        <div className="m-2 w-1/3 md:m-4  md:w-2/3 text-center">
            <img className="w-10 h-10 mx-auto filter grayscale invert" src="/tarjeta-de-credito.png" alt="" />
            <div className="text-white font-medium m-3 text-xs">{t("features.payment")}</div>
            <div className="font-extralight text-white text-xs">{t("features.paymentdesc")}</div>
        </div>
    </div>

  );
}

export default Features;
