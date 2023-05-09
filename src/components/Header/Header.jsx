import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Header.css";
import favorite from "../../images/favorite.svg";
import cart from "../../images/cart.svg";

export default function Header({ total }) {
  return (
    <header className="header">
      <Link to="/" className="logo__link">
        <Logo />
      </Link>
      <div className="header__content">
        <img src={favorite} alt="избранное" className="header__content-item" />
        {total.totalItems > 0 ? (
          <Link to="/cart">
            <img src={cart} alt="корзина" className="header__content-item" />
          </Link>
        ) : (
          <img src={cart} alt="корзина" className="header__content-item" />
        )}
        {total.totalItems > 0 ? (
          <span className="header__content-counter">{total.totalItems}</span>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}
