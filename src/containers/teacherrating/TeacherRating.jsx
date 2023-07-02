import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CourseReview } from '../../components';
import './teacherrating.css';

const TeacherRating = ({ teacherRating }) => {
  const [selectedCourseCode, setSelectedCourseCode] = useState('');

  const courseCodes = [...new Set(teacherRating.map(item => item.course_code))];

  const handleCourseCodeChange = (event) => {
    setSelectedCourseCode(event.target.value);
  };

  const filteredRatings = selectedCourseCode
    ? teacherRating.filter(rating => rating.course_code === selectedCourseCode)
    : teacherRating;

  return (
    <div className="TeacherRatingTabs">
      <ul className="TeacherRatingTabs__TabList">
        <li className="TeacherRatingTabs__Tab--selected" tabIndex="0">{teacherRating?.length} Student Ratings</li>
      </ul>
      <div className="RatingsFilterList">
        <select id="courseCode" value={selectedCourseCode} onChange={handleCourseCodeChange}>
          <option value="">Select a course code</option>
          {courseCodes.map(code => (
            <option key={code} value={code}>{code}</option>
          ))}
        </select>
      </div>
      {filteredRatings.map((rating, index) => (
        <CourseReview teacherRating={rating} key={index} />
      ))}
    </div>
  );
}

export default TeacherRating;
