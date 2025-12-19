import { useContext } from "react";
import { TimeRangeContext } from "./TimeRangeContext";

function useTimeRangeContext() {
  const context = useContext(TimeRangeContext);

  if (!context) throw new Error("Cannot access Time Range Context outside his provider.");
  return context;
}

export { useTimeRangeContext };
