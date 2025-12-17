import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import { Sidebar } from "./components/Sidebar";
import { Notifications, Search } from "@mui/icons-material";
import { StatisticCard } from "./components/StatisticCard";
import { TransactionHistory } from "./components/TransactionHistory";

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
          <Container sx={{ py: 4, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography variant="h4">Dashboard Home</Typography>
            {/* <ToggleButton value={"7days"}>
              <ToggleButton value={"7days"}>7 days</ToggleButton>
              <ToggleButton value={"30days"}>30 days</ToggleButton>
              <ToggleButton value={"90days"}>90 days</ToggleButton>
            </ToggleButton> */}
            <ButtonGroup>
              <Button variant="contained">7 days</Button>
              <Button>30 days</Button>
              <Button>90 days</Button>
            </ButtonGroup>
          </Container>
          <Grid container spacing={4} sx={{ py: 2, px: 12 }}>
            <Grid size={2}>
              <StatisticCard />
            </Grid>
            <Grid size={1}></Grid>
            <Grid size={2}>
              <StatisticCard />
            </Grid>
            <Grid size={2}></Grid>
            <Grid size={2}>
              <StatisticCard />
            </Grid>
            <Grid size={1}></Grid>
            <Grid size={2}>
              <StatisticCard />
            </Grid>
            <TransactionHistory />
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
