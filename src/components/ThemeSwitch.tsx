import { useColorScheme, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function ThemeSwitch() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <FormControl variant="outlined" fullWidth sx={{ "& svg": { color: "primary.contrastText" } }}>
      <InputLabel id="theme-select-label" sx={{ color: "primary.contrastText" }}>
        Theme
      </InputLabel>
      <Select
        labelId="theme-select-label"
        id="theme-select"
        value={mode}
        label="Theme"
        onChange={(event) => setMode(event.target.value as "system" | "light" | "dark")}
        size="small"
        sx={{ color: "primary.contrastText" }}
      >
        <MenuItem value="system">System</MenuItem>
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
      </Select>
    </FormControl>
  );
}

export { ThemeSwitch };
