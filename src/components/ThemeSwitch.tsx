import { useColorScheme, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function ThemeSwitch() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <FormControl
      variant="outlined"
      fullWidth
      sx={{
        // Theme Label
        "& .MuiFormLabel-root": { color: "primary.contrastText" },

        // Arrow Icon SVG
        "& .MuiInputBase-root svg": { color: "primary.contrastText" },

        // Border
        "& .MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "primary.contrastText",
          borderWidth: 1,
        },

        // Focus State Theme Label
        "& .Mui-focused.MuiFormLabel-root": { color: "primary.contrastText" },

        // Focus State Border
        "& .Mui-focused.MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "primary.contrastText",
          borderWidth: 1,
        },
      }}
    >
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
        sx={{
          color: "primary.contrastText",
          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "primary.contrastText" },
        }}
      >
        <MenuItem value="system">System</MenuItem>
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
      </Select>
    </FormControl>
  );
}

export { ThemeSwitch };
