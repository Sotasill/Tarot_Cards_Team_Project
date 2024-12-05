import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tarot-fortune-teller"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            Tarot Fortune Teller
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/random-card-prediction"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            Random Card Prediction
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/card-meaning"
            className={({ isActive }) => (isActive ? css.active : "")}
          >
            Card Meaning
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
