import React from "react";
import "./Featured.css";

import data from "../Assets/data";
import Item from "../Item/Item";

const Featured = () => {
  return (
    <div className="featured-container">
      <div className="header-wrapper">
        <h1 className="featured-title">Featured Products</h1>
        <hr className="featured-divider" />
      </div>
      <div className="featured-products">
        {data.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              className="featured-item"
              name={item.name}
              image={item.image}
              unit_price={item.unit_price}
              total_price={item.total_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Featured;