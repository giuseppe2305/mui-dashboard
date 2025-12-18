import { Sidebar } from "./Sidebar";
import { Home } from "./Home";

import { Box } from "@mui/material";
import { SidebarProvider } from "../contexts/SidebarContext";

function Dashboard() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <SidebarProvider>
        <Sidebar />
        <Home />
      </SidebarProvider>
    </Box>
  );
}

export { Dashboard };
