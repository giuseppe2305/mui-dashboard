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
import { useState } from "react";

function Home() {
  const [isEmailOpen, setIsEmailOpen] = useState(true);

  const closeEmail = () => setIsEmailOpen(false);
  const openEmail = () => setIsEmailOpen(true);

  return (
    <Box component="main" sx={{ flexGrow: "1", overflowY: "auto", pb: 6 }}>
      <HeaderBar openEmail={openEmail} />
      <EmailsDrawer isOpen={isEmailOpen} handleClose={closeEmail} />
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
