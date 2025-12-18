import { Close, Email as EmailIcon } from "@mui/icons-material";
import { Drawer, Stack, Typography, IconButton } from "@mui/material";
import { Email } from "./Email";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

function EmailsDrawer({ isOpen, handleClose }: Props) {
  return (
    <Drawer open={isOpen} onClose={handleClose} anchor="right">
      <IconButton onClick={handleClose} sx={{ position: "absolute", top: 10, left: 10 }}>
        <Close fontSize="large" />
      </IconButton>
      <Stack sx={{ p: 4 }} gap={1} alignItems="center">
        <Stack direction="row" alignItems="center" gap={1}>
          <EmailIcon />
          <Typography variant="h5">Emails</Typography>
        </Stack>
        <Typography>You have 3 new emails</Typography>
        <Stack gap={2} sx={{ mt: 2 }}>
          <Email />
          <Email />
          <Email />
        </Stack>
      </Stack>
    </Drawer>
  );
}

export { EmailsDrawer };
