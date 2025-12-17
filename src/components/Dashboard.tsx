import { Sidebar } from "./Sidebar";
import { Home } from "./Home";

import { Box } from "@mui/material";

function Dashboard() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Home />
    </Box>
  );
}

export { Dashboard };
