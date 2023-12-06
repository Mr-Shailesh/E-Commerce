import { Button, Input } from "antd";
import React, { useState } from "react";
import "./Signin.css";

const Signin = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formFields;

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
    <div className="SignInContainer">
      <div className="signinHeader">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
      </div>
      <form className="form" onSubmit={handleSubmit}>
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
        <div className="ButtonsContainer">
          <Button className="buttonAntd" type="primary" htmlType="submit">
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
