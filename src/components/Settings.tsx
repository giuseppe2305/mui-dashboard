import { Stack, Typography } from "@mui/material";
import { ColorSwitch } from "./ColorSwitch";
import { PageContainer } from "./PageContainer";
import { ThemeSwitch } from "./ThemeSwitch";

function Settings() {
  return (
    <PageContainer>
      <PageContainer.Title>Settings</PageContainer.Title>
      <PageContainer.Subtitle>Manage settings of the app and adjust your own preferences</PageContainer.Subtitle>

      <Stack gap={4} sx={{ backgroundColor: "primary.main", p: 3 }}>
        <Typography variant="h2" color="primary.contrastText">
          Theme & Colors
        </Typography>
        <ThemeSwitch />
        <ColorSwitch />
      </Stack>
    </PageContainer>
  );
}

export { Settings };
