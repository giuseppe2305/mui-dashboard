import { Card, CardContent, Grid, Typography } from "@mui/material";
import { TransactionCard } from "./TransactionCard";

function TransactionHistory() {
  return (
    <Grid size={6}>
      <Card>
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h5">Transaction History</Typography>
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
        </CardContent>
      </Card>
    </Grid>
  );
}

export { TransactionHistory };
