import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Dashboard } from "./components/Dashboard";

function App() {
  const theme = createTheme({
    colorSchemes: {
      dark: true,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
