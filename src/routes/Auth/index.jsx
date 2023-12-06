import React from "react";
import Signin from "../../components/Signin";
import Signup from "../../components/Signup";
import "./Auth.css";

const Auth = () => {
  return (
    <div className="AuthContainer">
      <Signin />
      <Signup />
    </div>
  );
};

export default Auth;
