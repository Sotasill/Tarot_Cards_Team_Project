import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en"; // Импортируем переводы на английском
import ua from "./ua"; // Импортируем переводы на украинском

i18n
  .use(initReactI18next) // передаем i18n в react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      ua: {
        translation: ua,
      },
    },
    lng: "en", // язык по умолчанию
    fallbackLng: "en", // язык по умолчанию, если перевод не найден
    interpolation: {
      escapeValue: false, // не экранировать значения
    },
  });

export default i18n;
