import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationYear, setPublicationYear] = useState("");

  const handleAddBook = () => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "http://localhost:8080/api/admin/addNewBook",
        { title, author, publicationYear },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => alert("Book added"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Add Book</h1>
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
      <input
        type="text"
        placeholder="Publication Year"
        onChange={(e) => setPublicationYear(e.target.value)}
      />
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default AddBook;
