import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import LogIn from "../../pages/LogIn";
import Register from "../../pages/Register";
import ComingSoon from '../../pages/ComingSoon';

const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/register" element={<Register/>} />
       <Route path="/log-in" element={<LogIn/>} />
       <Route path="/coming-soon" element={<ComingSoon/>} />
    </Routes>
  )
}

export default AppRoutes