import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Book } from "../types";

const Add = () => {
  const [book, setBook] = useState<Book>({
    title: "",
    desc: "",
    price: 0,
    cover: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(book);
  return (
    <div className='form container mx-auto d-flex flex-column gap-4'>
      <h1>Add New Book</h1>
      <input
        type='text'
        name='title'
        placeholder='title'
        onChange={handleChange}
      />
      <input
        type='text'
        name='desc'
        placeholder='desc'
        onChange={handleChange}
      />
      <input
        type='number'
        name='price'
        placeholder='price'
        onChange={handleChange}
      />
      <input
        type='text'
        name='cover'
        placeholder='cover'
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default Add;
