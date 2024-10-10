import React from 'react';
import { Link } from 'react-router-dom';



const Services = () => (
  <section>
    <h1>Our Services</h1>
    <p>Details about the services we offer.</p>
    <li><Link to="/LeadGenerator">AI_agent for Lead clasification and Outbound Message Generation</Link></li>
    <li><Link to="/EmailAutomation">AI_agent for Email Correspondence, Management, and Follow-up management</Link></li>
  </section>
);

export default Services;
