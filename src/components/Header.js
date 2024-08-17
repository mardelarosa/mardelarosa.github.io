import styled from 'styled-components';
import header from '../img/header-img.jpg';
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column;
  align-items: center;    
  padding: 1rem 2rem;   
  height: 27.13rem;
  background-image: url(${header}); 
  background-size: cover;               
  color: black; 
  position: relative; /* Permite la posición absoluta de Credits */ 
`

const Credits = styled.div`
position: absolute;
display: flex;
justify-content: flex-end;
align-items: flex-end;
  margin-top: auto; /* Empuja a Credits hacia abajo */
  width: 100%; /* Asegúrate de que ocupe todo el ancho del contenedor */
  bottom: 1vw;
  right: 1vw;
`;


const Title = styled.h1`
  text-align: center; /* Centra el texto horizontalmente */
  margin: 0;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px; 
  color:black;
  font-size: 2.5em; 
`;

const SubTitle = styled.div`
display: flex;
flex-direction: column;
justify-content: center; 
align-items: center;  
padding: 10px;
font-size: 1.5rem; 
color: black;`

;


function Header() {
  return (
    <HeaderContainer>
  
      <Title>Mar de la Rosa  
      <SubTitle><h3>Author & Writer</h3></SubTitle>
         </Title> 
<Credits>
<h5>Image by Albert Arrayás ©</h5>

</Credits>
     
      
    </HeaderContainer>

    
  );
}

export default Header;
