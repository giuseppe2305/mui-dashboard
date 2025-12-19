import { Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

import { ThemeSwitch } from "./ThemeSwitch";
import { useSidebar } from "../contexts/useSidebar";
import { SIDEBAR_WIDTH } from "../lib/constants";
import { NavLink } from "react-router";
import { routes } from "../lib/routes";
import { ColorSwitch } from "./ColorSwitch";

function Sidebar() {
  const { isOpen } = useSidebar();

  return (
    <Drawer
      sx={{
        width: SIDEBAR_WIDTH,

        "& .MuiDrawer-paper": {
          width: SIDEBAR_WIDTH,
          boxSizing: "border-box",
        },

        "& .MuiPaper-root": {
          backgroundColor: "primary.main",
          color: "primary.contrastText",
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
          {routes.map((r) => (
            <ListItem key={r.path}>
              <ListItemButton component={NavLink} to={r.path} sx={{ "&.active": { backgroundColor: "primary.light" } }}>
                <ListItemIcon sx={{ color: "inherit" }}>
                  <r.icon />
                </ListItemIcon>
                <ListItemText primary={r.label} />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem sx={{ mt: 6 }}>
            <ThemeSwitch />
          </ListItem>

          <ListItem>
            <ColorSwitch />
          </ListItem>
        </List>
      </Grid>
    </Drawer>
  );
}

export { Sidebar };
