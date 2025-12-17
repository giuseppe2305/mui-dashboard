import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Box } from "@mui/material";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: "1", bgcolor: "red" }}></Box>
    </Box>
  );
}

export default App;
