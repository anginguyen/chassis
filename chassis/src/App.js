import { Routes, Route } from 'react-router-dom';
import Nav from './js/Nav';
import Shop from './js/Shop';
import './App.css';
import home_icon from "./img/home-icon.svg";
import cart_icon from "./img/cart-icon.svg";
import orders_icon from "./img/orders-icon.svg";

const routes = [
  {
    name: "Home",
    path: "/",
    icon: home_icon
  },
  {
    name: "Shop",
    path: "/shop",
    icon: cart_icon
  },
  {
    name: "Orders",
    path: "/orders",
    icon: orders_icon
  }
]

function App() {
  return (
    <>
      <Nav routes={routes} />

      <Routes>
        {routes.map((route) =>
          <Route path={route.path} element={<Shop />} />
        )}
      </Routes>

      {/* <Cart items={items} /> */}
    </>
  );
}

export default App;
