import axios from "axios";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Book } from "../types";

const Update = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
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
      await axios.put(`http://localhost:8800/books/${id}`, book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(book);
  return (
    <div className='form d-flex flex-column gap-3 mx-auto container'>
      <h1>Update the Book</h1>
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
      <Button
        variant='secondary'
        className='text-decoration-none'
        onClick={handleSubmit}
      >
        Update
      </Button>
    </div>
  );
};

export default Update;
