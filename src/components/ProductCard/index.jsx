import React, { useState } from "react";
import "./ProductCard.css";
import ReviewProduct from "../ReviewProduct";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/Product/ProductAction";
import { Button } from "antd";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { title, price, image } = product;
  const dispatch = useDispatch();

  const [showReview, setShowReview] = useState(false);

  const handleReview = () => {
    setShowReview(true);
  };

  const addProductToCart = (data) => {
    dispatch(addToCart(data));
    toast.success(`${data.title} added to the Cart !`);
  };

  return (
    <div className="ProductCartContainer">
      <img
        onClick={handleReview}
        className="image"
        src={image}
        alt={`${title}`}
      />
      <div className="Footer">
        <span
          style={{
            width: "270px",
            wordBreak: "break-word",
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          ${price}
        </span>
      </div>
      <div
        style={{
          width: "95%",
          textAlign: "start",
        }}
      >
        <Button type="primary" onClick={() => addProductToCart(product)}>
          Add to cart
        </Button>
      </div>

      {showReview && (
        <ReviewProduct
          product={product}
          open={showReview}
          setOpen={setShowReview}
        />
      )}
    </div>
  );
};

export default ProductCard;
