import { Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import ShowChart from "@mui/icons-material/ShowChart";
import Settings from "@mui/icons-material/Settings";
import Person from "@mui/icons-material/Person";

const drawerWidth = 240;

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "primary.main",
          color: "primary.contrastText",
        },
      }}
    >
      <Grid sx={{ p: 4, flexDirection: "column" }}>
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
        </List>
      </Grid>
    </Drawer>
  );
}

export { Sidebar };
