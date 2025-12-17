import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import { Sidebar } from "./components/Sidebar";
import { Notifications, Search } from "@mui/icons-material";

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: "1" }}>
          <Box
            sx={{
              py: 1,
              px: 4,
              backgroundColor: "primary.light",
              color: "primary.contrastText",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ flexGrow: "1", display: "flex" }}>
              <Search />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Notifications />
              <Avatar>G</Avatar>
            </Box>
          </Box>
          <Container sx={{ p: 4, display: "flex", justifyContent: "space-between" }}>
            <Card sx={{ width: 200 }}>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h4">32</Typography>
                <Typography sx={{ textTransform: "uppercase", fontSize: 14 }}>Orders</Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: 200 }}>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h4">32</Typography>
                <Typography sx={{ textTransform: "uppercase", fontSize: 14 }}>Orders</Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: 200 }}>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h4">32</Typography>
                <Typography sx={{ textTransform: "uppercase", fontSize: 14 }}>Orders</Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: 200 }}>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h4">32</Typography>
                <Typography sx={{ textTransform: "uppercase", fontSize: 14 }}>Orders</Typography>
              </CardContent>
            </Card>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
