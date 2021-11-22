import React, { useState } from "react";
import { Input, Button, TextField, Alert } from "@mui/material";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleOnSumit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name)
    formData.append("email", email)
    formData.append("image", image)
    fetch("https://immense-river-34161.herokuapp.com/doctors", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          setSuccess(true)
        }
      })
      .catch((error) => {
        setSuccess("")
        console.error("Error:", error);
      });
}
    return (
      <div>
        <h2>Add Doctor</h2>
        <form onSubmit={handleOnSumit}>
          <TextField
            required
            sx={{ width: "50%" }}
            label="Name"
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <TextField
            sx={{ width: "50%" }}
            required
            label="Email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <br />
          <Button type="submit" variant="contained">
            Add Doctor
          </Button>
        </form>
        {success && <Alert severity="success">
              Doctors Added Successfully
            </Alert>}
      </div>
    );
  };

export default AddDoctor;
