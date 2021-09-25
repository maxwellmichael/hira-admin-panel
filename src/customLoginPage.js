import React from "react";
import { Login, LoginForm } from "react-admin";

const CustomLoginForm = props => (
  <div>
    <LoginForm {...props} />
  </div>
);

const CustomLoginPage = props => (
  <Login loginForm={<CustomLoginForm />} {...props} />
);

export default CustomLoginPage;