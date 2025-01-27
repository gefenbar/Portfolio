import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ToDo from './applications/to-do/ToDo';
import './App.css';
import SocialLinks from './components/SocialLinks';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <SocialLinks />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/todo" element={<ToDo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
