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
  const [userInfo, setUserInfo] = useState(null);

  return (
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home userInfo={userInfo} setUserInfo={setUserInfo} />} />
        <Route path='login' element={<LoginPage userInfo={userInfo} setUserInfo={setUserInfo} />} />
        <Route path='register' element={<RegPage userInfo={userInfo} setUserInfo={setUserInfo} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
}

root.render(<App />);
