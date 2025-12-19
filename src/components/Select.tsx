import { FormControl, InputLabel, MenuItem, Select as SelectMUI } from "@mui/material";
import capitalizeWord from "../lib/functions/capitalizeWord";

interface Props {
  value: string;
  values: string[];
  onChange: (value: string) => void;
  label: string;
}

function Select({ value, values, onChange, label }: Props) {
  const labelId = `${label.toLowerCase()}-select-label`;
  const id = `${label.toLowerCase()}-select`;
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
      <InputLabel id={labelId} sx={{ color: "primary.contrastText" }}>
        {label}
      </InputLabel>
      <SelectMUI
        labelId={labelId}
        id={id}
        value={value}
        label={label}
        onChange={(event) => onChange(event.target.value as string)}
        size="small"
        sx={{
          color: "primary.contrastText",
          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "primary.contrastText" },
        }}
      >
        {values.map((v) => (
          <MenuItem key={v} value={v}>
            {capitalizeWord(v)}
          </MenuItem>
        ))}
      </SelectMUI>
    </FormControl>
  );
}

export { Select };
