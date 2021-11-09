import { Grid } from '@mui/material';
import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {  CardActionArea,  } from "@mui/material";

const SingleService = (props) => {
    const {name,description,img} = props.service;
    return (
      <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ maxWidth: 345, my: 4, border: 0, boxShadow: 0,}}>
          <CardActionArea sx={{py:4}}>
            <CardMedia
              component="img"
              style={{ width: "auto", height: "50px", margin: "0 auto" }}
              image={img}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
};

export default SingleService;