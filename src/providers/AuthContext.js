import { api } from "../api";
import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { DataContext } from "./DataContext";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);
  const { getUserData } = useContext(DataContext);

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
      .then(() => history.push("/feed"));
  };

  return (
    <AuthContext.Provider value={{ loginOrRegisterUser, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
