import React, { useState } from "react";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";
const ClientOtp = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
    
      const [errors, setErrors] = useState({});
    
      // Handle input change
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      // Validate form
      const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.phone) newErrors.phone = "Phone number is required";
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    
      // Handle form submit
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          console.log("Form submitted successfully!", formData);
        }
      };
    

  return (
    <Box className="form-container">
      <Typography variant="h4" className="form-title text-center" >
        Account Opening
      </Typography>
      <div className="p-8">
        <h1 className="text-2xl font-semibold text-center">Welcome to the Sahulat Account</h1>
      </div>

      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '100%' }}>
  <Grid container spacing={2}>
    {/* First Name */}
    <Grid item xs={12} sm={6}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <label htmlFor="firstName" className="input-label" style={{ minWidth: '100px' }}>
            First Name
          </label>
        </Grid>
        <Grid item xs>
          <TextField
            className={`input-field ${errors.firstName ? 'error' : ''}`}
            variant="outlined"
            fullWidth
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
        </Grid>
      </Grid>
    </Grid>

    {/* Last Name */}
    <Grid item xs={12} sm={6}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <label htmlFor="lastName" className="input-label" style={{ minWidth: '100px' }}>
            Last Name
          </label>
        </Grid>
        <Grid item xs>
          <TextField
            className={`input-field ${errors.lastName ? 'error' : ''}`}
            variant="outlined"
            fullWidth
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
        </Grid>
      </Grid>
    </Grid>

    {/* Email */}
    <Grid item xs={12}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <label htmlFor="email" className="input-label" style={{ minWidth: '100px' }}>
            Email
          </label>
        </Grid>
        <Grid item xs>
          <TextField
            className={`input-field ${errors.email ? 'error' : ''}`}
            variant="outlined"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>
      </Grid>
    </Grid>

    {/* Phone Number */}
    <Grid item xs={12}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <label htmlFor="phone" className="input-label" style={{ minWidth: '100px' }}>
            Phone Number
          </label>
        </Grid>
        <Grid item xs>
          <TextField
            className={`input-field ${errors.phone ? 'error' : ''}`}
            variant="outlined"
            fullWidth
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
          />
        </Grid>
      </Grid>
    </Grid>

    {/* Submit Button */}
    <Grid item xs={12}>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="submit-button"
        fullWidth
      >
        Submit
      </Button>
    </Grid>
  </Grid>
</form>


  
     
    </Box>
  );
};

export default ClientOtp;

  