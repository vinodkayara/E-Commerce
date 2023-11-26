import React, { useState } from 'react';
import { TextField, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'; // Import the Sidebar component
import './Admin.css'; // Import the CSS file for styling

const Admin = () => {
  const [form, setForm] = useState({
    pname: '',
    img: '',
    price: '',
    descp: '',
    category: '', // New field for category
  });

  const navigate = useNavigate();

  let initialValue;
  if (localStorage.getItem('Products') === null) {
    initialValue = [];
  } else {
    initialValue = JSON.parse(localStorage.getItem('Products'));
  }

  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add validation or checks for required fields

    const newUserId = value.length === 0 ? 1 : value[value.length - 1].u_id + 1;

    const details = {
      u_id: newUserId,
      ...form,
    };

    const updatedValue = [...value, details];
    setValue(updatedValue);

    await localStorage.setItem('Products', JSON.stringify(updatedValue));
  };

  return (
    <div className="admin-container">
      <h1>Admin Page</h1>
      {/* Render the Sidebar only in the Admin route */}
      {window.location.pathname.startsWith('/admin') && <Sidebar />}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Product Name"
            fullWidth
            name="pname"
            onChange={(e) => {
              handleChange(e);
            }}
            InputLabelProps={{
              style: { color: 'black' },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Image Address"
            fullWidth
            name="img"
            onChange={(e) => {
              handleChange(e);
            }}
            InputLabelProps={{
              style: { color: 'black' },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Price"
            fullWidth
            name="price"
            onChange={(e) => {
              handleChange(e);
            }}
            InputLabelProps={{
              style: { color: 'black' },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Description"
            fullWidth
            name="descp"
            onChange={(e) => {
              handleChange(e);
            }}
            InputLabelProps={{
              style: { color: 'black' },
            }}
          />
        </Grid>
        {/* New Grid item for Category */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Category"
            fullWidth
            name="category"
            onChange={(e) => {
              handleChange(e);
            }}
            InputLabelProps={{
              style: { color: 'black' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Add Product
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Admin;
