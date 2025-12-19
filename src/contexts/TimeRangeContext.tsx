import { createContext, useState } from "react";
import type { ChildrenNode } from "../types/ChildrenNode";

interface ContextValue {
  timeRange: string;
  setTimeRange: (value: string) => void;
}

const TimeRangeContext = createContext<undefined | ContextValue>(undefined);

function TimeRangeProvider({ children }: ChildrenNode) {
  const [timeRange, setTimeRange] = useState("7days");
  return <TimeRangeContext.Provider value={{ timeRange, setTimeRange }}>{children}</TimeRangeContext.Provider>;
}

export { TimeRangeContext, TimeRangeProvider };
