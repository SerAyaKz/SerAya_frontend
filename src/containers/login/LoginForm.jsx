import React, { useState } from 'react';
import './login.css';

const LoginForm = () => {
  const [userlogin, setUser] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setUser({ ...userlogin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://localhost:8081/auth/authenticate";
    const data = {
      email: userlogin.email,
      password: userlogin.password
    }

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
    <div className='login'>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={userlogin.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"

            name="password"
            value={userlogin.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
