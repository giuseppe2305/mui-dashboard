import { use } from "react";
import { ThemeContext } from "./ThemeContext";

function useThemeContext() {
  const context = use(ThemeContext);

  if (!context) throw new Error("Cannot access context outside his provider.");
  return context;
}

export { useThemeContext };
