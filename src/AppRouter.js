import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import About from "./pages/About";
/*import BookDetails from "./pages/OutOfService/BookDetails";*/
import MainMenu from "./components/MainMenu";
import Contact from "./pages/Contact";
import PersonalWork from "./pages/PersonalWork";
import Soon from "./pages/Soon";


function AppRouter() {
    return (

        <BrowserRouter>
    
        <MainMenu/>

            <Routes>
            <Route index element={<Home/>} />
            <Route path="/books" element={<Books />} />
            <Route path="/personalwork" element={<PersonalWork />} />
            <Route path="/aboutme" element={<About/>} />
            <Route path="/soon" element={<Soon/>} />
          
            <Route path="/contact" element={<Contact />} />
            </Routes>
            
        </BrowserRouter>

    )


};

/*  <Route path="/book/:bookId" element={<BookDetails />} />*/

export default AppRouter;