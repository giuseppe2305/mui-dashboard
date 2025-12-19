import { FormControl, InputLabel, MenuItem, Select as SelectMUI } from "@mui/material";

interface Props {
  value: string;
  values: string[];

  onChange: (value: string) => void;
}

function Select({ value, values, onChange }: Props) {
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
      <SelectMUI
        labelId="theme-select-label"
        id="theme-select"
        value={value}
        label="Theme"
        onChange={(event) => onChange(event.target.value)}
        size="small"
        sx={{
          color: "primary.contrastText",
          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "primary.contrastText" },
        }}
      >
        {values.map((v) => (
          <MenuItem value={v}>{v}</MenuItem>
        ))}
      </SelectMUI>
    </FormControl>
  );
}

export { Select };
