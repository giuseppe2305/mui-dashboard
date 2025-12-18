import { Sidebar } from "./Sidebar";
import { Home } from "./Home";

import { Box, Stack } from "@mui/material";
import { SidebarProvider } from "../contexts/SidebarContext";

function Dashboard() {
  return (
    <SidebarProvider>
      <Stack direction="row" sx={{ height: "100vh" }}>
        <Box
          sx={{
            height: 56,
            width: "100%",
            backgroundColor: "primary.main",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        ></Box>
        {/* Review this part */}
        <Sidebar />
        <Home />
      </Stack>
    </SidebarProvider>
  );
}

export { Dashboard };
