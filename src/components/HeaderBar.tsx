import { Search, Mail, Notifications } from "@mui/icons-material";
import { Box, Badge, Avatar, IconButton } from "@mui/material";

interface Props {
  openEmail: () => void;
}

function HeaderBar({ openEmail }: Props) {
  return (
    <Box
      sx={{
        py: 1,
        px: 4,
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ flexGrow: "1", display: "flex" }}>
        <Search />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        <IconButton onClick={openEmail}>
          <Badge badgeContent={4} color="warning">
            <Mail sx={{ color: "primary.contrastText" }} />
          </Badge>
        </IconButton>
        <Notifications />
        <Avatar>G</Avatar>
      </Box>
    </Box>
  );
}

export { HeaderBar };
