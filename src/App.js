import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [errors, setErrors] = useState({ firstName: false, lastName: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {
      firstName: firstName.trim() === '',
      lastName: lastName.trim() === ''
    };
    
    setErrors(newErrors);
    
    if (!newErrors.firstName && !newErrors.lastName) {
      setFullName(`${firstName} ${lastName}`);
    }
  };

  return (
    <div className="App">
      <div className="form-container">
        <h1>Name Form</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={errors.firstName ? 'error' : ''}
            />
            {errors.firstName && <span className="error-message">First name is required</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={errors.lastName ? 'error' : ''}
            />
            {errors.lastName && <span className="error-message">Last name is required</span>}
          </div>
          
          <button type="submit">Submit</button>
        </form>
        
        {fullName && (
          <div className="result">
            <h2>Full Name:</h2>
            <p>{fullName}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;