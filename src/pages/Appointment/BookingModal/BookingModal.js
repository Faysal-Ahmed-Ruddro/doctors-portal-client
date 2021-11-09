import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useAuth from "../../../hooks/useAuth";
import { jsonEval } from "@firebase/util";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  openBookingModal,
  handleCloseBookingModal,
  booking,
  date,
  setBookingSuccess,
}) => {
  const { name, space, time } = booking;
  const { user } = useAuth();

  const initializeInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [bookingInfo, setBookingInfo] = useState(initializeInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
    console.log(newInfo);
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
    // collect data
    const appointment = {
      ...bookingInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString(),
    };
    // send data to server
    console.log(appointment);
    fetch("https://immense-river-34161.herokuapp.com/appointments", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccess(true);
          handleCloseBookingModal();
        }
      });
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBookingModal}
        onClose={handleCloseBookingModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade style={{ border: "none" }} in={openBookingModal}>
          <Box sx={style}>
            <Typography
              style={{ color: "navy" }}
              sx={{ textAlign: "center" }}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              {name}
            </Typography>
            <form onSubmit={handleBookSubmit}>
              <TextField
                sx={{ width: "100%", m: 1 }}
                disabled
                id="outlined-size-small"
                defaultValue={time}
                size="small"
              />
              <TextField
                sx={{ width: "100%", m: 1 }}
                id="outlined-size-small"
                defaultValue={user.displayName}
                name="patientName"
                onBlur={handleOnBlur}
                size="small"
              />
              <TextField
                sx={{ width: "100%", m: 1 }}
                id="outlined-size-small"
                defaultValue={user.email}
                name="email"
                onBlur={handleOnBlur}
                size="small"
              />
              <TextField
                sx={{ width: "100%", m: 1 }}
                id="outlined-size-small"
                defaultValue="Phone Number"
                name="phone"
                onBlur={handleOnBlur}
                size="small"
              />
              <TextField
                sx={{ width: "100%", m: 1 }}
                disabled
                id="outlined-size-small"
                defaultValue={date.toDateString()}
                size="small"
              />
              <Button
                style={{ margin: "0 auto" }}
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BookingModal;
