import React, { useState } from "react";
import axios from "axios";

const UpdateBook = () => {
  const [isbn, setIsbn] = useState("");
  const [title, setTitle] = useState("");

  const updateBook = () => {
    let token = localStorage.getItem("token");

    if (!isbn || !title) {
      alert("Both ISBN and Title are required!");
      return;
    }
    axios
      .put(
        `http://localhost:8080/api/admin/updateBook/${isbn}/${title}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        alert("Book updated successfully!");
      })
      .catch((e) => {
        console.error("Error updating book:", e);
        alert("Failed to update book. Please try again.");
      });
  };

  return (
    <div>
      <h3>Update Book</h3>
      <input
        type="number"
        placeholder="Enter ISBN"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter New Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <button onClick={updateBook}>Update Book</button>
    </div>
  );
};

export default UpdateBook;
