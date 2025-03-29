import React from "react";
import "../styles/Login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="login-form">
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
