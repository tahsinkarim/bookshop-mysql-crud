import axios from "axios";
import React, { useState, useEffect } from "react";
import { Book } from "../types";

const Books = () => {
  //Usesate to contsain books
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllBooks();
  }, []);
  return (
    <div>
      <h1>Book Shop</h1>
      <div>
        {books?.map((book) => (
          <div key={book.id}>
            {book.cover && <img src={book.cover} alt='' />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
