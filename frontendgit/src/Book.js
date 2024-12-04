import React, { useState } from "react";
import AddBook from "./AddBook";
import UpdateBook from "./UpdateBook";
import GetAllBooks from "./GetAllBooks";
import RemoveBook from "./RemoveBook";
import GetBook from "./GetBook";

const Book = () => {
  const [selectedFunctionality, setSelectedFunctionality] = useState(null);

  return (
    <div className="container">
      <h2>Book Management Dashboard</h2>

      <div>
        <button onClick={() => setSelectedFunctionality("addBook")}>Add Book</button>
        <button onClick={() => setSelectedFunctionality("getAllBooks")}>Get All Books</button>
        <button onClick={() => setSelectedFunctionality("removeBook")}>Remove Book</button>
        <button onClick={() => setSelectedFunctionality("updateBook")}>Update Book</button>
        <button onClick={() => setSelectedFunctionality("getBook")}>Get Book by ID</button>
      </div>

      {selectedFunctionality === "addBook" && <AddBook />}
      {selectedFunctionality === "getAllBooks" && <GetAllBooks />}
      {selectedFunctionality === "removeBook" && <RemoveBook />}
      {selectedFunctionality === "updateBook" && <UpdateBook />}
      {selectedFunctionality === "getBook" && <GetBook />}
    </div>
  );
};

export default Book;
