import React, { useState, useEffect } from 'react';
import './myratings.css';

const MyRatings = () => {
  const [teacherRatings, setTeacherRatings] = useState([]);
  const userId = JSON.parse(localStorage.getItem('USER_KEY')).userId;
  const token = JSON.parse(localStorage.getItem('USER_KEY')).token;

  useEffect(() => {
    fetchTeacherRatings();
  }, []);

  const fetchTeacherRatings = async () => {
    try {
  
      const response = await fetch(`http://localhost:8081/teacherRating/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      const data = await response.json();
      setTeacherRatings(data);
    } catch (error) {
      console.error('Error fetching teacher ratings:', error);
    }
  };
  

  const sendRatingToComponent = (rating) => {
    // Implement your logic to send the rating to another component
    console.log('Sending rating:', rating);
  };

  return (
    <div className='myratings'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Course Code</th>
            <th>Online</th>
            <th>Quality</th>
            <th>Difficulty</th>
            <th>Will Take Teacher Again</th>
            <th>Took Credit</th>
            <th>Used Textbooks</th>
            <th>Attendance Mandatory</th>
            <th>Grade Received</th>
            <th>Review</th>
            <th>Teacher ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teacherRatings.map((rating) => (
            <tr key={rating.id}>
              <td>{rating.id}</td>
              <td>{rating.course_code}</td>
              <td>{rating.isOnline ? 'Yes' : 'No'}</td>
              <td>{rating.quality}</td>
              <td>{rating.difficulty}</td>
              <td>{rating.willTakeTeacherAgain ? 'Yes' : 'No'}</td>
              <td>{rating.tookCredit ? 'Yes' : 'No'}</td>
              <td>{rating.usedTextbooks ? 'Yes' : 'No'}</td>
              <td>{rating.attendanceMandatory ? 'Yes' : 'No'}</td>
              <td>{rating.gradeReceived}</td>
              <td>{rating.review}</td>
              <td>{rating.teacher_id}</td>
              <td>
                <button onClick={() => sendRatingToComponent(rating)}>
                  Send Rating
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyRatings;
