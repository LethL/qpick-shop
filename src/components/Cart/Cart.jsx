import React from "react";
import "./Cart.css";
import Order from "../Order/Order";

export default function Cart({ items }) {
  console.log(items);
  return (
    <section className="cart">
      <h2 className="cart__title">Корзина</h2>
      <div>
        {items.map((item) => {
          return <Order key={item.id} props={item} />;
        })}
      </div>
      <div className="cart__total">
        <div className='cart__total-wrapper'>
          <h3 className='cart__total-title'>Итого</h3>
          <span className='cart__total-title'>3123</span>
        </div>
        <button className="cart__total-btn">Перейти к оформлению</button>
      </div>
    </section>
  );
}
