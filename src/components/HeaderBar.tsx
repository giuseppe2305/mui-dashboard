import { Mail, Notifications, Menu } from "@mui/icons-material";
import { Box, Badge, Avatar, IconButton } from "@mui/material";
import { useSidebar } from "../contexts/useSidebar";
import { HEADBAR_HEIGHT } from "../lib/constants";

interface Props {
  openEmail: () => void;
}

function HeaderBar({ openEmail }: Props) {
  const { toggleSidebar } = useSidebar();

  return (
    <Box
      sx={{
        height: HEADBAR_HEIGHT,
        px: 4,
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ flexGrow: "1", display: "flex" }}>
        <IconButton onClick={toggleSidebar}>
          <Menu sx={{ color: "primary.contrastText" }} />
        </IconButton>
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
