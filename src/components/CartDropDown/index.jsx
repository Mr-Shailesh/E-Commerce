import React, { useState } from "react";
import "./CartDropDown.css";
import CartItem from "../CartItem";
import { useNavigate } from "react-router-dom";

const CartDropDown = ({ cartItems }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="dropDownContainer">
      {cartItems.length ? (
        <div className="cartItems" CartItems>
          {/* <TransitionGroup> */}
          {cartItems.map((cartItem) => (
            //   <Collapse key={cartItem.id} timeout={400}>
            <CartItem key={cartItem.id} cartItem={cartItem} />
            //   </Collapse>
          ))}
          {/* </TransitionGroup> */}
        </div>
      ) : (
        <div className="EmptyMessage ">Your cart is empty</div>
      )}
      <button className="cartButton" onClick={handleCheckout}>
        GO TO CHECKOUT
      </button>
    </div>
  );
};

export default CartDropDown;
