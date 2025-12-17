import { Button, ButtonGroup } from "@mui/material";

function TimeRangeSelector() {
  return (
    <ButtonGroup>
      <Button variant="contained">7 days</Button>
      <Button>30 days</Button>
      <Button>90 days</Button>
    </ButtonGroup>
  );
}

export { TimeRangeSelector };
