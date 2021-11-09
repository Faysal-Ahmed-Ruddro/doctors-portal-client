import React from "react";
import { Container, Grid, Typography,Button } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date, setBookingSuccess }) => {
  const { name, time, space } = booking;
  const [openBookingModal, setOpen] = React.useState(false);
  const handleOpenBookingModal = () => setOpen(true);
  const handleCloseBookingModal = () => setOpen(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography
            sx={{ color: "info.main", fontWeight: "bold" }}
            variant="h5"
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="caption" gutterBottom component="div">
            Spaces Available: {space}
          </Typography>
          <Button onClick={handleOpenBookingModal} variant="contained">
            Book Appointment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        setBookingSuccess={setBookingSuccess}
        date={date}
        booking={booking}
        openBookingModal={openBookingModal}
        handleCloseBookingModal={handleCloseBookingModal}
      ></BookingModal>
    </>
  );
};

export default Booking;
