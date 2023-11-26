// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import ViewListIcon from '@mui/icons-material/ViewList';

const Sidebar = () => {
  return (
    <div style={{ width: '200px', backgroundColor: '' }}>
      <List>
        {/* <ListItem button component={Link} to="/addproduct">
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Add Product" />
        </ListItem> */}
        {/* <ListItem button component={Link} to="/user">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="User Page" />
        </ListItem> */}
        <ListItem button component={Link} to="/viewproduct">
          <ListItemIcon>
            <ViewListIcon />
          </ListItemIcon>
          <ListItemText primary="View Products" />
        </ListItem>
      </List>
      
    </div>
  );
};

export default Sidebar;
