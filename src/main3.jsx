import React from 'react'
import ReactDOM from 'react-dom/client'
import App3 from './App3'
import "./index.css";
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

i18next.init({
  interpolation: { escapeValue: false},
  lng: "en",
  resources : {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root3')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App3 />
    </I18nextProvider>
  </React.StrictMode>,
)