import { useThemeContext } from "../contexts/useThemeContext";
import { palettes, type paletteColor } from "../lib/palettes";
import { Select } from "./Select";

function ColorSwitch() {
  const { setThemeName, themeName } = useThemeContext();
  const colors = Object.keys(palettes);

  return (
    <Select label="Color" value={themeName} values={colors} onChange={(mode) => setThemeName(mode as paletteColor)} />
  );
}

export { ColorSwitch };
