import { Stack } from "@mui/material";
import { ColorSwitch } from "./ColorSwitch";
import { PageContainer } from "./PageContainer";
import { ThemeSwitch } from "./ThemeSwitch";

function Settings() {
  return (
    <PageContainer>
      <PageContainer.Title>Settings</PageContainer.Title>
      <PageContainer.Subtitle>Manage settings of the app and adjust your own preferences</PageContainer.Subtitle>

      <Stack sx={{ backgroundColor: "primary.main", p: 3 }}>
        <ThemeSwitch />
        <ColorSwitch />
      </Stack>
    </PageContainer>
  );
}

export { Settings };
