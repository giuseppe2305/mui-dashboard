import { Button, Grid, Stack, Typography } from "@mui/material";
import { ColorSwitch } from "./ColorSwitch";
import { PageContainer } from "./PageContainer";
import { ThemeSwitch } from "./ThemeSwitch";
import { Link } from "react-router";

function Settings() {
  return (
    <PageContainer>
      <PageContainer.Title>Settings</PageContainer.Title>
      <PageContainer.Subtitle>Manage settings of the app and adjust your own preferences</PageContainer.Subtitle>

      <Grid container sx={{ mt: 4 }} gap={2}>
        <Grid size={{ xs: 12, lg: 4 }} sx={{ backgroundColor: "primary.main", p: 3, borderRadius: 1 }}>
          <Stack gap={4}>
            <Typography variant="h2" color="primary.contrastText">
              Theme & Colors
            </Typography>
            <ThemeSwitch />
            <ColorSwitch />
          </Stack>
        </Grid>
        <Grid
          size={{ xs: 12, lg: 4 }}
          sx={{
            backgroundColor: "primary.main",
            p: 3,
            borderRadius: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" color="primary.contrastText">
            Account
          </Typography>
          <Typography sx={{ flexGrow: 1, minHeight: 60 }}>Check account settings in account page.</Typography>
          <Link to="/account">
            <Button variant="contained">Go To Account Page</Button>
          </Link>
        </Grid>
      </Grid>
    </PageContainer>
  );
}

export { Settings };
