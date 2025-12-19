import { createContext, useState } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material";

import type { ChildrenNode } from "../types/ChildrenNode";
import type { Theme } from "@mui/material";

import { makeTheme } from "../lib/makeTheme";
import type { paletteColor } from "../lib/palettes";

interface ContextValue {
  theme: Theme;
  themeName: paletteColor;

  setThemeName: (color: paletteColor) => void;
}

const ThemeContext = createContext<undefined | ContextValue>(undefined);

function ThemeProvider({ children }: ChildrenNode) {
  const [themeName, setThemeName] = useState<paletteColor>("blue");
  const theme = makeTheme(themeName);

  return (
    <MUIThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, themeName, setThemeName }}>{children}</ThemeContext.Provider>
    </MUIThemeProvider>
  );
}

export { ThemeProvider, ThemeContext };
