import { createTheme } from "@mui/material/styles";
import { palettes, type paletteColor } from "./palettes";

const shared = {
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, fontSize: "1.8rem" },
    h2: { fontWeight: 600, fontSize: "1.4rem" },
    h3: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, padding: "8px 16px" },
        containedPrimary: { boxShadow: "none" },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: { fontWeight: 600 },
      },
    },
  },
};

function makeTheme(color: paletteColor) {
  const { color: mainColor, textColor } = palettes[color];

  return createTheme({
    colorSchemes: {
      light: {
        palette: {
          mode: "light",
          primary: { main: mainColor, contrastText: textColor },
          secondary: { main: "#00a676", contrastText: "#ffffff" },
          background: { default: "#f5f7fb", paper: "#ffffff" },
          text: { primary: "#0b1b2b", secondary: "#415a6b" },
          divider: "rgba(11,27,43,0.08)",
        },
      },
      dark: {
        palette: {
          mode: "dark",
          primary: { main: mainColor, contrastText: textColor },
          secondary: { main: "#7bffb2", contrastText: "#002b20" },
          background: { default: "#071022", paper: "#071a23" },
          text: { primary: "#e6f7ff", secondary: "#bcd9e9" },
          divider: "rgba(255,255,255,0.08)",
        },
      },
    },
    typography: shared.typography,
    shape: shared.shape,
    components: shared.components,
  });
}

export { makeTheme };
