import "./TodaysBooking.scss";
import { useEffect, useState } from "react";

// Component
import Navbar from "../../../Components/Admin/Navbar/Navbar";

// Images
import booking from "../../../Assets/calendar.png";

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

// APi Slice
import { useGetBookingsQuery } from "../../../Redux/Slices/Admin/Api/apiSlice";

const TodaysBooking = () => {
  const [date, setDate] = useState("");

  const { data: bookings, isLoading } = useGetBookingsQuery(date);

  // Todays date
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setDate(formattedDate);
  }, []);

  
  return (
    <>
      <Navbar title="Bookings" image={booking} />

      <section className="booking">
        <input
          type="date"
          placeholder="Select Date"
          name="dateInput"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        {isLoading ? (
          <div className="loading">
            <h1>Loading...</h1>
          </div>
        ) : bookings && bookings.data.length === 0 ? (
          <div className="loading">
            <h1>No data!</h1>
          </div>
        ) : (
          <>
            <TableContainer component={Paper} className="table">
              <Table aria-label="simple table">
                <TableHead className="table-head">
                  <TableRow>
                    <TableCell align="center">Sno</TableCell>
                    <TableCell align="center">Customer Details</TableCell>

                    <TableCell align="center">Theater</TableCell>
                    <TableCell align="center">Date</TableCell>
                    <TableCell align="center">Slot</TableCell>
                    <TableCell align="center">Persons</TableCell>

                    <TableCell align="center">Cake</TableCell>
                    <TableCell align="center">Decoration</TableCell>
                    <TableCell align="center">Addon</TableCell>

                    <TableCell align="center">Amount</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody className="table-body">
                  {bookings &&
                    bookings.data.map((booking, index) => (
                      <TableRow key={booking.slotId}>
                        <TableCell align="center">{index + 1}</TableCell>
                        <TableCell align="center">
                          {booking.clientName} <br />
                          {booking.clientPhoneNumber} <br />
                          {booking.clientEmail}
                        </TableCell>
                        <TableCell align="center">
                          {booking.theaterName}
                        </TableCell>
                        <TableCell align="center">
                          {booking.bookedDate}
                        </TableCell>
                        <TableCell align="center">
                          {booking.bookedslot}
                        </TableCell>
                        <TableCell align="center">
                          {booking.noOfPersons}
                        </TableCell>
                        <TableCell align="center">
                          {booking.cake === "null" ? "-" : booking.cake}
                        </TableCell>
                        <TableCell align="center">
                          {booking.eventDecoration === "null"
                            ? "-"
                            : booking.eventDecoration}
                        </TableCell>
                        <TableCell align="center">
                          {booking.addOn === "null" ? "-" : booking.addOn}
                        </TableCell>
                        <TableCell align="center">
                          ₹ {booking.totalPrice}/-
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            {/* <Pagination
           count={2}
           size="small"
           color="standard"
           className="pagination"
         /> */}
          </>
        )}
      </section>
    </>
  );
};

export default TodaysBooking;
