import { Close, Email } from "@mui/icons-material";
import { Drawer, Stack, Typography, Container, Card, Button, IconButton } from "@mui/material";

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
          <Email />
          <Typography variant="h5">Emails</Typography>
        </Stack>
        <Typography>You have 3 new emails</Typography>
        <Container sx={{ mt: 2 }}>
          <Card sx={{ px: 2, py: 1, display: "flex", alignItems: "center", minWidth: 500 }}>
            <Stack sx={{ flexGrow: 1 }}>
              <Typography variant="h6">Joe Doe</Typography>
              <Typography>Hi, how are you?</Typography>
            </Stack>
            <Button>Mark as read</Button>
            <Button color="error">Delete</Button>
          </Card>
        </Container>
      </Stack>
    </Drawer>
  );
}

export { EmailsDrawer };
