import React from "react";
import { useTranslation } from "react-i18next";


function Privacy() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="mt-40 pl-32 pr-32 md:pl-4 md:pr-4">
        <h1 className="text-4xl font-black text-center p-8 mb-20">{t("privacy.titulo")}</h1>

        <div className="mb-20">
            <h2 className="font-bold text-3xl mb-6">{t("privacy.responsable")}</h2>
            <p className="text-sm">{t("privacy.p1")}</p>
            <p className="text-sm">{t("privacy.p2")}</p>
            <p className="text-sm">{t("privacy.p3")}</p>
        </div>

        <div className="mb-20">
            <h2 className="font-bold text-3xl mb-6">{t("privacy.tipo")}</h2>
            <p className="text-sm mb-6">{t("privacy.p4")}</p>
            <div>
                <ul className="ml-10 mb-6 text-sm"><li type="disc">{t("privacy.ul1")}</li></ul>
                <ul className="ml-10 mb-6 text-sm"><li type="disc">{t("privacy.ul2")}</li></ul>
                <ul className="ml-10 mb-6 text-sm"><li type="disc">{t("privacy.ul3")}</li></ul>
                <ul className="ml-10 mb-6 text-sm"><li type="disc">{t("privacy.ul4")}</li></ul>
            </div>
            <p className="text-sm mb-6">{t("privacy.p5")}</p>
            <p className="text-sm mb-6">{t("privacy.p6")}</p>
        </div>

        <div className="mb-20">
            <h2 className="font-bold text-3xl mb-6">{t("privacy.legitimacion")}</h2>
            <p className="text-sm mb-6">{t("privacy.p7")}</p>

            <ul className="ml-10 mb-6 text-sm font-bold"><li type="disc">{t("privacy.ul5")}</li></ul>
            <p className="text-sm mb-6">{t("privacy.p8")}</p>

            <ul className="ml-10 mb-6 text-sm font-bold"><li type="disc">{t("privacy.ul6")}</li></ul>
            <p className="text-sm mb-6">{t("privacy.p9")}</p>

            <ul className="ml-10 mb-6 text-sm font-bold"><li type="disc">{t("privacy.ul7")}</li></ul>
            <p className="text-sm mb-6">{t("privacy.p10")}</p>

            <ul className="ml-10 mb-6 text-sm font-bold"><li type="disc">{t("privacy.ul8")}</li></ul>
            <p className="text-sm mb-6">{t("privacy.p11")}</p>

            <ul className="ml-10 mb-6 text-sm font-bold"><li type="disc">{t("privacy.ul9")}</li></ul>
            <p className="text-sm mb-6">{t("privacy.p12")}</p>

            <ul className="ml-10 mb-6 text-sm font-bold"><li type="disc">{t("privacy.ul10")}</li></ul>
            <p className="text-sm mb-6">{t("privacy.p13")}</p>
        </div>

        <div className="mb-20">
            <h2 className="font-bold text-3xl mb-6">{t("privacy.datos")}</h2>
            <p className="text-sm mb-6">{t("privacy.p14")}</p>
            <div>
                <ul className="ml-10 text-sm"><li type="disc">{t("privacy.ul11")}</li></ul>
                <ul className="ml-10 text-sm"><li type="disc">{t("privacy.ul12")}</li></ul>
                <ul className="ml-10 text-sm"><li type="disc">{t("privacy.ul13")}</li></ul>
                <ul className="ml-10 text-sm"><li type="disc">{t("privacy.ul14")}</li></ul>
                <ul className="ml-10 text-sm"><li type="disc">{t("privacy.ul15")}</li></ul>
            </div>
        </div>

        <div className="mb-20">
            <h2 className="font-bold text-3xl mb-6">{t("privacy.modificaciones")}</h2>
            <p className="text-sm mb-6">{t("privacy.p15")}</p>
            <p className="text-sm mb-6">{t("privacy.p16")}</p>
        </div>

        
    </div>
  );
}

export default Privacy;
