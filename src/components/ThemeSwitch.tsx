import { useColorScheme } from "@mui/material";
import { Select } from "./Select";

type themes = "light" | "dark" | "system";

function ThemeSwitch() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Select
      label="Theme"
      value={mode}
      values={["light", "dark", "system"]}
      onChange={(mode) => setMode(mode as themes)}
    />
  );
}

export { ThemeSwitch };
