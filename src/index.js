import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.module.css';
import { useState } from "react";
import Home from './pages/home/home';
import LoginPage from './pages/login-page/login-page';
import RegPage from './pages/reg-page/reg-page';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='login' element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='register' element={<RegPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
}

root.render(<App />);
