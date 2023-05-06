import React from "react";
import "./GoodsCard.css";

export default function GoodsCard({ props }) {
  return (
    <div className="card">
      <img
        src={`./images/${props.img}`}
        alt={props.title}
        className="card__img"
      />
      <div className="card__wrapper">
        <div>
          <h2 className="card__name">{props.title}</h2>
          <p className="card__rate">{props.rate}</p>
        </div>
        <div>
          <p className="card__price">{props.price} ₽</p>
          <p className="card__price card__price_old">
            {props.oldPrice ? props.oldPrice + " ₽" : ""}
          </p>
          <button className="card__btn">Купить</button>
        </div>
      </div>
    </div>
  );
}
