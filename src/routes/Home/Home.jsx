import React from 'react';
import categories from '../../categories.json';

import { Outlet } from 'react-router-dom';

import Directory from '../../components/Directory/Directory';

const Home = () => {
  return (
    <>
      <Directory categories={categories} />
      <Outlet />
    </>
  );
};

// into App for routing
export default Home;
