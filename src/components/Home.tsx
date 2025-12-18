import { Email } from "@mui/icons-material";
import { incomes } from "../mock/incomes";
import { outcomes } from "../mock/outcomes";
import { statistics } from "../mock/statistics";

import { ClientsTable } from "./ClientsTable";
import { HeaderBar } from "./HeaderBar";
import { StatisticsContainer } from "./StatisticsContainer";
import { TimeRangeSelector } from "./TimeRangeSelector";
import { TransactionsContainer } from "./TransactionsContainer";

import { Box, Typography, Grid, Stack, Container } from "@mui/material";
import { EmailsDrawer } from "./EmailsDrawer";

function Home() {
  return (
    <Box component="main" sx={{ flexGrow: "1", overflowY: "auto", pb: 6 }}>
      <HeaderBar />
      <EmailsDrawer />
      <Stack
        sx={{
          p: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { md: "row" },
        }}
      >
        <Typography variant="h4">Dashboard Home</Typography>
        <TimeRangeSelector />
      </Stack>
      <Grid container spacing={4} sx={{ pt: 2, pb: 8, px: { xs: 2, lg: 12 }, justifyContent: "center" }}>
        <StatisticsContainer statisticsData={statistics} />
        <TransactionsContainer transactions={incomes} label="Incomes History" />
        <TransactionsContainer transactions={outcomes} label="Outcomes History" />
      </Grid>
      <Container>
        <ClientsTable />
      </Container>
    </Box>
  );
}

export { Home };
