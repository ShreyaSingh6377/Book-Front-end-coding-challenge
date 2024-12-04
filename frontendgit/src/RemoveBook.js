import React, { useState } from "react";
import axios from "axios";

const RemoveBook = () => {
  const [isbn, setIsbn] = useState("");  
  const [message, setMessage] = useState("");  

  const handleRemoveBook = () => {
    const token = localStorage.getItem("token");

    
    if (!isbn) {
      alert("Please enter a valid ISBN.");
      return;
    }

    axios
      .delete(`http://localhost:8080/api/admin/removeBook/${isbn}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setMessage("Book removed successfully");  
        setIsbn("");  
      })
      .catch((err) => {
        setMessage("Error removing the book.");  
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Remove Book</h1>
      <div>
        {/* Input */}
        <label htmlFor="isbn">Enter ISBN to remove: </label>
        <input
          type="text"
          id="isbn"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
      </div>
      <button onClick={handleRemoveBook}>Remove Book</button>
      {message && <p>{message}</p>}  {/*  message */}
    </div>
  );
};

export default RemoveBook;
