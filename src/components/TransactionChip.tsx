import { Chip } from "@mui/material";

interface Props {
  ammount: number;
}

function TransactionChip({ ammount }: Props) {
  return (
    <Chip
      sx={{
        backgroundColor: `${ammount < 0 ? "error.main" : "success.main"}`,
        color: `${ammount < 0 ? "error.contrastText" : "success.contrastText"}`,
        p: 1,
        minWidth: 120,
      }}
      label={`${ammount} EUR`}
    />
  );
}

export { TransactionChip };
