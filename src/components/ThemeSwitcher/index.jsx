import Switch from "react-switch";
import { MoonIcon, SunIcon } from "./style";
import { useTheme } from "../../providers/ThemeContext";

function ThemeSwitcher() {
  const { theme, handleChangeTheme } = useTheme();

  return (
    <Switch
      onChange={handleChangeTheme}
      checked={theme.title === "dark"}
      checkedIcon={<SunIcon />}
      uncheckedIcon={<MoonIcon />}
      height={20}
      offColor="#a1a1a1"
      offHandleColor="#0073b1"
      onColor="#575757"
      onHandleColor="#0073b1"
    />
  );
}

export default ThemeSwitcher;
