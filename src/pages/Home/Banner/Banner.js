import React from 'react';
import "./Banner.css"
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import { Button, Container, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Banner = () => {
    return (
      <Container sx={{ flexGrow: 1, my: 2 }}>
        <Grid className="bannerBg" container spacing={2}>
          <Grid style={{ textAlign: "left" }} item xs={12} md={6} lg={6}>
            <Typography variant="h4">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography variant="body1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              repudiandae saepe odit quae quidem iste.
            </Typography>
            <NavLink style={{textDecoration:"none"}} to="/appointment">
              <Button variant="contained">Get Appointment</Button>
            </NavLink>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <img style={{ width: "80%" }} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Banner;