import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [errors, setErrors] = useState({ firstName: false, lastName: false });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // This useEffect will help with the initial page load test
  useEffect(() => {
    // Make sure critical elements are present on initial load
    document.title = "Name Display Form";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset errors
    const newErrors = {
      firstName: firstName.trim() === '',
      lastName: lastName.trim() === ''
    };
    
    setErrors(newErrors);
    setFormSubmitted(true);
    
    // Only set full name if both fields are valid
    if (!newErrors.firstName && !newErrors.lastName) {
      setFullName(`${firstName} ${lastName}`);
    } else {
      setFullName('');
    }
  };

  // Handle input changes and validate in real-time
  const handleInputChange = (e, field) => {
    const value = e.target.value;
    
    if (field === 'firstName') {
      setFirstName(value);
      if (formSubmitted) {
        setErrors({...errors, firstName: value.trim() === ''});
      }
    } else {
      setLastName(value);
      if (formSubmitted) {
        setErrors({...errors, lastName: value.trim() === ''});
      }
    }
  };

  return (
    <div className="App" data-testid="app-component">
      <div className="form-container">
        <h1 data-testid="form-heading">Name Form</h1>
        
        <form onSubmit={handleSubmit} data-testid="name-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              data-testid="firstName"
              value={firstName}
              onChange={(e) => handleInputChange(e, 'firstName')}
              className={errors.firstName ? 'error' : ''}
              aria-invalid={errors.firstName}
              aria-required="true"
            />
            {errors.firstName && <span className="error-message" data-testid="firstName-error">First name is required</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              data-testid="lastName"
              value={lastName}
              onChange={(e) => handleInputChange(e, 'lastName')}
              className={errors.lastName ? 'error' : ''}
              aria-invalid={errors.lastName}
              aria-required="true"
            />
            {errors.lastName && <span className="error-message" data-testid="lastName-error">Last name is required</span>}
          </div>
          
          <button type="submit" data-testid="submit-button">Submit</button>
        </form>
        
        {fullName && (
          <div className="result" data-testid="result">
            <h2>Full Name:</h2>
            <p data-testid="full-name">{fullName}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;