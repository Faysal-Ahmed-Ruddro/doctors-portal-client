import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    console.log(doctors);
    useEffect(()=>{
        fetch("https://immense-river-34161.herokuapp.com/doctors")
          .then((res) => res.json())
          .then((data) => setDoctors(data));
    },[])
    return (
      <div>
        <h2>Our Doctors</h2>
        <Container>
          <Grid container spacing={2}>
            {doctors.map((doctor) => (
              <Doctor key={doctors?._id} doctor={doctor}></Doctor>
            ))}
          </Grid>
        </Container>
      </div>
    );
};

export default Doctors;