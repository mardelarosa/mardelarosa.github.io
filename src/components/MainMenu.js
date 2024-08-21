import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const Menu = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  transition: height 0.3s ease, opacity 0.3s ease;
 overflow: hidden;


  &.open {
    height: 17rem; /* Ajusta la altura según el contenido */
    opacity: 1;
  }


  a, button {
    text-decoration: none;
    padding: 0.5rem 1rem;
    background-color: pinkseashell;
    border-radius: 30px;

    color: slategray;
    transition: background-color 0.3s;

    &:hover {
      background-color: lightsalmon;
      color: white;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 10rem;
    left: 0;
    width: 50vw; /* Ocupa el 50% del ancho de la pantalla */
    background-color: white;
    z-index: 1;
    border-radius: 30px; /* Agrega el border-radius para el menú en móvil */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Opcional: agrega una sombra para más estilo */
    

    &.closed {
      height: 0;
      opacity: 0;
      overflow: hidden;
    }


    @media (max-width: 480px){
      flex-direction: column;
      position: absolute;
      top: 10rem;
      left: 0;
    width: 50vw; 

    }


    a, button {
      width: 100%; 
      text-align: center; 
      padding: 0.6rem 0.6rem;
      
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: grey;
  font-size: 3rem; /* Tamaño del ícono */
  
  


  @media (max-width: 768px) {
    display: flex;
   padding: 4px;
    border-radius: 15px; /* Agrega el border-radius para el menú en móvil */
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.1); /* Opcional: agrega una sombra para más estilo */
    


   
    
  }
`;

function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </MenuButton>

      <Menu className={isOpen ? 'open' : 'closed'}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/books" onClick={() => setIsOpen(false)}>Books</Link>
        <Link to="/personalwork" onClick={() => setIsOpen(false)}>Personal Work</Link>
        <Link to="/aboutme" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </Menu>
    </>
  );
}

export default MainMenu;
