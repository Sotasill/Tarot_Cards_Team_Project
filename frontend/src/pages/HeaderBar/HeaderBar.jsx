import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation
import css from "./HeaderBar.module.css";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";

function HeaderBar() {
  const { t } = useTranslation(); // Получаем функцию перевода

  return (
    <div className={css.HeaderWrapper}>
      <nav className={css.NavWrapper}>
        <ul className={css.NavAbout}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? css.active : "")}
            >
              {t("logo")} {/* Используем функцию перевода */}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? css.active : "")}
            >
              {t("about")} {/* Используем функцию перевода */}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? css.active : "")}
            >
              {t("login")} {/* Используем функцию перевода */}
            </NavLink>
          </li>
        </ul>
        <ul className={css.NavAboutSocial}>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              X
            </a>
          </li>
          <li className={css.LanguageSwitcher}>
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderBar;
