import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import GoodsList from "../GoodsList/GoodsList";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";

function App() {
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState({
    priceTotal: orders.reduce((prev, curr) => {
      return prev + curr.totalPrice;
    }, 0),
    totalItems: orders.reduce((prev, curr) => {
      return prev + curr.count;
    }, 0),
  });

  useEffect(() => {
    setTotal({
      priceTotal: orders.reduce((prev, curr) => {
        return prev + curr.totalPrice;
      }, 0),
      totalItems: orders.reduce((prev, curr) => {
        return prev + curr.count;
      }, 0),
    });
  }, [orders]);

  function addToCart(item) {
    let isInArr = false;
    orders.forEach((element) => {
      if (element.id === item.id) {
        isInArr = true;
        incrOrder(item.id);
      }
    });
    if (!isInArr) {
      setOrders([...orders, item]);
    }
  }

  function deleteOrder(id) {
    setOrders((orders) => {
      return orders.filter((element) => {
        return id !== element.id;
      });
    });
  }

  function incrOrder(id) {
    setOrders((orders) => {
      return orders.map((element) => {
        if (element.id === id) {
          return {
            ...element,
            count: element.count + 1,
            totalPrice: (element.count + 1) * element.price,
          };
        }
        return element;
      });
    });
  }

  function decrOrder(id) {
    setOrders((orders) => {
      return orders.map((element) => {
        if (element.id === id) {
          const newCount = element.count - 1 > 1 ? element.count - 1 : 1;
          return {
            ...element,
            count: newCount,
            totalPrice: newCount * element.price,
          };
        }
        return element;
      });
    });
  }

  return (
    <div className="app">
      <Header total={total} />
      <Routes>
        <Route path="/" exact element={<GoodsList addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              items={orders}
              deleteOrder={deleteOrder}
              incrOrder={incrOrder}
              decrOrder={decrOrder}
              total={total}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
