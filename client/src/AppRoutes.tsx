// src/routes.js
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';


export const AppRoutes = () => {
  return (
    <Routes>
      {/* Define routes */}
      <Route path="/" element={<div className='font-lato'>Home</div>} />

      </Routes>
  );
};
