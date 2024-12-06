import React, { useState } from "react";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";
const ClientUkn = () => {

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
      <Box
  className="form-container"
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Ensures vertical centering within the viewport
    padding: 2,
  }}
>
  <Typography
    variant="h4"
    className="form-title"
    sx={{ marginBottom: 3 }} // Adds spacing below Typography
  >
    Client Information Form
  </Typography>

  <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '600px' }}>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <div>
          <label htmlFor="firstName" className="input-label">
            First Name
          </label>
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
        </div>
      </Grid>

      <Grid item xs={12} sm={6}>
        <div>
          <label htmlFor="lastName" className="input-label">
            Last Name
          </label>
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
        </div>
      </Grid>

      <Grid item xs={12}>
        <div>
          <label htmlFor="email" className="input-label">
            Email
          </label>
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
        </div>
      </Grid>

      <Grid item xs={12}>
        <div>
          <label htmlFor="phone" className="input-label">
            Phone Number
          </label>
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
        </div>
      </Grid>

      <Grid item xs={12}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="submit-button"
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  </form>
</Box>
      );
    };

    
export default ClientUkn;

  