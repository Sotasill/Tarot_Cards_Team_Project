import PropTypes from "prop-types";
import css from "./Card.module.css";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation

const Card = ({ card }) => {
  const { t } = useTranslation(); // Получаем функцию перевода
  const imgSrc = card.img;

  return (
    <div className={css.card}>
      <h2>{t(card.name)}</h2> {/* Используем функцию перевода для имени карты */}
      <img src={imgSrc} alt={card.name} />
      <p>{t(card.fortune_telling.join(", "))}</p> {/* Переводим предсказания */}
      <p>{t("Keywords")}: {card.keywords.join(", ")}</p> {/* Переводим ключевые слова */}
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    fortune_telling: PropTypes.arrayOf(PropTypes.string).isRequired,
    keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Card;
