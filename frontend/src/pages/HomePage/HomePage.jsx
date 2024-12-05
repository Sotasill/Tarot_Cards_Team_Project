import HeaderBar from "../HeaderBar/HeaderBar";
import { useState, useEffect } from "react";

import LanguageModal from "../../components/LanguageModal/LanguageModal";

import i18n from 'i18next';

import PageNavigation from "../../components/PageNavigation/PageNavigation";
import HomePageNavigation from "../../components/HomePageNavigation/HomePageNavigation";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Проверяем, если язык не выбран, открываем модальное окно
    if (!localStorage.getItem("language")) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false); // Если язык есть, модальное окно не открываем
    }
  }, []);

  return (
    <div>
      <HeaderBar />
      <h1>{i18n.language.language === 'en' ? 'Welcome' : 'Добро пожаловать'}</h1> {/* Используем i18n для перевода заголовка */}
      <PageNavigation />
      <HomePageNavigation />
      <LanguageModal isOpen={isModalOpen} onRequestClose={handleModalClose} />
    </div>
  );
}

export default HomePage;
