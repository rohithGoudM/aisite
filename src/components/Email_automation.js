import React, { useState } from 'react';

const EmailAutomation = () => {
  const [status, setStatus] = useState([]); // Initialize as an empty array

  const fetchData = () => {
    fetch("http://localhost:8000/emails_api")
      .then(res => res.json())
      .then(data => {
        // Assuming 'data' contains the status message in the expected format
        setStatus(Array.isArray(data) ? data : [data]); // Set status based on the type of data
        console.log(data); // Log the response data
      })
      .catch(err => console.error('Error fetching data:', err)); // Handle any errors
  };

  return (
    <section>
      <h1>AI Agent for Email Automation</h1>
      <p>Email Correspondence, response generation, and follow-up management</p>
      
      <div>
        {status.length > 0 ? (
          status.map((lead, index) => (
            <div key={index}>
              <p>{lead.status}</p> {/* Display the status message */}
            </div>
          ))
        ) : (
          <p></p> // Display message when no status is available
        )}
      </div>

      <button onClick={fetchData}>Check progress</button>
    </section>
  );
};

export default EmailAutomation;
