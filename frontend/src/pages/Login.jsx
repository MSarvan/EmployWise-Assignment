import React, { useContext } from "react";
import "../styles/Login.scss";
import logo from "../assets/logo.jpg";
import { GlobalContex } from "../context/GlobalContext";

const Login = () => {
  const { email, setEmail, password, setPassword, loginData, setLoginData } =
    useContext(GlobalContex);

  const handleLogin = () => {};

  return (
    <div className="login-container">
      <div className="login-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>

          <button
            type="submit"
            className="login-button"
            disabled={!email || !password}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
