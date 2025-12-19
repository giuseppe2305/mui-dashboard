import { createContext, useState } from "react";
import type { ChildrenNode } from "../types/ChildrenNode";

interface ContextValue {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = createContext<undefined | ContextValue>(undefined);

function ThemeProvider({ children }: ChildrenNode) {
  const [theme, setTheme] = useState("blue");

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export { ThemeProvider, ThemeContext };
