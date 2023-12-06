import React from "react";
import "./CheckoutItem.css";
import { CloseCircleOutlined } from "@ant-design/icons";
import {
  addToCart,
  removeItem,
  removeSingleItem,
} from "../../store/Product/ProductAction";
import { useDispatch } from "react-redux";

const CheckoutItem = ({ cartItem }) => {
  const { name, image, category, price, quantity, id } = cartItem;
  const dispatch = useDispatch();
  const handleRemoveItemFromCart = (id) => {
    dispatch(removeSingleItem(id));
  };
  const handleAddItemToCart = (data) => {
    dispatch(addToCart(data));
  };
  const handleClearItemFromCart = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="CheckoutItemContainer">
      <div className="ImageContainer">
        <img src={image} alt={`${name}`} />
      </div>
      <span className="BaseSpan">{category}</span>
      <div className="Quantity">
        <div className="Arrow " onClick={() => handleRemoveItemFromCart(id)}>
          &#10094;
        </div>
        <div className="Value">{quantity}</div>
        <div className="Arrow " onClick={() => handleAddItemToCart(cartItem)}>
          &#10095;
        </div>
      </div>
      <span className="BaseSpan">${price}</span>

      <CloseCircleOutlined
        onClick={() => handleClearItemFromCart(id)}
        style={{
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default CheckoutItem;
