import React from "react";
import "./Cart.css";
import Order from "../Order/Order";

export default function Cart({
  items,
  deleteOrder,
  incrOrder,
  decrOrder,
  total,
}) {
  return (
    <section className="cart">
      <h2 className="cart__title">Корзина</h2>
      <div>
        {items.map((item) => {
          return (
            <Order
              key={item.id}
              props={item}
              deleteOrder={deleteOrder}
              incrOrder={incrOrder}
              decrOrder={decrOrder}
            />
          );
        })}
      </div>
      <div className="cart__total">
        <div className="cart__total-wrapper">
          <h3 className="cart__total-title">Итого</h3>
          <span className="cart__total-title">{total.priceTotal}</span>
        </div>
        <button className="cart__total-btn">Перейти к оформлению</button>
      </div>
    </section>
  );
}
