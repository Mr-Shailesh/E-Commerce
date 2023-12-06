import React from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";
import {
  getCartItemTotal,
  getProductCartItem,
} from "../../store/Product/ProductSelector";
import CheckoutItem from "../../components/CheckoutItem";
import PaymentForm from "../../components/PaymentForm";

const Checkout = () => {
  const cartItems = useSelector(getProductCartItem);
  const cartTotal = useSelector(getCartItemTotal);
  return (
    <div>
      <div className="CheckoutContainer">
        <div className="CheckoutHeader">
          <div className="HeaderBlock">
            <span>Product</span>
          </div>
          <div className="HeaderBlock">
            <span>Category</span>
          </div>
          <div className="HeaderBlock">
            <span>Quantity</span>
          </div>
          <div className="HeaderBlock">
            <span>Price</span>
          </div>
          <div className="HeaderBlock">
            <span>Remove</span>
          </div>
        </div>
        {/* <TransitionGroup
          style={{
            width: "100%",
          }}
        > */}
        {cartItems.map((cartItem) => (
          //   <Collapse key={cartItem.id} in={true} timeout={300}>
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          //   </Collapse>
        ))}
        {/* </TransitionGroup> */}
        <div className="Total">Total: ${cartTotal.toFixed(2)}</div>
        {cartItems.length > 0 && <PaymentForm />}
      </div>
    </div>
  );
};

export default Checkout;
