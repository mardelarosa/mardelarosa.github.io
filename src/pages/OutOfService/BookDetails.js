/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import defaultImg from '../img/img-default.jpeg';
import { DetailsContainer } from './BookDetailsStyled';


const BookDetails = () => {
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
        setBookDetails(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  if (!bookDetails) return <div>Loading...</div>;

  return (
    <div>
      <DetailsContainer>
        <h2>{bookDetails.volumeInfo.title}</h2>

        <div className="image-description-container">


          <img src={bookDetails.volumeInfo.imageLinks?.thumbnail || defaultImg} alt={bookDetails.volumeInfo.title} />

          <div className="description" dangerouslySetInnerHTML={{ __html: bookDetails.volumeInfo.description || "Descripción no disponible." }} />
        </div>

        <p>Editorial: {bookDetails.volumeInfo?.publisher}</p>
        <p>Autores:  {bookDetails.volumeInfo?.authors?.join(', ')}</p>
        <p>Fecha de publicación: {bookDetails.volumeInfo?.publishedDate}</p>
        <p>Número de páginas: {bookDetails.volumeInfo?.pageCount}</p>
        <p>
          Categorías:
          {bookDetails.volumeInfo?.categories && bookDetails.volumeInfo.categories.length > 0
            ? bookDetails.volumeInfo.categories.join(', ')
            : "No hay categorías asignadas a este libro"}
        </p>
        <p>
          {bookDetails.volumeInfo.industryIdentifiers?.[0]?.type.replace('_10', '') + ': '}
          {bookDetails.volumeInfo.industryIdentifiers?.[0]?.identifier}
        </p>
      </DetailsContainer>
    </div>

  );
};

export default BookDetails;*/
