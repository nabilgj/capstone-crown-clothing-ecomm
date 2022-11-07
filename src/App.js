import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home/Home.jsx';
import Navigation from './routes/Navigation/Navigation.jsx';

const Shop = () => <h1>i am shop page</h1>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

// into index
export default App;
