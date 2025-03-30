import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router";
import Login from "./pages/Login";
import { GlobalContext } from "./context/GlobalContext";
import Home from "./pages/Home";
import User from "./pages/User";

const AllRoutes = () => {
  const { loginData } = useContext(GlobalContext);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home?page=:id" element={<Home />} />
      <Route path="/user/:id" element={<User />} />
      <Route
        path="/*"
        element={loginData !== null ? <Home /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default AllRoutes;
