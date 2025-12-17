import { Search, Mail, Notifications } from "@mui/icons-material";
import { Box, Badge, Avatar } from "@mui/material";

function HeaderBar() {
  return (
    <Box
      sx={{
        py: 1,
        px: 4,
        backgroundColor: "primary.light",
        color: "primary.contrastText",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ flexGrow: "1", display: "flex" }}>
        <Search />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        <Badge badgeContent={4} color="primary">
          <Mail />
        </Badge>
        <Notifications />
        <Avatar>G</Avatar>
      </Box>
    </Box>
  );
}

export { HeaderBar };
