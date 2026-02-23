import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Dashboard from './Dashboard'
import './index.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Session persistence
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />

        <Route path="/login" element={
          isLoggedIn ? <Navigate to="/dashboard" /> : (
            <Login
              onLogin={() => setIsLoggedIn(true)}
            />
          )
        } />

        <Route path="/signup" element={
          isLoggedIn ? <Navigate to="/dashboard" /> : (
            <Signup
              onSignup={() => window.location.href = '/login'}
            />
          )
        } />

        {/* Protected Routes */}
        <Route path="/dashboard" element={
          isLoggedIn ? (
            <Dashboard onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" />
          )
        } />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
