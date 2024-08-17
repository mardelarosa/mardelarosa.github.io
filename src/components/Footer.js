import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaTiktok } from 'react-icons/fa'; 

const FooterContainer = styled.div`
  background-color: none; 
  color: slategray; 
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
`;

const IconLink = styled.a`
  color: white;
  margin: 0 15px;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: #e0e0e0; 
  }
`;

const Footer = () => (
  <FooterContainer>
    Follow me 
    <IconLink href="https://www.instagram.com/mar_delarosa_" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
      </IconLink>

    <IconLink href="https://www.tiktok.com/@mar_delarosa._" target="_blank" rel="noopener noreferrer">
      <FaTiktok />
    </IconLink>
  </FooterContainer>
);

export default Footer;
