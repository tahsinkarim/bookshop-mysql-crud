import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import { Book } from "../types";
import Button from "react-bootstrap/esm/Button";

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

  const truncateString = (str: string): string => {
    const words = str.split(" ");
    if (words.length <= 5) {
      return str;
    } else {
      return words.slice(0, 5).join(" ") + "...";
    }
  };

  const handleDelete = async (id: any) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`).then(() => {
        const newBookList = books.filter((book) => book.id !== id);
        setBooks(newBookList);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='container'>
      <h2 className='text-center font-weight-bolder'>Online Book Shop</h2>
      <Row xs={1} md={3} lg={5} className='g-4'>
        {books?.map((book) => (
          <Col key={book.id}>
            <Card className='border-0'>
              {book.cover && (
                <Card.Img
                  style={{ maxWidth: "100px", maxHeight: "200px" }}
                  variant='top'
                  src={book.cover}
                  className='mx-auto rounded-0 py-4'
                />
              )}
              <Card.Body>
                <Card.Title className='text-center'>{book.title}</Card.Title>
                <Card.Text className='text-center text-muted'>
                  {truncateString(book.desc)}
                </Card.Text>
                <div className='d-flex justify-content-center w-100'>
                  <Button variant='outline-primary me-2' size='sm'>
                    <Link
                      className='text-decoration-none'
                      to={`/update/${book.id}`}
                    >
                      Update
                    </Link>
                  </Button>
                  <Button
                    onClick={() => handleDelete(book.id)}
                    variant='outline-danger'
                    size='sm'
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className='w-100 d-flex justify-content-center'>
        <Button className='my-4' variant='primary'>
          <Link className='text-white text-decoration-none' to='/add'>
            Add new book
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Books;
