import "./Message.scss";
import { toast } from "react-hot-toast";

// Component
import Navbar from "../../../Components/Admin/Navbar/Navbar";

// Images
import message from "../../../Assets/message.png";
import deleteImg from "../../../Assets/delete.png";

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

// Api Slice
import {
  useGetMessageQuery,
  useDeleteMessageMutation,
} from "../../../Redux/Slices/Admin/Api/apiSlice";

const Message = () => {
  const { data, error, isLoading } = useGetMessageQuery();
  const [deleteMessage] = useDeleteMessageMutation();

  const handleDelete = async (id) => {
    const response = await deleteMessage(id);
    if (response.data) {
      toast.success("Deleted!");
    }
    if (response.error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <Navbar title="Messages" image={message} />
      <section className="message">
        {isLoading ? (
          <div className="loading">
            <h1>Loading...</h1>
          </div>
        ) : data && data.data.length === 0 ? (
          <div className="loading">
          <h1>No data!</h1>
        </div>
        ) : (
          <>
            <TableContainer component={Paper} className="table">
              <Table aria-label="simple table">
                <TableHead className="table-head">
                  <TableRow>
                    <TableCell align="center">Sno.</TableCell>
                    <TableCell align="center">Full Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Phone Number</TableCell>
                    <TableCell align="center">Message</TableCell>
                    <TableCell align="center">Date & Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="table-body">
                  {data &&
                    data.data.map((row, index) => (
                      <TableRow key={row.contactId}>
                        <TableCell align="center">{index + 1}</TableCell>
                        <TableCell align="center">{row.fullName}</TableCell>
                        <TableCell align="center">{row.email}</TableCell>
                        <TableCell align="center">{row.phoneNumber}</TableCell>
                        <TableCell align="center">{row.message}</TableCell>
                        <TableCell align="center">
                          {new Date(row.submissionDate).toLocaleString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "2-digit",
                              year: "2-digit",
                              hour: "2-digit",
                              minute: "2-digit",
                              second: "2-digit",
                              hour12: true,
                            }
                          )}
                        </TableCell>
                        <TableCell align="center">
                          <img
                            src={deleteImg}
                            alt=""
                            style={{ width: "20px", cursor: "pointer" }}
                            onClick={() => handleDelete(row.contactId)}
                          />
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

export default Message;
