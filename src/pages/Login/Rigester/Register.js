import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Register = () => {
  const { user, error, registerNewUser, isLoading, signInWithGoogle } =
    useAuth();
  const [registerData, setRegisterData] = useState({});
  const history = useHistory();
  const location= useLocation()

  const handleOnBlur = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...registerData };
    newLoginData[feild] = value;
    setRegisterData(newLoginData);
  };
   const handleGoogleSignIn = () => {
     signInWithGoogle(location, history);
   };
  const handleRegister = (e) => {
    if (registerData.password !== registerData.password2) {
      alert("Your Password didn't matched yet");
      return;
    }
    registerNewUser(registerData.email, registerData.password,registerData.name,history);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid sx={{ py: 2 }} container spacing={2}>
        <Grid sx={{ mt: 8 }} item xs={12} md={6} lg={6}>
          <Typography varian="body1" gutterBottom>
            Please Register
          </Typography>

          {!isLoading && (
            <form onSubmit={handleRegister}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                onBlur={handleOnBlur}
                id="standard-basic"
                label="Your Name"
                name="name"
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                onBlur={handleOnBlur}
                id="standard-basic"
                label="Your Email"
                name="email"
                type="email"
                variant="standard"
              />
              <br />
              <TextField
                sx={{ width: "75%", m: 1 }}
                onBlur={handleOnBlur}
                id="standard-password-input"
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                onBlur={handleOnBlur}
                id="standard-password-input"
                label="Confirm Password"
                name="password2"
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
                Register
              </Button>
              <Button
                onClick={handleGoogleSignIn}
                type="submit"
                sx={{ width: "75%", m: 1 }}
                variant="outlined"
              >
                Google Sign In
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button
                  type="submit"
                  sx={{ width: "75%", m: 1 }}
                  variant="text"
                >
                  Already Registered ? Please Login
                </Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">Account Created successfully</Alert>
          )}
          {error && <Alert severity="error">{error}</Alert>}
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <img src={login} alt="Girl in a jacket" width="500" height="600" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
