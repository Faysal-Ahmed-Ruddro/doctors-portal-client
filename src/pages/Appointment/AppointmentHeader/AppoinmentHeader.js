import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from "../../../images/chair.png"
import Calendar from '../../Shared/Calendar/Calendar';

const AppoinmentHeader = ({date,setDate}) => {
    
    return (
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Calendar date={date} setDate={setDate}></Calendar>
          </Grid>
          <Grid item xs={12} md={6}>
            <div sx={{w:75}}>
              <img style={{ width: "85%" }} src={chair} alt="" />
            </div>
          </Grid>
        </Grid>
      </Container>
    );
};

export default AppoinmentHeader;