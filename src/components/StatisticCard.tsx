import { Card, CardContent, Typography } from "@mui/material";
import type { StatisticData } from "../types/StatisticData";

const CARD_WIDTH = 200;

interface Props {
  data: StatisticData;
}

function StatisticCard({ data }: Props) {
  return (
    <Card sx={{ width: CARD_WIDTH }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h4">{data.value}</Typography>
        <Typography sx={{ textTransform: "uppercase", fontSize: 14 }}>{data.label}</Typography>
      </CardContent>
    </Card>
  );
}

export { StatisticCard };
