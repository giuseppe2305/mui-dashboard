import { incomes } from "../mock/incomes";
import { outcomes } from "../mock/outcomes";
import { statistics } from "../mock/statistics";

import { ClientsTable } from "./ClientsTable";
import { HeaderBar } from "./HeaderBar";
import { StatisticsContainer } from "./StatisticsContainer";
import { TimeRangeSelector } from "./TimeRangeSelector";
import { TransactionsContainer } from "./TransactionsContainer";

import { Box, Typography, Grid } from "@mui/material";

function Home() {
  return (
    <Box component="main" sx={{ flexGrow: "1", overflowY: "auto" }}>
      <HeaderBar />
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
  );
}

export { Home };
