import React from "react";
import { Link } from "react-router-dom";
import './App.css'; 

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome to the Book Management System</h1>
      <nav>
        <ul>
          <li><Link to="/login" className="button-link">Login</Link></li>
          <li><Link to="/signup" className="button-link">Sign Up</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default WelcomePage;
