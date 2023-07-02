import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Footer, TeacherForm } from '../../containers';
import { Navbar } from '../../components';

import './addteacherrating.css';

const AddTeacherRating = () => {
  const [teacherInfo, setTeacher] = useState(null);
  const [teacherRating, setTeacherRating] = useState(null);

  let userId = null;

  if (localStorage.getItem('USER_KEY')) {
    userId = JSON.parse(localStorage.getItem('USER_KEY')).userId;
  }

  const { teacher_id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8081/teacher/${teacher_id}`);
      const teacher = await response.json();
      setTeacher(teacher);
      const response1 = await fetch(`http://localhost:8081/teacherRating/teacher/${teacher_id}`);
      const teacherRate = await response1.json();
      setTeacherRating(teacherRate);
    };

    fetchData();
  }, [teacher_id]);

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />

      </div>
      <div className='rate'>
        <span>Rate: {teacherInfo?.name}</span>

      </div>
      {teacherRating && <TeacherForm user_id={userId} teacher_id={teacher_id} teacherRating={teacherRating} />}
      <Footer />
    </div>
  );
};

export default AddTeacherRating;
