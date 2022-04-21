import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggleAuth = () => {
    setIsAuth(!isAuth);
  };

  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth, isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
