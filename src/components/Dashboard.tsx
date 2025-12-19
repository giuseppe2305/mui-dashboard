import { Sidebar } from "./Sidebar";
import { Home } from "./Home";

import { Box, Stack } from "@mui/material";
import { SidebarProvider } from "../contexts/SidebarContext";
import { HEADBAR_HEIGHT, SIDEBAR_WIDTH } from "../lib/constants";

function Dashboard() {
  return (
    <SidebarProvider>
      <Stack direction="row" sx={{ height: "100vh" }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "primary.main",
            width: SIDEBAR_WIDTH,
            height: HEADBAR_HEIGHT,
          }}
        ></Box>
        <Sidebar />
        <Home />
      </Stack>
    </SidebarProvider>
  );
}

export { Dashboard };
