import React from "react";
import "./Order.css";
import deleteIcon from "../../images/delete.svg";

export default function Order({ props, deleteOrder, incrOrder, decrOrder }) {
  return (
    <div className="order">
      <div>
        <img
          src={`./images/${props.img}`}
          alt={props.title}
          className="order__img"
        />
        <div className="order__counter">
          <span
            className="order__counter-btn"
            onClick={() => decrOrder(props.id)}
          >
            -
          </span>
          <span className="order__counter-item">{props.count}</span>
          <span
            className="order__counter-btn"
            onClick={() => incrOrder(props.id)}
          >
            +
          </span>
        </div>
      </div>
      <div>
        <h2 className="order__name">{props.title}</h2>
        <p className="order__price">{props.price} ₽</p>
      </div>
      <img
        className="order__delete-btn"
        src={deleteIcon}
        alt="удалить товар"
        onClick={() => deleteOrder(props.id)}
      />
      <span className="order__total">{props.totalPrice} ₽</span>
    </div>
  );
}
