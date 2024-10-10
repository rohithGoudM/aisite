import React, { useState } from 'react';

const LeadGenerator = () => {
  const [leads, setLeads] = useState([]); // Initialize as an empty array

  const fetchData = () => {
    fetch("http://localhost:5000/leads_api?title=Chief Executive Officer&industry=Business Consulting and Services")
      .then(res => res.json())
      .then(data => {
        setLeads([data]); // Assuming 'data' is an array of leads
        console.log(data);
      })
      .catch(err => console.error('Error fetching leads:', err)); // Handle any errors
  };

  return (
    <section>
      <h1>AI Agent for Lead Generation</h1>
      <p>Lead classification and outbound message generation</p>
      
      {/* Ensure you're checking if leads is not empty */}
      <div>
        {leads.length > 0 ? (
          leads.map((lead, index) => (
            <div key={index}>
              <p>Industry: {lead.industry}</p>
              <p>Lead Type: {lead.lead_type}</p>
              <p>Title: {lead.title}</p>
            </div>
          ))
        ) : (
          <p>No leads available</p> // Display message when no leads are available
        )}
      </div>

      <button onClick={fetchData}>Classify Lead</button>
    </section>
  );
};

export default LeadGenerator;
