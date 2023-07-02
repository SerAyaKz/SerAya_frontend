import React from 'react';
import Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="footer section__padding">
      <div className="footer-links_logo">
        <img src={Logo} />
        <p>@2023 SerAya. All rights reserved.</p>
      </div>

  </div>
);

export default Footer;
