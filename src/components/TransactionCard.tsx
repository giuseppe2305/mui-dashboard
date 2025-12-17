import { Card, CardContent, Container, Avatar, Typography, Box } from "@mui/material";

interface Props {
  user: string;
  ammount: number;
}

function TransactionCard({ user, ammount }: Props) {
  return (
    <Card>
      <CardContent
        sx={{ backgroundColor: `${ammount < 0 ? "error.light" : "success.light"}`, color: "success.contrastText" }}
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
