import { Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import ShowChart from "@mui/icons-material/ShowChart";
import Settings from "@mui/icons-material/Settings";
import Person from "@mui/icons-material/Person";

function Sidebar() {
  return (
    <Drawer variant="permanent">
      <Grid sx={{ p: 4, flexDirection: "column" }}>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          MUI Dashboard
        </Typography>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ShowChart />
              </ListItemIcon>
              <ListItemText primary="Charts" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
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
