// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './component/Footer';
import Menu from './pages/Menu';
import Blogs from './pages/Blogs';
import Book from './pages/Book';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/book" element={<Book />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
