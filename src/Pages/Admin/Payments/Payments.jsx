import "./Payments.scss";

// Component
import Navbar from "../../../Components/Admin/Navbar/Navbar";

// Images
import payment from "../../../Assets/money.png";

// Data
import { data } from "./data";

// MUI
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Pagination,
} from "@mui/material";

const Payments = () => {
  return (
    <>
      <Navbar title="Payments" image={payment} />
      <section className="payments">
        <TableContainer component={Paper} className="table">
          <Table aria-label="simple table">
            <TableHead className="table-head">
              <TableRow>
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Payer</TableCell>
                <TableCell align="center">Account Number</TableCell>
                <TableCell align="center">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table-body">
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.amount}</TableCell>
                  <TableCell align="center">{row.payer}</TableCell>
                  <TableCell align="center">{row.accountNumber}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          count={2}
          size="small"
          color="standard"
          className="pagination"
        />
      </section>
    </>
  );
};

export default Payments;
