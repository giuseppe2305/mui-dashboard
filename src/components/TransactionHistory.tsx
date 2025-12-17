import { Avatar, Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";

function TransactionHistory() {
  return (
    <Grid size={6}>
      <Card>
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h5">Transaction History</Typography>
          <Card>
            <CardContent sx={{ backgroundColor: "success.light", color: "success.contrastText" }}>
              <Container sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar>G</Avatar>
                <Typography sx={{ flexGrow: 1 }}>Giuseppe</Typography>
                <Box sx={{ backgroundColor: "success.main", p: 1 }}>431 EUR</Box>
              </Container>
            </CardContent>
          </Card>
          <Card>
            <CardContent sx={{ backgroundColor: "success.light", color: "success.contrastText" }}>
              <Container sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar>G</Avatar>
                <Typography sx={{ flexGrow: 1 }}>Giuseppe</Typography>
                <Box sx={{ backgroundColor: "success.main", p: 1 }}>431 EUR</Box>
              </Container>
            </CardContent>
          </Card>
          <Card>
            <CardContent sx={{ backgroundColor: "success.light", color: "success.contrastText" }}>
              <Container sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar>G</Avatar>
                <Typography sx={{ flexGrow: 1 }}>Giuseppe</Typography>
                <Box sx={{ backgroundColor: "success.main", p: 1 }}>431 EUR</Box>
              </Container>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </Grid>
  );
}

export { TransactionHistory };
