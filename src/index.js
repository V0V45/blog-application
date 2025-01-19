import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.module.css';
import Home from './pages/home/home';
import LoginPage from './pages/login-page/login-page';
import RegPage from './pages/reg-page/reg-page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
