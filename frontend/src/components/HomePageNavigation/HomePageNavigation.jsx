import { NavLink } from "react-router-dom";
import css from "./HomePageNavigation.module.css";
import { useTranslation } from "react-i18next";

const HomePageNavigation = () => {
  const { t } = useTranslation();

  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink
            to="/tarot-fortune-teller"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            <img className={css.navImage} src="/public/cards/c02.jpg" alt="" />
            {t("fortunTeller")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/random-card-prediction"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            <img className={css.navImage} src="/public/cards/c02.jpg" alt="" />
            {t("randomCard")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/card-meaning"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            <img className={css.navImage} src="/public/cards/c02.jpg" alt="" />
            {t("cardMeaning")}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HomePageNavigation;
