import { Box } from "@mui/material";
import { HEADBAR_HEIGHT, SIDEBAR_WIDTH } from "../lib/constants";

function SidebarBackgroundFix() {
  return (
    <Box
      sx={{
        zIndex: -1,
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "primary.main",
        width: SIDEBAR_WIDTH,
        height: HEADBAR_HEIGHT,
      }}
    ></Box>
  );
}

export { SidebarBackgroundFix };
