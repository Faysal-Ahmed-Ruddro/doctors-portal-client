import {  Grid } from '@mui/material';
import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Doctor = ({doctor}) => {
    const { name, email, image } = doctor;
    return (
      <div>
        <Grid item xs={12} md={4} lg={4} style={{margin:"0 auto"}}>
            <Card style={{width:"18rem", margin:"20px"}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400px"
                  width="100%"
                  image={`data:image/jpeg;base64,${image}`}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {email}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
        </Grid>
      </div>
    );
};

export default Doctor;