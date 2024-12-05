import { useState } from "react";
import css from "./Prompt.module.css";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation

const Prompt = ({ onShuffle }) => {
  const { t } = useTranslation(); // Получаем функцию перевода
  const [question, setQuestion] = useState("");

  const handleSubmit = () => {
    if (question.trim()) {
      onShuffle(question);
      setQuestion(""); // Очистка поля ввода после отправки
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className={css.PromptContainer}>
      <h2>{t("askYourQuestion")}</h2> {/* Используем ключ для перевода */}
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyPress={handleKeyPress} // Обработчик нажатия клавиш
        placeholder={t("enterYourQuestion")} // Используем ключ для перевода
      />
      <button onClick={handleSubmit}>{t("shuffleCards")}</button> {/* Используем ключ для перевода */}
    </div>
  );
};

Prompt.propTypes = {
  onShuffle: PropTypes.func.isRequired,
};

export default Prompt;
