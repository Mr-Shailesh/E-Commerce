import { Button, Input } from "antd";
import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [formFields, setFormFields] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = formFields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="SignUpContainer">
      <div className="signinHeader">
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          className="inputAntd"
          placeholder="Display Name"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <Input
          className="inputAntd"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <Input
          className="inputAntd"
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Input
          className="inputAntd"
          placeholder="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <div className="ButtonsContainer">
          <Button className="buttonAntd" type="primary" htmlType="submit">
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
