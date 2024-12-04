

//css
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("You have been logged out!");
    navigate("/");
  };

  return (
    <div>
      <h1>Book Management Dashboard</h1>
      {isLoggedIn ? (
        <nav>
          <ul>
            {/* Styling the 'Handling Books' link like a button */}
            <li>
              <Link to="/books" className="button-style">
                Handling Books
              </Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      ) : (
        <p>Please log in to access book management functions.</p>
      )}
    </div>
  );
};

export default Dashboard;
