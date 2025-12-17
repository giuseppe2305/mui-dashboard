import { Button, ButtonGroup } from "@mui/material";

function TimeRangeSelector() {
  {
    /* <ToggleButton value={"7days"}>
          <ToggleButton value={"7days"}>7 days</ToggleButton>
          <ToggleButton value={"30days"}>30 days</ToggleButton>
          <ToggleButton value={"90days"}>90 days</ToggleButton>
        </ToggleButton> */
  }
  return (
    <ButtonGroup>
      <Button variant="contained">7 days</Button>
      <Button>30 days</Button>
      <Button>90 days</Button>
    </ButtonGroup>
  );
}

export { TimeRangeSelector };
