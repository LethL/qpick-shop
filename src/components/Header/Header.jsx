import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Header.css";
import favorite from "../../images/favorite.svg";
import cart from "../../images/cart.svg";

export default function Header({ items }) {
  return (
    <header className="header">
      <Link to="/" className="logo__link">
        <Logo />
      </Link>
      <div className="header__content">
        <img src={favorite} alt="избранное" className="header__content-item" />
        <Link to="/cart">
          <img src={cart} alt="корзина" className="header__content-item" />
        </Link>
        {items.length > 0 ? (
          <span className="header__content-counter">{items.length}</span>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}
