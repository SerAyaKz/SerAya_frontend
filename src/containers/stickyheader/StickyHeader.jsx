import React from 'react';
import { Link } from 'react-router-dom';

import './stickyheader.css';

const StickyHeader = ({ schoolInfo }) => {
  let userId = null;

  if (localStorage.getItem('USER_KEY')) {
    userId = JSON.parse(localStorage.getItem('USER_KEY')).userId;
  }

  return (
    <header className="school">
      <h1 className="school-name">{schoolInfo?.name}</h1>
      <Link to={`/search/teachers/${schoolInfo?.id}`}>
        <button className="view-teachers-btn">View All Teachers</button>
      </Link>

      {userId && (
        <Link to={`/add/school-rating/${schoolInfo?.id}`}>
          <button className="rate-school-btn">Rate This School</button>
        </Link>
      )}
    </header>
  );
};

export default StickyHeader;
