import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, setLoginData] = useState(null);

  const logout = () => {
    localStorage.clear();
    setLoginData(null);
  };

  const value = {
    email,
    setEmail,
    password,
    setPassword,
    loginData,
    setLoginData,
    logout,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
