import { useNavigate } from "react-router-dom";
import css from "./ActionButtons.module.css";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

const ActionButtons = ({ onRefresh, isUserLoggedIn }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={css.buttonsWrapper}>
      <button onClick={() => navigate(-1)} className={css.button}>
        {t("goBack")}
      </button>
      <button onClick={onRefresh} className={css.button}>
        {t("reload")}
      </button>
      <button disabled={!isUserLoggedIn} className={css.button}>
        {t("save")}
      </button>
    </div>
  );
};

ActionButtons.propTypes = {
  onRefresh: PropTypes.func.isRequired,
  isUserLoggedIn: PropTypes.bool.isRequired,
};

export default ActionButtons;