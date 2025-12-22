import { PageContainer } from "./PageContainer";
import { ThemeSwitch } from "./ThemeSwitch";

function Settings() {
  return (
    <PageContainer>
      <PageContainer.Title>Settings</PageContainer.Title>
      <PageContainer.Subtitle>Manage settings of the app and adjust your own preferences</PageContainer.Subtitle>

      <ThemeSwitch />
    </PageContainer>
  );
}

export { Settings };
