import "./style/App.scss";
import buy from "./assets/buy.svg";
import card from "./assets/card.png";
import logo from "./assets/logo.png";
import pic from "./assets/pic.png";

function App() {

  return (
    <div className="container">
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <button> Корзина
          <img src={buy} alt="buy" />
        </button>
      </header>
      <main>
        <div className="main__content">
        <h1>ВИРТУАЛЬНАЯ РЕАЛЬНОСТЬ БЕЗ ПРОВОДОВ</h1>
        <p>Лучшее, что случалось с виртуальным миром в реальности. Новый компактный шлем без проводов и дорогих комьютеров.</p>
        <button>Купить <img src={card} alt="card" /></button>
        </div>
        <div className="main__pic"><img className="main__pic__img" src={pic} alt="boy" /></div>
      </main>
    </div>
  );
}

export default App;
