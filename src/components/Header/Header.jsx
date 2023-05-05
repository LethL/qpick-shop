import React from "react";
import Logo from "../Logo/Logo";
import "./Header.css";
import favorite from "../../images/favorite.svg";
import cart from "../../images/cart.svg";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <div className="header__content">
        <img src={favorite} alt="избранное" className="header__content-item" />
        <img src={cart} alt="корзина" className="header__content-item" />
      </div>
    </header>
  );
}
