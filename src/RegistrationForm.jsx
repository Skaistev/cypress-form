// src/RegistrationForm.js
import { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    dob: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [age, setAge] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.username) formErrors.username = "Username is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if 
    // (!formData.email.includes('@')&&!formData.email.includes('.'))
    (!/\S+@\S+\.\S+/.test(formData.email)) 
    {
      formErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }
    if (!formData.dob) {
      formErrors.dob = "Date of Birth is required";
    } else if 
    // (isNaN(new Date(formData.dob).getTime())) 
    (calculateAge(formData.dob)<0)
    {
      formErrors.dob = "Date of Birth can't be in future time";
    } 
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
     setAge(calculateAge(formData.dob))
     age >-1? setSubmitted(true): setSubmitted(false);
    }
  };

  return (
    <div className="registration-form">
      <h3>Registration</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
           id="username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p data-testid="usernameError" className="error">{errors.username}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            id="email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p data-testid="emailError" className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            id="date"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          {errors.dob && <p data-testid="dateError" className="error">{errors.dob}</p>}
        </div>
        <button className= "submitBtn" type="submit">Submit</button>
      </form>
      {submitted && (
        <div className="submitted-info">
          <h3>Submitted Information:</h3>
          <p id='submittedUsername'><strong>Username:</strong>{formData.username}</p>
          <p id='submittedEmail'><strong>Email:</strong> {formData.email}</p>
          <p id='submittedDate'><strong>Date of Birth:</strong> {formData.dob}</p>
          <p id= 'age'><strong>Age:</strong> {age} </p>
        </div>
      )}
    </div>
  );
};


export default RegistrationForm;