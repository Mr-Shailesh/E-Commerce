import React, { useEffect, useRef, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./Header.css";
import { Link } from "react-router-dom";
import { Badge } from "antd";
import CartDropDown from "../CartDropDown";
import { useSelector } from "react-redux";
import { getProductCartItem } from "../../store/Product/ProductSelector";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector(getProductCartItem);

  const badgeCount = cartItems.length;

  const cartRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    if (isCartOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isCartOpen]);

  return (
    <div className="headerWrapper">
      <div className="left-side">
        <Link to="/">
          <span>LOGO</span>
        </Link>
      </div>
      <div className="right-side">
        <Link to="/">
          <span>SHOP</span>
        </Link>
        <Link to="auth">
          <span>SIGN IN</span>
        </Link>
        <Badge count={badgeCount} showZero>
          <ShoppingCartOutlined
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="cartIcon"
            ref={cartRef}
          />
        </Badge>
        {isCartOpen && <CartDropDown cartItems={cartItems} />}
      </div>
    </div>
  );
};

export default Header;
