import { useState } from 'react';
import { useTranslation } from "react-i18next";

function Contact() {
  const [t, i18n] = useTranslation("global");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const response = await fetch("http://localhost:3000/contacto", {
    const response = await fetch("https://tfg-backend-camals.up.railway.app/contacto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: event.target.nombre.value,
        email: event.target.email.value,
        asunto: event.target.asunto.value,
        mensaje: event.target.mensaje.value,
      }),
    });

    if (response.ok) {
      setShowPopup(true);
    }
  };
  const handlePopupClose = () => {
    setShowPopup(false);
    window.location.reload();
  };

  return (
    <div>
      <div className="grid grid-cols-2 h-auto w-full md:grid-cols-1 md:grid-flow-row md:grid-rows-2">

        <div className="h-auto pr-8 pl-28 md:pr-3 md:pl-3">
            <h1 className="text-5xl font-bold mt-11 mb-7 md:text-3xl md:mb-5 md:mt-9">{t("contact.title")}</h1>

            <p className="text-justify mr-8 text-sm leading-7 md:mr-0 ">{t("contact.description")}</p>

            <hr className="mt-8 mb-8 border-black hrwidth"/>

            <p className="flex mt-4 mb-4 ">
              <img className="w-6 h-6 mr-6" src="/map.png" alt="" />
              <p className="text-sm">{t("contact.ubi")}</p>
            </p>

            <p className="flex mt-4 mb-4">
              <img className="w-6 h-6 mr-6" src="/email.png" alt="" />
              <p className="font-light text-sm text-black opacity-70">camalsproject@gmail.com</p>
            </p>

        </div>

        <div className="h-auto pl-8 pr-28 pt-14 md:pl-3 md:pr-3 md:pt-0">
          {/* <form method="POST" action="http://localhost:3000/contacto"> */}
          <form onSubmit={handleSubmit}>
          <div>
            <p className="text-lg">{t("contact.name")} <span className="text-red-700 font-extralight">*</span></p>
            <input className="w-full h-12 mb-5 p-2 border bg-gray-50" type="text" name="nombre" required/>
          </div>

          <div>
            <p className="text-lg">{t("contact.email")} <span className="text-red-700 font-extralight">*</span></p>
            <input className="w-full h-12 mb-5 p-2 border bg-gray-50" type="text" name="email" required/>
          </div>

          <div>
            <p className="text-lg">{t("contact.subject")} <span className="text-red-700 font-extralight">*</span></p>
            <input className="w-full h-12 mb-5 p-2 border bg-gray-50" type="text" name="asunto" required/>
          </div>

          <div>
            <p className="text-lg">{t("contact.message")} <span className="text-red-700 font-extralight">*</span></p>
            <textarea className="w-full mb-5 p-3 border bg-gray-50" rows="7" cols="80" name="mensaje" placeholder={t("contact.placeholder")} required></textarea>
          </div>

          <button type="submit" className="w-full h-12 bg-black text-gray-100 font-light mb-8">{t("contact.button")}</button>
          </form>
          {showPopup && (
            <div className="fixed z-10 inset-0 flex items-center justify-center">
              <div className='bg-cyan-500 relative p-5 rounded'>
                <button className='absolute top-0 right-0 m-2 mr-4 text-white' onClick={handlePopupClose}>X</button>
                <div className='text-center font-bold m-3 mt-5 text-white'>{t("contact.popup")}</div>   
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Contact;
