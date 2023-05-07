import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import GoodsList from "../GoodsList/GoodsList";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";

function App() {
  const [orders, setOrders] = useState([]);

  function addToCart(item) {
    setOrders([...orders, item]);
  }

  return (
    <div className="app">
      <Header items={orders} />
      <Routes>
        <Route path="/" element={<GoodsList addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart items={orders} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
