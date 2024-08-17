/*import React, { useState, useEffect } from 'react';
import { fetchBooksByAuthor } from '../services/api';
import { Link } from 'react-router-dom';
import defaultImage from "../img/img-default.jpeg";  
import { BooksContainer, BooksGrid, BookItem, LoadingContainer } from './OutOfService/BooksStyled';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBooks = async () => {
      const result = await fetchBooksByAuthor("Albert Arrayás");
      setBooks(result);
      setIsLoading(false);
    };

    getBooks();
  }, []);

  if (isLoading) return <LoadingContainer>Loading...</LoadingContainer>;

  return (
      <BooksContainer>
          <h2>Books by Albert Arrayás</h2>
          <BooksGrid>
              {books.map((book, index) => (

                  <BookItem key={index}>
                      <Link to={`/book/${book.id}`}>
                          <h3>{book.volumeInfo.title}</h3>
                          <img src={book.volumeInfo.imageLinks?.thumbnail || defaultImage} alt={book.volumeInfo.title} />
                      </Link>

                  </BookItem>
              ))}
          </BooksGrid>
      </BooksContainer>
  );
};

export default Books;

*/



