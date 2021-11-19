import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { NavLink } from "react-router-dom";

const Appointments = ({date}) => {
  const { user ,token} = useAuth();
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const url = `https://immense-river-34161.herokuapp.com/appointments?email=${
      user.email
    }&date=${date?.toLocaleDateString()}`;
    fetch(url,{
      headers: { "authorization" : `Bearer ${token}`}
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [date]);
  return (
    <div>
      <h2> Appointments: {appointments.length}</h2>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="Appointment Table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Service</TableCell>
              <TableCell align="center">Time</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Aciton</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow
                key={appointment._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {appointment?.patientName}
                </TableCell>
                <TableCell align="right">{appointment?.serviceName}</TableCell>
                <TableCell align="right">{appointment?.time}</TableCell>
                <TableCell align="right">{appointment?.date}</TableCell>
                <TableCell align="right">
                  {appointment?.payment ? (
                    "Paid"
                  ) : (
                    <NavLink to={`dashboard/payment/${appointment._id}`}>
                      <button> Pay </button>{" "}
                    </NavLink>
                  )}{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Appointments;
