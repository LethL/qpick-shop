import React from "react";
import { headphones, wirelessHeadphones } from "../../__mocks__ /Mocks";
import GoodsCard from "../GoodsCard/GoodsCard";
import "./GoodsList.css";

export default function GoodsList({ addToCart }) {
  return (
    <main className="main">
      <section className="goods">
        <p className="goods__name">Наушники</p>
        <div className="goods__content">
          {headphones.map((element) => {
            return (
              <GoodsCard
                key={element.id}
                props={element}
                addToCart={addToCart}
              />
            );
          })}
        </div>
      </section>
      <section className="">
        <p className="goods__name">Беспроводные наушники</p>
        <div className="goods__content">
          {wirelessHeadphones.map((element) => {
            return <GoodsCard key={element.id} props={element} />;
          })}
        </div>
      </section>
    </main>
  );
}
