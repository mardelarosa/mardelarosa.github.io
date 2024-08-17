// src/components/BooksList.js

import React from 'react';
import booksData from './BooksData';

/*const BooksList = () => {
  return (
    <div>
      <ul>
        {booksData.map((book, index) => (
          <li key={index}>
            <img src={book.coverUrl} alt={book.title} />
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <a href={book.purchaseLink}>Buy this book</a>
          </li>
        ))}
      </ul>
    </div>
  );
};*/

const BooksList = () => {
    return (
      <div style={styles.grid}>
        {booksData.map((book, index) => (
          <a 
          href={book.bookLink} 
          key={index} 
          style={styles.imageWrapper}
          title={`View more about ${book.title}`} // Aquí el título del enlace
               
          >
            <img
              src={book.coverUrl}
              alt={book.title}
              style={styles.image} // Aquí aplicas el estilo
            />
          </a>
        ))}
      </div>
    );
  };

const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '1rem',
    },
    imageWrapper: {
      textDecoration: 'none',
    },
    image: {
      width: '100%',       // Asegura que la imagen ocupe el ancho completo del contenedor
      height: 'auto',      // Mantiene la proporción de la imagen
      objectFit: 'cover',  // Opcional: recorta la imagen para cubrir el contenedor sin distorsionar
      borderRadius: '8px', // Opcional: redondea los bordes de la imagen
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Opcional: añade una sombra para darle profundidad
    },
  };
  

export default BooksList;
