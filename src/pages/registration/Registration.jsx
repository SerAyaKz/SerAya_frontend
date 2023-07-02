import React, { useEffect } from 'react';
import { Footer, RegistrationForm, LoginForm } from '../../containers';
import { Navbar } from '../../components';
import './registration.css';

const Registration = () => {
  useEffect(() => {
    const user = localStorage.getItem('USER_KEY');
    if (user) {
      // User exists in localStorage, navigate away from the page
      window.location.href = '/'; // Replace '/' with the desired URL to navigate to
    }
  }, []);
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <div className="addEntity" style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ marginRight: '10px' }}>
          <RegistrationForm />
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
