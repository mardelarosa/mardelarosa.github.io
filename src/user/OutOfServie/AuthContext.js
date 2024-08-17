/*import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPremium, setIsPremium] = useState(() => {
    return JSON.parse(localStorage.getItem('isPremium')) || false;
});

  const navigate = useNavigate(); 

  const login = () => {
    setIsLoggedIn(true);
    console.log()
    navigate("/wallpapers");
    
  };

  const setUserPremium = (premiumStatus) => {
    setIsPremium(premiumStatus);
};


  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    navigate("/login"); 
  };

  const value = {
    isLoggedIn,
    isPremium,
    login,
    logout,
    setUserPremium
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

}*/
