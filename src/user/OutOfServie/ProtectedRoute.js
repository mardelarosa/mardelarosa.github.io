/* import { Navigate } from 'react-router-dom';
import { useAuth } from '../user/AuthContext'; 

function ProtectedRoute({ children }) {
  
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
     
      alert("Debes iniciar sesión para acceder a esta página.");
      return <Navigate to="/login" replace />;
    }
  
   
    return children;
}

export default ProtectedRoute;


*/
