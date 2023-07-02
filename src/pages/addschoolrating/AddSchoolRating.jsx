import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Footer, SchoolForm } from '../../containers';
import { Navbar } from '../../components';

import './addschoolrating.css';

const AddSchoolRating = () => {
  const [schoolInfo, setSchool] = useState(null);
  let userId = null;

  if (localStorage.getItem('USER_KEY')) {
    userId = JSON.parse(localStorage.getItem('USER_KEY')).userId;
  }

  const { school_id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8081/school/${school_id}`);
      const school = await response.json();
      setSchool(school);

    };

    fetchData();
  }, [school_id]);

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />

      </div>
      <div className='rate'>
        <span>Rate: {schoolInfo?.name}</span>

      </div>
      {userId && <SchoolForm user_id={userId} school_id={school_id} />}
      <Footer />
    </div>
  );
};

export default AddSchoolRating;
