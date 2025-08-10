import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Projectpage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <>
      
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/project" element={<Projectpage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
