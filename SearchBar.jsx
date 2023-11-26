// SearchBar.jsx

import React from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <TextField
      // label="Search Product"
      placeholder='Search Product'
      variant="outlined"
      fullWidth
      value={searchTerm}
      onChange={onSearchChange}
      style={{paddingLeft:'70px'}}

    />
  );
};

export default SearchBar;
