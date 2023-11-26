// Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>EXPLORE  HERE</h1>
      <h2>Welcome to Our E-COMMERCE STORE</h2>
      <div className="button-container">
        <Button
          component={Link}
          to="/admin"
          variant="contained"
          color="primary"
          style={{ borderRadius: '50%', width: '100px', height: '100px', margin: '20px' }}
        >
          Admin
        </Button>
        <Button
          component={Link}
          to="/user"
          variant="contained"
          color="secondary"
          style={{ borderRadius: '50%', width: '100px', height: '100px', margin: '20px' }}
        >
          User
        </Button>
      </div>
    </div>
  );
};

export default Home;
