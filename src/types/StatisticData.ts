export interface StatisticData {
  id: number;
  label: string;
  value: number | string;
}

export type StatisticDataTuple = [
  StatisticData,
  StatisticData,
  StatisticData,
  StatisticData,
  StatisticData,
  StatisticData
];
