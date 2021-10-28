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
      offColor="#fff"
      offHandleColor="#0073b1"
      onColor="#0e0e0e"
      onHandleColor="#0073b1"
    />
  );
}

export default ThemeSwitcher;
