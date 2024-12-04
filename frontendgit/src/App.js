import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Book from './Book';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/books" element={<Book />} />
      </Routes>
    </Router>
  );
}

export default App;
