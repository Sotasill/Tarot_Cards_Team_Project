import { useState } from "react";
import CardSearch from "../../components/CardSearch/CardSearch";
import Card from "../../components/Card/Card"; // Импортируйте компонент карты
import css from "./CardMeaning.module.css";
import HeaderBar from "../HeaderBar/HeaderBar";
import PageNavigation from "../../components/PageNavigation/PageNavigation";

const CardMeaning = () => {
  const [foundCard, setFoundCard] = useState(null); // Для хранения найденной карты

  const handleCardFound = (card) => {
    setFoundCard(card); // Обновляем состояние найденной карты
  };

  return (
    <>
      <HeaderBar />
      <PageNavigation />
      <div className={css.cardMeaningWrapper}>
        <CardSearch onCardFound={handleCardFound} />
        {foundCard && (
          <div className={css.cardDisplay}>
            <Card card={foundCard} /> {/* Отображаем найденную карту */}
          </div>
        )}
      </div>
    </>
  );
};

export default CardMeaning;
