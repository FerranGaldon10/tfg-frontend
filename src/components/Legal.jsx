import React from "react";
import { useTranslation } from "react-i18next";


function Legal() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="mt-40 pl-32 pr-32 md:pl-4 md:pr-4">
        <h1 className="text-4xl font-black text-center p-8 mb-20">{t("legal.titulo")}</h1>

        <div className="mb-24">
            <h2 className="font-bold text-3xl mb-6">{t("legal.datos")}</h2>
            <p className="text-sm">{t("legal.p1")}</p>
        </div>

        <div className="mb-24">
            <h2 className="font-bold text-3xl mb-6">{t("legal.condiciones")}</h2>

            <ul className="ml-10 mb-6 text-sm"><li type="disc">{t("legal.usuarios")}</li></ul>
            <p className="text-sm mb-6">{t("legal.p2")}</p>

            <ul className="ml-10 mb-6 text-sm"><li type="disc">{t("legal.propiedad")}</li></ul>
            <p className="text-sm mb-6">{t("legal.p3")}</p>
            <p className="text-sm mb-6">{t("legal.p4")}</p>

            <ul className="ml-10 mb-6 text-sm"><li type="disc">{t("legal.exclusion")}</li></ul>
            <p className="text-sm mb-6">{t("legal.p5")}</p>

            <ul className="ml-10 mb-6 text-sm"><li type="disc">{t("legal.modificaciones")}</li></ul>
            <p className="text-sm mb-6">{t("legal.p6")}</p>

            <ul className="ml-10 mb-6 text-sm"><li type="disc">{t("legal.enlaces")}</li></ul>
            <p className="text-sm mb-6">{t("legal.p7")}</p>

            <ul className="ml-10 mb-6 text-sm"><li type="disc">{t("legal.derecho")}</li></ul>
            <p className="text-sm mb-6">{t("legal.p8")}</p>

            <ul className="ml-10 mb-6 text-sm"><li type="disc">{t("legal.generalidades")}</li></ul>
            <p className="text-sm mb-6">{t("legal.p9")}</p>

            <ul className="ml-10 mb-6 text-sm"><li type="disc">{t("legal.modificacion")}</li></ul>
            <p className="text-sm mb-6">{t("legal.p10")}</p>

            <ul className="ml-10 mb-6 text-sm"><li type="disc">{t("legal.legislacion")}</li></ul>
            <p className="text-sm mb-6">{t("legal.p11")}</p>

        </div>
    </div>
  );
}

export default Legal;
