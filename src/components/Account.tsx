import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { PageContainer } from "./PageContainer";

function Account() {
  return (
    <PageContainer>
      <PageContainer.Title>Account</PageContainer.Title>
      <PageContainer.Subtitle>Manage your account informations and update your passwords.</PageContainer.Subtitle>
      <Grid container gap={{ sm: 4, xl: 30 }} sx={{ mt: 10 }}>
        <Grid sx={{ flexDirection: "column", display: "flex", gap: 4, maxWidth: 500 }} size={{ sm: 12, xl: 6 }}>
          <Typography variant="h2">Change your password</Typography>
          <TextField type="password" variant="standard" placeholder="Old Password" />
          <TextField type="password" variant="standard" placeholder="New Password" />
          <TextField type="password" variant="standard" placeholder="Repeat Password" />
          <Stack sx={{ ml: "auto" }} direction="row">
            <Button>Cancel</Button>
            <Button variant="contained">Save</Button>
          </Stack>
        </Grid>
        <Grid sx={{ flexDirection: "column", display: "flex", gap: 4, maxWidth: 500 }} size={{ sm: 12, xl: 6 }}>
          <Typography variant="h2">Change your username</Typography>
          <TextField type="email" variant="standard" placeholder="Email" />
          <TextField type="password" variant="standard" placeholder="Password" />
          <TextField variant="standard" placeholder="New Username" />
          <Stack sx={{ ml: "auto" }} direction="row">
            <Button>Cancel</Button>
            <Button variant="contained">Save</Button>
          </Stack>
        </Grid>
      </Grid>
    </PageContainer>
  );
}

export { Account };
