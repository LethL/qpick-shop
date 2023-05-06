/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import Logo from "../Logo/Logo";
import globe from "../../images/globe.svg";
import vk from "../../images/vk.svg";
import tg from "../../images/tg.svg";
import wa from "../../images/wa.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <nav>
        <ul className="footer__nav">
          <li>
            <a href="#" target="_blank" className="footer__nav-item">
              Избранное
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="footer__nav-item">
              Корзина
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="footer__nav-item">
              Контакты
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <a href="#" target="_blank" className="footer__nav-item">
          Условия сервиса
        </a>
        <div className="footer__langs">
          <img src={globe} alt="глобус" />
          <p className="footer__langs-item footer__langs-item_active">Рус</p>
          <p className="footer__langs-item">Eng</p>
        </div>
      </div>
      <div className="footer__links">
        <a href="#" target="_blank">
          <img src={vk} alt="вконтакте" className="footer__links-item" />
        </a>
        <a href="#" target="_blank">
          <img src={tg} alt="телеграмм" className="footer__links-item" />
        </a>
        <a href="#" target="_blank">
          <img src={wa} alt="ватсапп" className="footer__links-item" />
        </a>
      </div>
    </footer>
  );
}
