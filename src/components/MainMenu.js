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

  a, button {
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    background-color: pinkseashell;
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
    top: 60px;
    left: 0;
    width: 100%;
    background-color: pinkseashell;
    z-index: 1;

    &.closed {
      display: none;
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
  color: white;
  font-size: 24px;

  @media (max-width: 768px) {
    display: block;


   
    
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
