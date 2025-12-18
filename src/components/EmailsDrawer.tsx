import { Email } from "@mui/icons-material";
import { Drawer, Stack, Typography, Container, Card, Button } from "@mui/material";

function EmailsDrawer() {
  return (
    <Drawer open={true} anchor="right">
      <Stack sx={{ p: 4 }} gap={1} alignItems="center">
        <Stack direction="row" alignItems="center" gap={1}>
          <Email />
          <Typography variant="h5">Emails</Typography>
        </Stack>
        <Typography>You have 3 new email.</Typography>
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
