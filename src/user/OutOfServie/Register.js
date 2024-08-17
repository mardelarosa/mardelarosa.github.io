/* import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  margin-top: 1rem;
  min-height: 50vh; 
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #0077b6;
    outline: none;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;

  input[type="checkbox"] {
    margin-right: 5px;
  }
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #0077b6;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005994;
  }
`;

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPremium, setIsPremium] = useState(false);
  const navigate = useNavigate(); 

  const handleRegister = () => {
    
        if (localStorage.getItem(email)) {
          alert("Este email ya está registrado.");
          return;
        }
        localStorage.setItem(email, JSON.stringify({ password, isPremium }));
        alert("Registro completado :) \nAhora debes iniciar sesión");
        navigate("/login"); 
      };
      


  return (
    <RegisterContainer>
        <h3>Regístrese a continuación</h3>
        <br></br>
      <StyledInput 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={e => setEmail(e.target.value)}
      />
      <StyledInput 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={e => setPassword(e.target.value)}
      />
      <CheckboxLabel>
        <input 
          type="checkbox" 
          checked={isPremium} 
          onChange={() => setIsPremium(prev => !prev)}
        />
        Premium
      </CheckboxLabel>
      <StyledButton onClick={handleRegister}>Register</StyledButton>
    </RegisterContainer>
  );
}

export default Register;
*/