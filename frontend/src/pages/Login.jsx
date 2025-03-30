import React, { useState, useContext } from "react";
import "../styles/Login.scss";
import logo from "../assets/logo.jpg";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const { email, setEmail, password, setPassword, setLoginData } =
    useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const obj = {
      email,
      password,
    };

    try {
      const res = await axios.post("https://reqres.in/api/login", obj);
      const data = res.data;
      setLoginData(data);
      localStorage.setItem("token", data.token);
      navigate("/home");
      setEmail("");
      setPassword("");
      setLoading(false);
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      toast.error(`Login failed: ${error.response?.data?.error}`);
      setLoading(false);
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
            disabled={!email || !password || loading}
          >
            {loading ? "Logging you in.." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
