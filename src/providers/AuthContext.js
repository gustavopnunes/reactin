import { api } from "../api";
import toast from "react-hot-toast";
import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useData } from "./DataContext";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);
  const { getUserData } = useData();

  useEffect(() => {
    const token = localStorage.getItem("@ReactIn/token");
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      getUserData(token);
      setAuthenticated(true);
    } else {
    }
    //eslint-disable-next-line
  }, []);

  const loginOrRegisterUser = (userInfo, endpoint) => {
    if (endpoint === "users") {
      userInfo = { ...userInfo, firstLogin: true };
    }

    api
      .post(`/${endpoint}`, userInfo)
      .then((response) => {
        const token = response.data.accessToken;
        localStorage.setItem("@ReactIn/token", JSON.stringify(token));
        setAuthenticated(true);
        getUserData(token);
      })
      .then(() => history.push("/feed"))
      .catch(() => toast.error("Usuário ou senha incorreto!"));
  };

  const handleLogout = () => {
    localStorage.removeItem("@ReactIn/token");
    history.push("/login");
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ loginOrRegisterUser, authenticated, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
