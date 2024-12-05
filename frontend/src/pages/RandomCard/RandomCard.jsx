import CardList from "../../components/CardList/CardList";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import HeaderBar from "../HeaderBar/HeaderBar";
import ActionButtons from "../../components/ActionButtons/ActionButtons";
import { useState } from "react";

function TarotFortuneTeller() {
  const [refreshKey, setRefreshKey] = useState(0); // Ключ для перерисовки компонента

  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1); // Увеличиваем ключ для ререндеринга
  };

  const isUserLoggedIn = false; // Определите статус авторизации пользователя

  return (
    <div>
      <HeaderBar />
      <PageNavigation />
      <CardList numberOfCards={1} key={refreshKey} />{" "}
      {/* Передаем ключ для перерисовки */}
      <ActionButtons
        onRefresh={handleRefresh}
        isUserLoggedIn={isUserLoggedIn}
      />
    </div>
  );
}

export default TarotFortuneTeller;
