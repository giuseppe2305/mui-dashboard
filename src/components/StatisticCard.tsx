import { Card, CardContent, Typography } from "@mui/material";

const CARD_WIDTH = 200;

function StatisticCard() {
  return (
    <Card sx={{ width: CARD_WIDTH }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h4">32</Typography>
        <Typography sx={{ textTransform: "uppercase", fontSize: 14 }}>Orders</Typography>
      </CardContent>
    </Card>
  );
}

export { StatisticCard };
