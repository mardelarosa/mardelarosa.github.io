import BooksList from "../components/BooksList";
import styled from 'styled-components';


const BooksContainer = styled.div`
max-width: 800px; 
margin: 40px auto;
padding: 20px;
/*box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);*/
`;

const Books = () => {
  
    return (
        <BooksContainer>
           
        <BooksList/>
           
        </BooksContainer>
    );
  };
  
  export default Books;