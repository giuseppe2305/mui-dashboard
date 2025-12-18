import { Card, CardContent, Container, Avatar, Typography } from "@mui/material";
import type { TransactionData } from "../types/TransactionData";
import { TransactionChip } from "./TransactionChip";

function TransactionCard({ user, ammount }: TransactionData) {
  return (
    <Card>
      <CardContent
        sx={{
          backgroundColor: `${ammount < 0 ? "error.light" : "success.light"}`,
          color: "success.contrastText",
          "&:last-child": { px: 0, py: 1 },
        }}
      >
        <Container sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar>G</Avatar>
          <Typography sx={{ flexGrow: 1 }}>{user}</Typography>
          <TransactionChip ammount={ammount} />
        </Container>
      </CardContent>
    </Card>
  );
}

export { TransactionCard };
