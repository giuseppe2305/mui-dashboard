import { Card, Stack, Typography, Button } from "@mui/material";

function Email() {
  return (
    <Card sx={{ px: 2, py: 1, display: "flex", alignItems: "center", minWidth: 500 }}>
      <Stack sx={{ flexGrow: 1 }}>
        <Typography variant="h6">Joe Doe</Typography>
        <Typography>Hi, how are you?</Typography>
      </Stack>
      <Button>Mark as read</Button>
      <Button color="error">Delete</Button>
    </Card>
  );
}

export { Email };
