import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import CardList from "../../components/CardList/CardList";
import HeaderBar from "../HeaderBar/HeaderBar";
import ActionButtons from "../../components/ActionButtons/ActionButtons";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";
import { useState, useEffect } from "react";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";

function TarotFortuneTeller() {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [reloadCount, setReloadCount] = useState(0);

  useEffect(() => {
    if (!hasVisited) {
      setIsModalOpen(true);
      setHasVisited(true);
    }
  }, [hasVisited]);

  const handleShuffleConfirm = () => {
    setShowCards(true);
    setIsModalOpen(false);
  };

  const handleRefresh = () => {
    if (!isUserLoggedIn) {
      if (reloadCount < 5) {
        setReloadCount(reloadCount + 1);
        setShowCards(false);
        setTimeout(() => setShowCards(true), 100);
      } else {
        setIsModalOpen(true);
      }
    } else {
      setShowCards(false);
      setTimeout(() => setShowCards(true), 100);
    }
  };

  return (
    <div>
      <HeaderBar />
      <LanguageSwitcher />
      <PageNavigation />
      <h1>{t("welcome")}</h1>
      {showCards && <CardList numberOfCards={3} />}
      <ActionButtons onRefresh={handleRefresh} isUserLoggedIn={isUserLoggedIn} reloadCount={reloadCount} />
      <ConfirmationModal 
        isOpen={isModalOpen} 
        onRequestClose={() => setIsModalOpen(false)} 
        onConfirm={handleShuffleConfirm} 
      />
    </div>
  );
}

export default TarotFortuneTeller;
