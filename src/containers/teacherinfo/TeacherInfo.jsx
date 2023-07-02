import React from 'react';
import { Link } from 'react-router-dom';
import bookmark from '../../assets/bookmark.svg';

import './teacherinfo.css';

const TeacherInfo = ({ teacherInfo, teacherRating }) => {
  let userId = null;
  let token = null;
  if (localStorage.getItem('USER_KEY')) {
    userId = JSON.parse(localStorage.getItem('USER_KEY')).userId;
    token = JSON.parse(localStorage.getItem('USER_KEY')).token;

  }

  const averageQuality = teacherRating.reduce((total, rating) => total + rating.quality, 0) / teacherRating.length;

  const averageDifficulty = teacherRating.reduce((total, rating) => total + rating.difficulty, 0) / teacherRating.length;

  const numWillTakeTeacherAgain = teacherRating.filter((rating) => rating.willTakeTeacherAgain === true).length;
  const handleSaveTeacher = () => {
    const savedTeacherDto = {
      user_id: userId, // Replace with the appropriate user DTO
      teacher_id: teacherInfo?.id // Replace with the appropriate teacher DTO
    };

    fetch('http://localhost:8081/savedTeacher', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`

      },
      body: JSON.stringify(savedTeacherDto)
    })
      .then(response => response.json())
      .then(data => {
        alert("Saved")
      })
      .catch(error => {
        // Handle the error
      });
  };
  return (
    <div className="teacher-info">
      <div className="teacher-rating">
        <span className="numerator">{averageQuality.toFixed(1)}</span>/<span className="denominator">5</span>
      </div>
      <div className="teacher-name">
        <span className="first-name">{teacherInfo?.first_name + " " + teacherInfo?.middle_name}</span> <span className="last-name">{teacherInfo?.last_name + "  "}  </span>
        {userId && <button class="bookmark" type="button" onClick={handleSaveTeacher}>
          <img src={bookmark} alt="Bookmark" data-tooltip="true" data-tip="Save Professor" data-for="GLOBAL_TOOLTIP" currentitem="false"></img></button>
}
     </div>
      <div className="teacher-department">
        <span>Professor in the {teacherInfo?.department.department_name} department at <Link to={`/school/${teacherInfo?.school.id}`}>
          <b>{teacherInfo?.school.name}</b>
        </Link></span>

      </div>
      <div className="teacher-feedback">
        <div className="feedback-item again">
          <span className="feedback-number">{numWillTakeTeacherAgain}</span>
          <span className="feedback-description">Would take again</span>
          <span className="feedback-description">from {teacherRating.length} students</span>

        </div>
        <div className="feedback-item difficult">
          <span className="feedback-number">{averageDifficulty.toFixed(1)}</span>
          <span className="feedback-description">Level of Difficulty</span>
        </div>
      </div>
      {userId && (
        <Link to={`/add/professor-rating/${teacherInfo?.id}`}>
          <a className="rate-professor-btn" >Rate Professor {teacherInfo?.last_name}</a>
        </Link>)}
      
    </div>

  );
}

export default TeacherInfo;
