import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 55vh;
  padding: 1rem;


  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }

`;

const ContactTitle = styled.h2`
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const EmailLink = styled.a`
&& {
  color: #007BFF;  
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

function ContactMe() {
  return (
    <ContactContainer>
      <ContactTitle>CONTACT FOR PROPOSALS AND COLLABORATION</ContactTitle>
      <p>Send me an email and we can talk. I'm all ears :)</p>
      <br></br>
            <EmailLink href="mailto:hello@mardelarosa.com">hello@mardelarosa.com</EmailLink>
        

        </ContactContainer>
    );
}

export default ContactMe;
