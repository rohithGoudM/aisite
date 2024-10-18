import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/App.jsx";
import Plans from "./pages/Plans.jsx"; // Ensure the name matches
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Service from "./pages/Service.jsx";
import LeadGenerator from "./pages/Signup.jsx"
import EmailAutomation from "./pages/EmailAutomation.jsx"
import Contact from "./pages/Contact.jsx"
import "./index.css";
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} /> {/* Same component for /home */}
        <Route path="/pricing" element={<Plans />} /> {/* Use the uppercase component name */}
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Service />} />
        <Route path="/sign_up" element={<Signup />}/>
        <Route path="/sign_in" element={<Signin />}/>
        <Route path="/email_automation" element={<EmailAutomation />}/>
        <Route path="/contact" element={<Contact />} /> {/* Add route for ContactUs */}
      </Routes>
    </Router>
  </React.StrictMode>
);
