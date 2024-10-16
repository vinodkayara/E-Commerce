// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom'; //which allows you to navigate to different routes in your application without reloading the page.

const Home = ({ setShowSidebar }) => {
  const handleAdminClick = () => {
    setShowSidebar(true);
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={handleAdminClick}>
        <Link to="/admin">Admin</Link>
      </button>
    </div>
  );
};

export default Home;
