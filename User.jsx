import React, { useEffect, useState } from 'react';
import ImgMediaCard from './ImgMediaCard';
import SearchBar from './SearchBar'; // Import the SearchBar component
import TextField from '@mui/material/TextField'; // Import TextField from Material-UI
import Autocomplete from '@mui/material/Autocomplete'; // Import Autocomplete from Material-UI
import './User.css';


const User = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Fetch data from storage or API
    const storedData = JSON.parse(localStorage.getItem('Products')) || [];
    setData(storedData);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e, value) => {
    setSelectedCategory(value || ''); // Set the selected category
  };

  // Extract unique categories from data
  const categories = Array.from(
    new Set(data.map((product) => product.category))
  ).filter((category) => category);

  return (
    <div>
      <h1>User Page</h1>
      {/* Use the SearchBar component */}


      <div className="card-container">
        <div className="category-dropdown" style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '1000px' }}>
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
          <Autocomplete
            value={selectedCategory}
            onChange={handleCategoryChange}
            options={categories}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Filter by Category"
                sx={{ width: '300px', alignItems: 'center' }} // Set the desired width
                InputLabelProps={{
                  style: { color: 'black' },
                }}
              />
            )}
          />
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', paddingLeft: '50px' }}>

          {data
            .filter(
              (product) =>
                product.pname.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (selectedCategory === '' || product.category === selectedCategory)
            )
            .map((product) => (
              <ImgMediaCard key={product.u_id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default User;
