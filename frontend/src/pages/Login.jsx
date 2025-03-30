import React, { useContext } from "react";
import "../styles/Login.scss";
import logo from "../assets/logo.jpg";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { email, setEmail, password, setPassword, loginData, setLoginData } =
    useContext(GlobalContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    const obj = {
      email,
      password,
    };

    try {
      const res = await axios.post("https://reqres.in/api/login", obj);
      const data = res.data;
      console.log(data, "data");

      setLoginData(data);
      localStorage.setItem("token", data.token);
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };

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
