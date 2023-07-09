import { useState } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import { useTranslation } from "react-i18next";

function Footer() {
  const [t, i18n] = useTranslation("global");
  const [email, setEmail] = useState('');
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    // axios.post('http://localhost:3000/subscribe', { email })
    axios.post('https://tfg-backend-camals.up.railway.app/subscribe', { email })
      .then((response) => {
        setPopupMessage(response.data.message);
        setPopupOpen(true);
        setEmail('');
      })
      .catch((error) => {
        setPopupMessage(error.response.data.message);
        setPopupOpen(true);
      });
  };



  return (
    <div className="grid grid-cols-3 justify-items-center justify-content-center  md:grid-cols-1 md:grid-rows-3 md:justify-items-center md:justify-content-center pr-20 pl-20 p-10 bg-black">
        <div>
            <div className="text-white md:text-center font-bold mb-3 mt-3 text-sm">{t("footer.title")}</div>
            <div className="font-extralight text-white md:text-center text-xs">camalsproject@gmail.com</div>
            <div className="flex gap-3 mt-3">
                {/* Instagram */}
                <a className='underline3' href=""><img className="w-6 h-6" src="/instagram.png" alt="" /></a>
                {/* Twitter */}
                <a className='underline3' href=""><img className="w-6 h-6" src="/twitter.png" alt="" /></a>
                {/* Youtube */}
                <a className='underline3' href=""><img className="w-6 h-6" src="/youtube.png" alt="" /></a>
                {/* Tik-Tok */}
                <a className='underline3' href=""><img className="w-6 h-6" src="/tik-tok.png" alt="" /></a>
            </div>
        </div>

        <div>
            <div className="text-white font-medium mb-3 mt-3 text-xs md:text-center">{t("footer.about")}</div>
            <div className="font-extralight text-white text-xs text-center cursor-pointer flex flex-col">
                <a href="/pages/App6.html" className='mb-2 underline3 '>{t("footer.who")}</a>
                <a href="/pages/App7.html" className='mb-2 underline3'>{t("footer.legal")}</a>
                <a href="/pages/App8.html" className='mb-2 underline3'>{t("footer.privacy")}</a>
            </div>
        </div>

        <div>
            <div className="text-white font-medium text-center mb-3 mt-3 text-xs md:text-center">{t("footer.join")}</div>
            <div>
                <div className="font-extralight text-white text-xs md:text-center">{t("footer.joindesc")}</div>
                <div className="flex mt-2 items-center justify-center">
                    <input type="email" placeholder={t("footer.placeholder")} className="mr-2 border-2 border-gray-300 rounded-md px-3 py-2 text-xs" value={email} onChange={handleEmailChange}></input>
                    <button className="bg-cyan-500 hover:bg-cyan-600 h-9 text-white font-bold py-1 px-3 text-xs rounded" onClick={handleSubscribe}>{t("footer.button")}</button>
                    <Popup
                        open = {popupOpen}
                        onClose={() => setPopupOpen(false)}
                        closeOnDocumentClick = {false}
                    >   <div className='bg-cyan-500 relative p-5 rounded'>
                            <button className='absolute top-0 right-0 m-2 mr-4 text-white' onClick={() => setPopupOpen(false)}>X</button>
                            <div className='text-center font-bold m-3 mt-5 text-white'>{popupMessage}</div>
                            
                        </div>
                    </Popup>
                </div>

            </div>
        </div>

    </div>
  );
}

export default Footer;
