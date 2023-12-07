import React, { useState } from "react";
import "./PaymentForm.css";
import { Button, DatePicker, Input } from "antd";
import moment from "moment";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../store/Product/ProductAction";

const PaymentForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState(null);
  const [cvc, setCvc] = useState("");

  const paymentHandler = (e) => {
    e.preventDefault();
    const testCardNumber1 = "4242424242424242";
    const testCardNumber2 = "5555555555554444";
    if (cardNumber === testCardNumber1 || cardNumber === testCardNumber2) {
      toast.success("Payment successful!");
      navigate("/");
      dispatch(clearCart());
    } else {
      toast.error("Invalid card number. Please use a test card number.");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "cardNumber") {
      setCardNumber(value);
    } else if (name === "cvc") {
      setCvc(value);
    }
  };
  const disabledDate = (current) => {
    return current && current < moment().startOf("month");
  };
  return (
    <div className="PaymentFormContainer">
      <div className="FormContainer">
        <div className="PaymentInfoContainer">
          <div className="PaymentInfo">
            Please, use the following for test credit card payments
          </div>
          <div className="PaymentInfo">
            VISA: <span>4242 4242 4242 4242</span>{" "}
          </div>
          <div className="PaymentInfo">
            MASTERCARD: <span>5555 5555 5555 4444</span>
          </div>
          <div className="PaymentInfo">
            Exp: Any Future Date, CVV: Any 3 Digits
          </div>
        </div>
        <div className="PaymentTitle">Credit Card Payment: </div>
        <form className="form" onSubmit={paymentHandler}>
          <Input
            className="inputAntd"
            maxLength={16}
            placeholder="Card Number"
            name="cardNumber"
            type="number"
            onChange={handleChange}
          />
          <DatePicker.MonthPicker
            format="MM / YY"
            onChange={(date) => setExpiryDate(date)}
            placeholder="MM / YY"
            disabledDate={disabledDate}
            name="expiryDate"
          />
          <Input
            type="number"
            maxLength={3}
            className="inputAntd"
            placeholder="CVC"
            name="cvc"
            onChange={handleChange}
          />

          <div className="ButtonsContainer">
            <Button className="buttonAntd" type="primary" htmlType="submit">
              Pay Now
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
