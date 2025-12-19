import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CssBaseline, Stack, ThemeProvider } from "@mui/material";
import theme from "./lib/theme";

import { BrowserRouter, Route, Routes } from "react-router";
import { SidebarProvider } from "./contexts/SidebarContext";
import { SidebarBackgroundFix } from "./components/SidebarBackgroundPlaceholder";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./components/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <SidebarProvider>
          <Stack direction="row" sx={{ height: "100vh" }}>
            <SidebarBackgroundFix />
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Stack>
        </SidebarProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
