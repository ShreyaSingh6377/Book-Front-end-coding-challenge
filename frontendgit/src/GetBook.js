
import React, { useState } from "react";
import axios from "axios";

const GetBook = () => {
  const [isbn, setIsbn] = useState("");
  const [book, setBook] = useState(null);

  const getBookById = () => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:8080/api/admin/getBookById/${isbn}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.error("Error fetching book by ID", err);
        alert("Error fetching book details.");
      });
  };

  return (
    <div>
      <h3>Get Book by ID</h3>
      <input
        type="number"
        placeholder="Enter ISBN"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <button onClick={getBookById}>Get Book</button>

      {book && (
        <div>
          <h4>ISBN: {book.isbn}</h4>
          <h4>Title: {book.title}</h4>
          <h4>Author: {book.author}</h4>
          <h4>Published Year: {book.publicationYear}</h4>
        </div>
      )}
    </div>
  );
};

export default GetBook;
