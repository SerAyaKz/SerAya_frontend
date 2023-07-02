import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Footer, StickyHeader, SchoolRatings,ListRating } from '../../containers';
import { Navbar } from '../../components';

import './school.css';

const School = () => {
  const [schoolInfo, setSchool] = useState(null);
  const [schoolRating, setSchoolRating] = useState(null);
  const { school_id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8081/school/${school_id}`);
      const school = await response.json();
      setSchool(school);
      const response1 = await fetch(`http://localhost:8081/schoolRating/school/${school_id}`);
      const schoolRate = await response1.json();
      setSchoolRating(schoolRate);
    };

    fetchData();
  }, [school_id]);

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        {schoolInfo && <StickyHeader schoolInfo={schoolInfo} />}
      </div>
      {schoolRating && <SchoolRatings schoolRating={schoolRating} />}
      {schoolRating && <ListRating rating={schoolRating} />}

      <Footer />
    </div>
  );
};

export default School;
