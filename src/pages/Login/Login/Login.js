import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Login = () => {
  const { user,isLoading, signInWithGoogle, signInWithEmailPass } = useAuth();
  const [loginData, setLoginData] = useState({});

  const location = useLocation();
  const history = useHistory()

  const handleOnChange = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[feild] = value;
    setLoginData(newLoginData);
  };
  const handleLogin = (e) => {
    signInWithEmailPass(loginData?.email, loginData?.password, location,history);
    e.preventDefault();
  };
  const handleGoogleSignIn = ()=>{
    signInWithGoogle(location, history)
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 8 }} item xs={12} md={6} lg={6}>
          <Typography varian="body1" gutterBottom>
            Login
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLogin}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                onBlur={handleOnChange}
                id="standard-basic"
                label="Your Email"
                name="email"
                type="email"
                variant="standard"
              />
              <br />
              <TextField
                sx={{ width: "75%", m: 1 }}
                onBlur={handleOnChange}
                id="standard-password-input"
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                variant="standard"
              />
              <br />
              <Button
                type="submit"
                sx={{ width: "75%", m: 1 }}
                variant="contained"
              >
                Log In
              </Button>
              <Button
                onClick={handleGoogleSignIn}
                type="submit"
                sx={{ width: "75%", m: 1 }}
                variant="outlined"
              >
                Google Sign In
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button
                  type="submit"
                  sx={{ width: "75%", m: 1 }}
                  variant="text"
                >
                  New User ? Please Register
                </Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">Account Login successfully</Alert>
          )}
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <img src={login} alt="Girl in a jacket" width="500" height="600" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
