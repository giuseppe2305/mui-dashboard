import { Card, CardContent, Container, Avatar, Typography, Box } from "@mui/material";
import type { TransactionData } from "../types/TransactionData";

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
          <Box sx={{ backgroundColor: `${ammount < 0 ? "error.main" : "success.main"}`, p: 1 }}>{ammount} EUR</Box>
        </Container>
      </CardContent>
    </Card>
  );
}

export { TransactionCard };
