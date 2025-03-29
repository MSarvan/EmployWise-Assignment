import React, { createContext, useEffect, useState } from "react";

export const GlobalContex = createContext();

export const GlobalContexProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, setLoginData] = useState(null);

  const value = {
    email,
    setEmail,
    password,
    setPassword,
    loginData,
    setLoginData,
  };

  return (
    <GlobalContex.Provider value={value}>{children}</GlobalContex.Provider>
  );
};
