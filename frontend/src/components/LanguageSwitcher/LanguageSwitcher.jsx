
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { setLanguage } from "../../redux/language/languageSlice";

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const currentLanguage = useSelector((state) => state.language.currentLanguage);

  const changeLanguage = (lng) => {
    dispatch(setLanguage(lng));
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button
        onClick={() => changeLanguage("en")}
        disabled={currentLanguage === "en"}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("ua")}
        disabled={currentLanguage === "ua"}
      >
        Українська
      </button>
    </div>
  );
};

export default LanguageSwitcher;
