import { Sidebar } from "./Sidebar";
import { Home } from "./Home";

import { Stack } from "@mui/material";
import { SidebarProvider } from "../contexts/SidebarContext";

function Dashboard() {
  return (
    <SidebarProvider>
      <Stack direction="row" sx={{ height: "100vh" }}>
        <Sidebar />
        <Home />
      </Stack>
    </SidebarProvider>
  );
}

export { Dashboard };
