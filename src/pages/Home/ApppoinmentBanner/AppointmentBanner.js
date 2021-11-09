import React from "react";
import "./AppointmentBanner.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import { Button, Typography } from "@mui/material";

const AppointmentBanner = () => {
  return (
    <Box style={{ marginTop: 70 }}>
      <Grid className="box" container spacing={2}>
        <Grid xs={12} md={6}>
          <div>
            <img src={doctor} alt="" />
          </div>
        </Grid>
        <Grid xs={12} md={6}>
          <Box sx={{ textAlign: "left" , p:3 }}>
            <div sx={{ textAlign: "left" }}>
              <Typography
                style={{ color: "#4CECD8" }}
                variant="h6"
                sx={{ my: 3, textAlign: "left" }}
              >
                APPOINTMENT
              </Typography>
              <Typography
                style={{ color: "#fff" }}
                variant="h4"
                sx={{ my: 3, textAlign: "left" }}
              >
                Make an Appointment today
              </Typography>
              <Typography
                style={{ color: "#fff" }}
                variant="body1"
                sx={{ textAlign: "left" }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                maxime debitis, provident commodi deleniti officiis eveniet
                explicabo maiores similique. Sit.
              </Typography>
              <Button
                sx={{ my:1, textAlign: "left" }}
                style={{ backgroundColor: "#4CECD8" }}
                variant="contained"
              >
                Learn More
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
