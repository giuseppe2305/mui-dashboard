import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Box, CssBaseline, ThemeProvider, useTheme } from "@mui/material";
import { Sidebar } from "./components/Sidebar";

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: "1", bgcolor: "red" }}></Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
