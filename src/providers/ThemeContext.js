import { createContext, useContext, useEffect, useState } from "react";
import { dark } from "../style/dark";
import { light } from "../style/light";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({});

  const handleChangeTheme = () => {
    setTheme((currentTheme) => (currentTheme === dark ? light : dark));
    localStorage.setItem("@Reactin/theme", theme.title);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("@Reactin/theme");
    savedTheme === "light" ? setTheme(dark) : setTheme(light);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
