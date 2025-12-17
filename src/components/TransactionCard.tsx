import { Card, CardContent, Container, Avatar, Typography, Box } from "@mui/material";

function TransactionCard() {
  return (
    <Card>
      <CardContent sx={{ backgroundColor: "success.light", color: "success.contrastText" }}>
        <Container sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar>G</Avatar>
          <Typography sx={{ flexGrow: 1 }}>Giuseppe</Typography>
          <Box sx={{ backgroundColor: "success.main", p: 1 }}>431 EUR</Box>
        </Container>
      </CardContent>
    </Card>
  );
}

export { TransactionCard };
