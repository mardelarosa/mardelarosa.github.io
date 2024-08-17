/*import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from './AuthContext'; 
import { Link } from 'react-router-dom';

const LoginContainer = styled.div`
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


  & a {
    color: white; 
    text-decoration: none; 
    cursor: pointer; 
  }
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

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #0077b6;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;


  
  & a:hover {
    color: A_DARKER_COLOR;
  }

  &:hover {
    background-color: #005994;

   
  }
`;

function Login() {
  const { login, setUserPremium } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  


  const handleLogin = () => {
    const userString = localStorage.getItem(email);
    const user = JSON.parse(userString); 

    if (user && user.password === password) {
        localStorage.setItem("isLoggedIn", "true"); 
        console.log("Antes de llamar a login() en handleLogin()");
        login(); 
        console.log("Después de llamar a login() en handleLogin()");
        setUserPremium(user.isPremium); 
        localStorage.setItem("isPremium", JSON.stringify(user.isPremium));  

        alert("Inicio de sesión correcto :)");
    } else {
        alert("Credenciales no válidas :(");
    }
};


  return (
    <LoginContainer>
        <h3>Inicie sesión a continuación</h3>
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
      <StyledButton onClick={handleLogin}>Login</StyledButton>
      <br/>
      
      <StyledButton as={Link} to="/register">Registrarme ahora</StyledButton>

    </LoginContainer>
  );
}

export default Login; */
