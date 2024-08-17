/*import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../user/AuthContext';

const NavBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem;
  display: flex;
  gap: 1rem;

  a, button {
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    background-color: white;
    color: #ff69b4;
    transition: background-color 0.3s;

    &:hover {
      background-color: #ff89d6;
      color: white;
    }
  }
`;


function NavBarLogin() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <NavBar>
      {!isLoggedIn && <Link to="/login">Login</Link>}
      {!isLoggedIn && <Link to="/register">Register</Link>}
      {isLoggedIn && <button onClick={logout}>Cerrar sesión</button>}
    </NavBar>
  );
}

export default NavBarLogin;*/