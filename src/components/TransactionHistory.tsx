import { Card, CardContent, Grid, Typography } from "@mui/material";
import { TransactionCard } from "./TransactionCard";

interface Props {
  label: string;
}

function TransactionHistory({ label }: Props) {
  return (
    <Grid size={6}>
      <Card>
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h5">{label}</Typography>
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
