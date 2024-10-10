import React from 'react'; //usestate used for creating state variable containing the data retrieved from backend and same state variable is used to render the data. useEffect is used to fetch the backend api on first render
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
import EmailAutomation from './components/Email_automation';

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
        <Route path="/EmailAutomation" element={<EmailAutomation />}></Route>
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
