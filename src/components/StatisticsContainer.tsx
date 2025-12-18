import { Grid } from "@mui/material";
import { StatisticCard } from "./StatisticCard";
import type { StatisticDataTuple } from "../types/StatisticData";

interface Props {
  statisticsData: StatisticDataTuple;
}

function StatisticsContainer({ statisticsData }: Props) {
  return (
    <>
      {statisticsData.map((el) => (
        <Grid container key={el.id} size={{ lg: 4, xl: 2 }}>
          <StatisticCard data={el} />
        </Grid>
      ))}
    </>
  );
}

export { StatisticsContainer };
