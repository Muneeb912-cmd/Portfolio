import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Index from './Pages/Index';
import PortfolioDetails from './Pages/Details';



const App = () => {


  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Routes>
        <Route path="/" element={<Index />} />       
        <Route path="/details" element={<PortfolioDetails />} />       
      </Routes>
      <Outlet />
    </div>
  );
};

export default App;
