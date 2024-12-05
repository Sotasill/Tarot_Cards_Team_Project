
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import CardList from "../../components/CardList/CardList";
import HeaderBar from "../HeaderBar/HeaderBar";
import ActionButtons from "../../components/ActionButtons/ActionButtons";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";

function TarotFortuneTeller() {
  const isUserLoggedIn = useSelector((state) => state.isUserLoggedIn);
  const { t } = useTranslation();

  return (
    <div>
      <HeaderBar />
      <LanguageSwitcher />
      <PageNavigation />
      <CardList />
      <ActionButtons onRefresh={() => {}} isUserLoggedIn={isUserLoggedIn} />
      <h1>{t("welcome")}</h1>
    </div>
  );
}

export default TarotFortuneTeller;
