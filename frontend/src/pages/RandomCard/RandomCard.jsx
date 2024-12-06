import { useTranslation } from "react-i18next";
import CardList from "../../components/CardList/CardList";
import HeaderBar from "../HeaderBar/HeaderBar";

function RandomCard() {
  const { t } = useTranslation();

  return (
    <div>
      <HeaderBar />
      <h1>{t("randomCard")}</h1>
      <CardList numberOfCards={1} /> {/* Show 1 card for Random Card Prediction */}
    </div>
  );
}

export default RandomCard;
