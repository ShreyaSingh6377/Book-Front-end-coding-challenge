import React, { useState, useEffect } from "react";
import axios from "axios";

const GetAllBooks = () => {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/api/admin/getBooks", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setBooks(res.data); 
      })
      .catch((err) => {
        console.error("Error fetching all books", err);
        alert("Error fetching books.");
      });
  };

  useEffect(() => {
    getBooks(); 
  }, []);

  return (
    <div>
      <h3>All Books</h3>

      {books.length > 0 ? (
        <div className="container-books">
          {books.map((book) => (
            <div key={book.isbn}>
              <h4>Title: {book.title}</h4>
              <h4>Publication Year: {book.publicationYear}</h4>
              <h4>ISBN: {book.isbn}</h4>
              <h4>Author: {book.author}</h4>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>No books found</p>
      )}
    </div>
  );
};

export default GetAllBooks;
