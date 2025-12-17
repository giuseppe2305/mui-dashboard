import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Box, Drawer, Typography } from "@mui/material";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" sx={{ p: 4 }}>
        <Typography>MUI Dashboard</Typography>
      </Drawer>
      <Box component="main" sx={{ flexGrow: "1", bgcolor: "red" }}></Box>
    </Box>
  );
}

export default App;
