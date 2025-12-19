import { Button, ButtonGroup } from "@mui/material";
import type { ChildrenString } from "../types/ChildrenString";
import { TimeRangeProvider } from "../contexts/TimeRangeContext";
import { useTimeRangeContext } from "../contexts/useTimeRangeContext";

function TimeRangeSelector() {
  return (
    <TimeRangeProvider>
      <ButtonGroup>
        <TimeButton>7 days</TimeButton>
        <TimeButton>30 days</TimeButton>
        <TimeButton>90 days</TimeButton>
      </ButtonGroup>
    </TimeRangeProvider>
  );
}

function TimeButton({ children }: ChildrenString) {
  const { timeRange, setTimeRange } = useTimeRangeContext();

  const value = children.replace(/ /g, "");
  const active = value === timeRange;

  return (
    <Button onClick={() => setTimeRange(value)} variant={active ? "contained" : "outlined"}>
      {children}
    </Button>
  );
}

export { TimeRangeSelector };
