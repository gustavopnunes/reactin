import { createContext, useContext, useState } from "react";
import { dark } from "../style/dark";
import { light } from "../style/light";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(light);

  const handleChangeTheme = () => {
    setTheme(theme === dark ? light : dark);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
