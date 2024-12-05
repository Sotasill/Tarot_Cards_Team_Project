import { useState } from "react";
import cardData from "../../tarot-images.json"; // Импортируйте данные карт
import css from "./CardSearch.module.css"; // Импортируйте стили
import PropTypes from 'prop-types'; // Import PropTypes

const CardSearch = ({ onCardFound }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    const term = searchTerm.toLowerCase();

    const foundCard = cardData.cards.find((card) => {
      const cardName = card.name?.toLowerCase(); // Проверка на существование
      const cardDescription = card.description?.toLowerCase(); // Проверка на существование
      const cardKeywords =
        card.keywords?.map((keyword) => keyword.toLowerCase()) || []; // Проверка на существование

      return (
        cardName?.includes(term) ||
        cardDescription?.includes(term) ||
        cardKeywords.some((keyword) => keyword.includes(term))
      );
    });

    // П��редаем найденную карту в родительский компонент
    onCardFound(foundCard || null); // Если карта не найдена, передаем null
  };

  return (
    <form onSubmit={handleSearch} className={css.searchWrapper}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search card by name, keywords, or description"
        className={css.searchInput}
      />
      <button type="submit" className={css.searchButton}>
        Search
      </button>
    </form>
  );
};

// Define prop types
CardSearch.propTypes = {
  onCardFound: PropTypes.func.isRequired, // Validate that onCardFound is a required function
};

export default CardSearch;
