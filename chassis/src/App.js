import { Routes, Route } from 'react-router-dom';
import Nav from './js/Nav';
import Card from './components/js/Card';
import Rectangle36 from './img/Rectangle 36.png';
import './App.css';
import OrderStatus from './js/OrderStatus';
import Cart from './js/Cart';

const cards = [
  {
    img: Rectangle36,
    name: "ACDelco Iridium Spark Plug",
    price: "10"
  },
  {
    img: Rectangle36,
    name: "ACDelco Iridium Spark Plug",
    price: "10"
  },
  {
    img: Rectangle36,
    name: "ACDelco Iridium Spark Plug",
    price: "10"
  },
  {
    img: Rectangle36,
    name: "ACDelco Iridium Spark Plug",
    price: "10"
  },
  {
    img: Rectangle36,
    name: "ACDelco Iridium Spark Plug",
    price: "10"
  },
  {
    img: Rectangle36,
    name: "ACDelco Iridium Spark Plug",
    price: "10"
  },
]

const routes = [
  {
    name: "Home",
    path: "/",
    icon: require("./img/home-icon.png")
  },
  {
    name: "Shop",
    path: "/shop",
    icon: require("./img/cart-icon.png")
  },
  {
    name: "Orders",
    path: "/orders",
    icon: require("./img/orders-icon.png")
  }
]

const items = [
  {
    name: "ACDelco Iridium Spark Plug",
    img: require("./img/Rectangle 36.png"),
    price: "$11.99",
    quantity: 1
  },
  {
    name: "ACDelco Iridium Spark Plug Blah Blah Blah Blah",
    img: require("./img/Rectangle 36.png"),
    price: "$11.99",
    quantity: 2
  },
  {
    name: "ACDelco Iridium Spark Plug",
    img: require("./img/Rectangle 36.png"),
    price: "$11.99",
    quantity: 4
  },
  {
    name: "ACDelco Iridium Spark Plug",
    img: require("./img/Rectangle 36.png"),
    price: "$11.99",
    quantity: 4
  },
  {
    name: "ACDelco Iridium Spark Plug",
    img: require("./img/Rectangle 36.png"),
    price: "$11.99",
    quantity: 4
  }
]

function App() {
  return (
    <>
      {/* <Nav routes={routes} />

      <Routes>
        {routes.map((route) =>
          <Route path={route.path} element={<OrderStatus />} />
        )}
      </Routes> */}

      <Cart items={items} />
      
      <div className="parts-cards">
        {cards.map((card) =>
          <Card img={card.img} name={card.name} price={card.price} />
        )}
      </div>
    </>
  );
}

export default App;
