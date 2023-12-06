import React from "react";
import "./CartItem.css";

const CartItem = ({ cartItem }) => {
  const { name, image, price, quantity } = cartItem;
  return (
    <div className="CartItemContainer">
      <img src={image} alt={name} />
      <div className="ItemDetails">
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
