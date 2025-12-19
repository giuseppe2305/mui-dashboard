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
  TableFooter,
  TablePagination,
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
          <TableFooter sx={{ backgroundColor: "primary.main" }}>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                sx={{
                  borderBottom: 0,
                  color: "primary.contrastText",
                  "& svg": { color: "primary.contrastText" },
                  "& .Mui-disabled svg": { color: "primary.light" },
                }}
                count={5}
                rowsPerPage={5}
                page={0}
                onPageChange={() => {}}
                slotProps={{
                  select: {
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                  },
                }}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export { ClientsTable };
