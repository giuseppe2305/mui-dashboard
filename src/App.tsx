import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Avatar, Badge, Box, CssBaseline, Grid, ThemeProvider, Typography, useTheme } from "@mui/material";

import { Sidebar } from "./components/Sidebar";
import { Mail, Notifications, Search } from "@mui/icons-material";
import { TransactionsContainer } from "./components/TransactionsContainer";
import { incomes } from "./mock/incomes";
import { outcomes } from "./mock/outcomes";
import { StatisticsContainer } from "./components/StatisticsContainer";
import { statistics } from "./mock/statistics";
import { TimeRangeSelector } from "./components/TimeRangeSelector";
import { ClientsTable } from "./components/ClientsTable";

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: "1", overflowY: "auto" }}>
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
              <Badge badgeContent={4} color="primary">
                <Mail />
              </Badge>
              <Notifications />
              <Avatar>G</Avatar>
            </Box>
          </Box>
          <Box sx={{ p: 6, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography variant="h4">Dashboard Home</Typography>
            <TimeRangeSelector />
          </Box>
          <Grid container spacing={4} sx={{ pt: 2, pb: 8, px: 12 }}>
            <StatisticsContainer statisticsData={statistics} />
            <TransactionsContainer transactions={incomes} label="Incomes History" />
            <TransactionsContainer transactions={outcomes} label="Outcomes History" />
            <ClientsTable />
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
