import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Typography,
  Pagination,
  Stack,
  Divider,
} from "@mui/material";
import { clients } from "../mock/clients";

function ClientsTable() {
  return (
    <Grid size={12}>
      <Typography variant="h4" sx={{ py: 2 }}>
        Clients Table
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "primary.main" }}>
              <TableCell sx={{ color: "primary.contrastText" }}>
                <Typography>Clients</Typography>
              </TableCell>
              <TableCell sx={{ color: "primary.contrastText" }} align="right">
                ID
              </TableCell>
              <TableCell sx={{ color: "primary.contrastText" }} align="right">
                Name
              </TableCell>
              <TableCell sx={{ color: "primary.contrastText" }} align="right">
                Email
              </TableCell>
              <TableCell sx={{ color: "primary.contrastText" }} align="right">
                Orders
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client, i) => (
              <TableRow key={client.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  #{i + 1}
                </TableCell>
                <TableCell align="right">{client.id}</TableCell>
                <TableCell align="right">{client.name}</TableCell>
                <TableCell align="right">{client.email}</TableCell>
                <TableCell align="right">{client.orders}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Divider />
        <Stack
          sx={{
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            py: 1,
            px: 4,
            backgroundColor: "primary.light",
            color: "primary.contrastText",
          }}
        >
          <Typography>Page 1 of 10</Typography>
          <Pagination
            sx={{
              "& .MuiPaginationItem-root": {
                color: "primary.contrastText",
              },
            }}
            color="primary"
            count={10}
          />
        </Stack>
      </TableContainer>
    </Grid>
  );
}

export { ClientsTable };
