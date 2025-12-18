import { Card, CardContent, Grid, Typography } from "@mui/material";
import { TransactionCard } from "./TransactionCard";
import type { TransactionData } from "../types/TransactionData";

interface Props {
  label: string;
  transactions: TransactionData[];
}

function TransactionsContainer({ label, transactions }: Props) {
  return (
    <Grid size={{ lg: 6 }}>
      <Card>
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h5">{label}</Typography>
          {transactions.map((el) => (
            <TransactionCard ammount={el.ammount} user={el.user} key={el.id} id={el.id}></TransactionCard>
          ))}
        </CardContent>
      </Card>
    </Grid>
  );
}

export { TransactionsContainer };
