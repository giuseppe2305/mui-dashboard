import { Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import ShowChart from "@mui/icons-material/ShowChart";
import Settings from "@mui/icons-material/Settings";
import Person from "@mui/icons-material/Person";

import { ThemeSwitch } from "./ThemeSwitch";
import { useSidebar } from "../contexts/useSidebar";
import { SIDEBAR_WIDTH } from "../lib/constants";

function Sidebar() {
  const { isOpen } = useSidebar();

  return (
    <Drawer
      sx={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: SIDEBAR_WIDTH,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={isOpen}
    >
      <Grid sx={{ py: 4, px: { xs: 1, md: 2, lg: 4 }, flexDirection: "column" }}>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          MUI Dashboard
        </Typography>
        <List sx={{ marginTop: 6 }}>
          <ListItem>
            <ListItemButton>
              <ListItemIcon sx={{ color: "inherit" }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon sx={{ color: "inherit" }}>
                <ShowChart />
              </ListItemIcon>
              <ListItemText primary="Charts" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon sx={{ color: "inherit" }}>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon sx={{ color: "inherit" }}>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ mt: 6 }}>
            <ThemeSwitch />
          </ListItem>
        </List>
      </Grid>
    </Drawer>
  );
}

export { Sidebar };
