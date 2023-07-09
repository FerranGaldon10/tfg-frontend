import React from "react";
import { useTranslation } from "react-i18next";


function About() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="mt-28">
        <h1 className="pt-10 pb-10 md:pt-15 text-center text-sm font-semibold text-black">{t("about.title")}</h1>

        <div className="w-full h-auto flex items-center mb-10 md:flex-none md:grid md:grid-flow-row md:grid-rows-2">
            <div className="h-full w-1/2 md:w-full p-5 md:p-0 flex justify-center items-center">
                <img className="aboutImage1" src="/AboutImage1.JPG" alt="" />
            </div>
            <div className="h-full w-1/2 md:w-full pt-20 md:pt-0 pr-20 md:p-5 flex items-center">
                <div className="flex flex-col justify-center">
                <p className="pb-5 text-sm">{t("about.p1")}</p>
                <p className="text-sm pb-20">{t("about.p12")}</p>

                <p className="text-xl font-light">"street style, elevated"</p>
                </div>
            </div>
        </div>

        <div className="w-full h-auto flex items-center mb-10 md:flex-none md:grid md:grid-flow-row md:grid-rows-2">
            <div className="hidden md:block">
            <div className="h-full w-1/2 md:w-full p-5 md:p-0 flex justify-center items-center ">
                <img className="aboutImage1" src="/AboutImage3.jpg" alt="" />
            </div>
            </div>
            
             <div className="h-full w-1/2 pt-20 pl-20 pr-10 md:w-full md:pt-0 md:p-5 flex items-center">
                <div className="flex flex-col justify-center">
                <p className="pb-5 text-sm">{t("about.p2")}</p>
                <p className="text-sm pb-20">{t("about.p22")}</p>

                <p className="text-xl font-light">"A MOVEMENT"</p>
                </div>
            </div>

            <div className="h-full w-1/2 md:w-full p-5 flex justify-center items-center md:p-0 md:hidden">
                <img className="aboutImage1" src="/AboutImage3.jpg" alt="" />
            </div>
            
        </div>

        <div className="w-full h-auto flex md:flex-none md:grid md:grid-flow-row md:grid-rows-2 items-center mb-10">
            <div className="h-full w-1/2 md:w-full p-0 flex  justify-center items-center">
                <img className="aboutImage1" src="/AboutImage2.jpg" alt="" />
            </div>
            <div className="h-full w-1/2 md:w-full pt-20 md:pt-0 pr-20 md:p-5 flex items-center">
                <div className="flex  flex-col justify-center">
                <p className="pb-5 text-sm">{t("about.p3")}</p>
                <p className="text-sm pb-20">{t("about.p32")}</p>

                <p className="text-xl font-light">"LIFESTYLES"</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
