import { NavLink } from "react-router-dom";
import css from "./PageNavigation.module.css";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation

const PageNavigation = () => {
  const { t } = useTranslation(); // Получаем функцию перевода

  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li>
          <NavLink
            to="/tarot-fortune-teller"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            {t("fortunTeller")} {/* Используем функцию перевода */}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/random-card-prediction"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            {t("randomCard")} {/* Используем функцию перевода */}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/card-meaning"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            {t("cardMeaning")} {/* Используем функцию перевода */}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNavigation;
