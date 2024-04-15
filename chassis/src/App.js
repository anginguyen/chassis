import logo from './logo.svg';
import Card from './Card';
import './App.css';

const cards = [
  {
    img: "Rectangle 36.png",
    name: "ACDelco Iridium Spark Plug",
    price: "10"
  },
  {
    img: "logo.svg",
    name: "Test Name 2",
    price: "10"
  },
  {
    img: "logo.svg",
    name: "Test Name 3",
    price: "10"
  },
  {
    img: "logo.svg",
    name: "Test Name 3",
    price: "10"
  },
  {
    img: "logo.svg",
    name: "Test Name 3",
    price: "10"
  },
  {
    img: "logo.svg",
    name: "Test Name 3",
    price: "10"
  },
]

function App() {
  return (
    <>
      <div className="red-bar"></div>{}
      <div className="parts-cards">
        {cards.map((card) =>
          <Card img={card.img} name={card.name} price={card.price} />
        )}
      </div>
    </>
  );
}

export default App;
