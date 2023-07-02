import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const user = localStorage.getItem('USER_KEY');

  const handleLogout = () => {
    // Remove the user key from localStorage
    localStorage.removeItem('USER_KEY');
    window.location.href = '/';

    // You can also perform additional logout actions if needed
    // For example, redirect to a login page
  };

  const renderSignUpButton = () => {
    if (user) {
      return (
        <>
          <Link to="/account/profile">
            <button type="button">Profile</button>
          </Link>
          <Link to="/account/ratings">
            <button type="button">Ratings</button>
          </Link>
          <Link to="/account/saved-teachers">
            <button type="button">Saved Teachers</button>
          </Link>
          <button type="button" onClick={handleLogout}>Logout</button>
        </>
      );
    } else {
      return (
        <Link to="/account">
          <button type="button">Sign up</button>
        </Link>
      );
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <Link to="/">
            <img src={logo} alt="Logo" /></Link>
        </div>
      </div>
      <div className="navbar-sign">{renderSignUpButton()}</div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links-sign">
              {renderSignUpButton()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
