import { Provider } from "react-redux";
import store from "../../redux/store/store";
import "../../redux/language/i18n";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "../../pages/HomePage/HomePage";
import About from "../../pages/About/About";
import Login from "../../pages/LoginPage/LoginPage";
import TarotFortuneTeller from "../../pages/TarotFortuneTeller/TarotFortuneTeller";
import RandomCard from "../../pages/RandomCard/RandomCard";
import CardMeaning from "../../pages/CardMeaning/CardMeaning";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tarot-fortune-teller" element={<TarotFortuneTeller />} />
          <Route path="/random-card-prediction" element={<RandomCard />} />
          <Route path="/card-meaning" element={<CardMeaning />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;