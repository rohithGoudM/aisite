import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs'; // Import ContactUs
import LeadGenerator from './components/LeadGenerator';

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} /> {/* Add route for ContactUs */}
        <Route path="/LeadGenerator" element={<LeadGenerator />}/>
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
