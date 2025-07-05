import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Notes from './pages/Notes';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const backgroundText = "secureTitan";

  return (
    <Router>
      {/* 🔷 Logo Card at Top-Left */}
      <div style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        padding: "10px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: "12px",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        zIndex: "1000"
      }}>
        <img
          src="/LOGO.png"
          alt="SecureTitan Logo"
          style={{ height: "60px", width: "auto" }}
        />
      </div>

      {/* 🔷 Background Text */}
      <div className="background-text">
        {backgroundText.split("").map((char, index) => (
          <span key={index} className={`scanner-letter letter-${index}`}>{char}</span>
        ))}
      </div>
      <div className="logo-card">
      <img src="/LOGO.png" alt="SecureTitan Logo" className="logo-image" />
       </div>

      {/* 🔷 Main Layout */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
