import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    // Only set full name if both fields are filled
    if (firstName.trim() !== '' && lastName.trim() !== '') {
      setFullName(`${firstName} ${lastName}`);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Full Name Display</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          
          <button type="submit">Submit</button>
        </form>
        
        {formSubmitted && firstName.trim() !== '' && lastName.trim() !== '' && (
          <div className="result">
            Full Name: {fullName}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;