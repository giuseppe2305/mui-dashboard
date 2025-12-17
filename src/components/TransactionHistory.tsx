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
          <TransactionCard user="Giuseppe" ammount={20} />
          <TransactionCard user="Giovanni" ammount={40} />
          <TransactionCard user="Giuseppe" ammount={120} />
          <TransactionCard user="Fabio" ammount={12} />
        </CardContent>
      </Card>
    </Grid>
  );
}

export { TransactionHistory };
