import React, { useState } from 'react';
import './registrationForm.css';
const RegistrationForm = () => {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://localhost:8081/auth/register";
    const data = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,

    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('USER_KEY', JSON.stringify(data));
        window.location.href = '/';


      })
      .catch((error) => console.log(error));
  };
  return (
    <div className='reg'>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={user.firstname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={user.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
