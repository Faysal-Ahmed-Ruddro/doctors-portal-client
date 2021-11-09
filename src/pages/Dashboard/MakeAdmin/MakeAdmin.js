import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from  "../../../hooks/useAuth"
const MakeAdmin = () => {
    const [email, setEmail] = useState("")
    const [success, setSuccess] = useState(false)
    const { token } = useAuth()

    const handleOnBlurEmail = e=> {
        setEmail(e.target.value)
    }
    
    const handleAdminSubmit = e =>{
        const user = {email}
        fetch("https://immense-river-34161.herokuapp.com/users/admin", {
          method: "PUT",
          headers: {
            authorization: `Bearer ${token}`,
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              setSuccess(true);
            }
            console.log(data);
          });
        e.preventDefault()
    }
    return (
      <div>
        <h2>Make an Admin</h2>
        <form onSubmit={handleAdminSubmit}>
          <TextField
            sx={{ mx: 1, width: "20%" }}
            label="Email"
            name="email"
            type="email"
            variant="standard"
            onBlur={handleOnBlurEmail}
          ></TextField>
          <Button sx={{ mt: 1 }} type="submit" variant="contained">
            Make Admin
          </Button>
        </form>
        {success && (
          <Alert severity="success">Made Admin successfully</Alert>
        )}
      </div>
    );
};

export default MakeAdmin;