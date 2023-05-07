import React from "react";
import "./Order.css";
import deleteIcon from '../../images/delete.svg'

export default function CartItem({ props }) {
  return (
    <div className="order">
      <div>
        <img
          src={`./images/${props.img}`}
          alt={props.title}
          className="order__img"
        />
        <div className="order__counter">
          <span className="order__counter-btn">-</span>
          <span className="order__counter-item">1</span>
          <span className="order__counter-btn">+</span>
        </div>
      </div>
      <div>
        <h2 className="order__name">{props.title}</h2>
        <p className="order__price">{props.price} ₽</p>
      </div>
      <img className='order__delete-btn' src={deleteIcon} alt="удалить товар" />
      <span className='order__total'>12321</span>
    </div>
  );
}
