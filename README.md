this is a react series
git 

<img
  src="/logo.png"
  alt="Logo"
  className="h-12 md:h-16 lg:h-20 mx-auto mb-4"  // Adjusts logo size for different screen sizes

/>

import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import { getUser } from './Api'; // Import your API function

// Column definition for DataGrid
const columns = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 170 },
  { field: 'uin', headerName: 'UIN', width: 150 },
  { field: 'kycResCode', headerName: 'Kyc Res Code', width: 150 },
  { field: 'otpResCode', headerName: 'Otp Res Code', width: 150 },
  { field: 'uknResCode', headerName: 'Ukn res code', width: 150 },
  {
    field: 'editotp',
    headerName: 'Edit Otp',
    width: 50,
    renderCell: (params) => (
      <IconButton onClick={() => params.row && params.row.id && params.row.editRow(params.row)}>
        <EditIcon />
      </IconButton>
    )
  },
  {
    field: 'editKyc',
    headerName: 'Edit Kyc',
    width: 50,
    renderCell: (params) => (
      <IconButton onClick={() => params.row && params.row.id && params.row.editRow(params.row)}>
        <EditIcon />
      </IconButton>
    )
  },
  {
    field: 'editUkn',
    headerName: 'Edit Ukn',
    width: 50,
    renderCell: (params) => (
      <IconButton onClick={() => params.row && params.row.id && params.row.editRow(params.row)}>
        <EditIcon />
      </IconButton>
    )
  },
];

const AdminDashboard = () => {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [userData, setUserData] = useState([]);  // This will hold the API data

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUser('/getAdminData'); // API call to get the data
        // Assuming the data is an array of user objects
        setUserData(data);  // Set the fetched data to userData state
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleClickOpen = (row) => {
    setFormData(row);
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle data submission (e.g., update the row data)
    console.log("Updated Data:", formData);
    // After submission, close the modal
    setOpen(false);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Client Information Form
      </Typography>

      <Typography variant="h5" gutterBottom>
        Welcome to the Admin Dashboard
      </Typography>

      {/* DataGrid Table */}
      <Box sx={{ height: 400, width: '100%', mt: 4 }}>
        <DataGrid
          rows={userData.map((row, index) => ({
            ...row,
            id: index + 1,  // Add unique id to each row (if not provided in API data)
            editRow: handleClickOpen,  // Add edit handler to each row
          }))}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 15]}
          disableSelectionOnClick
        />
      </Box>

      {/* Modal for Editing Row Data */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Client Information</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Phone"
            type="tel"
            fullWidth
            variant="outlined"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminDashboard;

{
    "name": "John Doe",
    "email": "john@example.com",
    "uin": "123456789",
    "kycResCode": "approved",
    "otpResCode": "sent",
    "uknResCode": "unknown"
  },

