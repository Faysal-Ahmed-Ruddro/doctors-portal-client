import React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from '@mui/material';
import Typography from "@mui/material/Typography";
import flouride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import SingleService from '../SingleService/SingleService';


const services = [
  {
    name: "Flouride Treatment",
    description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. soluta quas, eveniet magni voluptatum voluptatibus non ducimus laborum? Excepturi, totam.",
    img : flouride,
  },
  {
    name: "Cavity Filling",
    description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. soluta quas, eveniet magni voluptatum voluptatibus non ducimus laborum? Excepturi, totam.",
    img : cavity,
  },
  {
    name: "Teeth Whitening",
    description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. soluta quas, eveniet magni voluptatum voluptatibus non ducimus laborum? Excepturi, totam.",
    img : whitening,
  },
]

const OurServices = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Typography
            sx={{ color: "success.main" ,m:2}}
            gutterBottom
            variant="h6"
            component="div"
          >
            OUR SERVICES
          </Typography>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ fontWeight: "bold",m:2 }}
          >
            Services We Porvide
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {services.map((service) => (
              <SingleService key={services.name} service={service}>
                {" "}
              </SingleService>
            ))}
          </Grid>
        </Container>
      </Box>
    );
};

export default OurServices;