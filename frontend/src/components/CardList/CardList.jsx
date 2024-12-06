import { useEffect, useState } from "react";
import cardData from "../../tarot-images.json";
import Card from "../Card/Card";
import css from "./CardList.module.css";
import { fetchPredictionFromAI } from "../../utils/api";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

const CardList = ({ numberOfCards = 3 }) => {
  const [cards, setCards] = useState([]);
  const [prediction, setPrediction] = useState("");
  const { t } = useTranslation();

  const getRandomCards = (allCards, count) => {
    const shuffled = allCards.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    const randomCards = getRandomCards(cardData.cards, numberOfCards);
    setCards(randomCards);
    fetchPredictionFromAI(randomCards)
      .then((prediction) => setPrediction(prediction))
      .catch((error) => console.error(error));
  }, [numberOfCards]);

  return (
    <div className={css.CardListWrapper}>
      <div className={css.CardList}>
        {cards.map((card) => (
          <Card key={card.name} card={card} />
        ))}
      </div>
      <div className="prediction">
        <h2>{t("prediction")}</h2>
        <p>{prediction}</p>
      </div>
    </div>
  );
};

CardList.propTypes = {
  numberOfCards: PropTypes.number,
};

export default CardList;
