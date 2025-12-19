import { Sidebar } from "./Sidebar";
import { Home } from "./Home";

import { Stack } from "@mui/material";
import { SidebarProvider } from "../contexts/SidebarContext";
import { SidebarBackgroundFix } from "./SidebarBackgroundPlaceholder";

function Dashboard() {
  return (
    <SidebarProvider>
      <Stack direction="row" sx={{ height: "100vh" }}>
        <SidebarBackgroundFix />
        <Sidebar />
        <Home />
      </Stack>
    </SidebarProvider>
  );
}

export { Dashboard };
