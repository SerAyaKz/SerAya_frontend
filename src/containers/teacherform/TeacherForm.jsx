import React, { useState } from 'react';
import './teacherform.css';
import { GRADE_OPTIONS } from '../../constant/index';

const TeacherForm = ({ user_id, teacher_id, teacherRating }) => {
  const [formData, setFormData] = useState({
    course_code: "",
    isOnline: false,
    quality: 0,
    difficulty: 0,
    willTakeTeacherAgain: false,
    tookCredit: false,
    usedTextbooks: false,
    attendanceMandatory: false,
    gradeReceived: "",
    review: "",
    user_id: user_id,
    teacher_id: teacher_id
  });
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const token = JSON.parse(localStorage.getItem('USER_KEY')).token;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const updatedValue = type === 'checkbox' ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: updatedValue
    }));
    console.log(formData)
  };
  const handleOptionClick = (option) => {
    setFormData({ ...formData, course_code: option.course_code });
    setDropdownVisible(false);
  };
  const uniqueCourseCodes = [...new Set(teacherRating.map((option) => option.course_code))];

  const groupedOptions = uniqueCourseCodes.map((course_code) => {
    const options = teacherRating.filter((option) => option.course_code === course_code);
    return { course_code, options };
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const url = "http://localhost:8081/teacherRating";
    const data = {
      course_code: formData.course_code,
      isOnline: formData.isOnline,
      quality: formData.quality,
      difficulty: formData.difficulty,
      willTakeTeacherAgain: formData.willTakeTeacherAgain,
      tookCredit: formData.tookCredit,
      usedTextbooks: formData.usedTextbooks,
      attendanceMandatory: formData.attendanceMandatory,
      gradeReceived: formData.gradeReceived,
      review: formData.review,
      teacher_id: formData.teacher_id,
      user_id: formData.user_id
    };
  
  
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.href = `http://localhost:3000/professor/${teacher_id}`;
      })
      .catch((error) => console.log(error));
  };
  

  return (
    <div className='Addschool'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <form onSubmit={handleSubmit}>

        <div className='formcard'>
          <label htmlFor="courseCode">Course Code:</label>

          <div className="dropdown">
            <input
              type="text"
              placeholder="Enter Course Code"
              value={formData.course_code}
              onChange={handleChange}
              id="courseCode"
              name="course_code"
              onFocus={() => setDropdownVisible(true)}
              onBlur={() => setTimeout(() => setDropdownVisible(false), 200)}
            />
            {dropdownVisible && (
              <div className="options-container">
                {groupedOptions.map((option) => (
                  <div
                    className="options"
                    key={option.id}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option.course_code}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>



        <div className='formcard'>
          <label>
            Quality:
            <div className="star-rating">
              <input type="radio" name="quality" id="quality-a" onChange={handleChange} value="5" />
              <label for="quality-a"></label>

              <input type="radio" name="quality" id="quality-b" onChange={handleChange} value="4" />
              <label for="quality-b"></label>

              <input type="radio" name="quality" id="quality-c" onChange={handleChange} value="3" />
              <label for="quality-c"></label>

              <input type="radio" name="quality" id="quality-d" onChange={handleChange} value="2" />
              <label for="quality-d"></label>

              <input type="radio" name="quality" id="quality-e" onChange={handleChange} value="1" />
              <label for="quality-e"></label>
            </div>


          </label>
        </div>
        <div className='formcard'>

          <label>
            Difficulty:
            <div className="star-rating">
              <input type="radio" name="difficulty" id="difficulty-a" onChange={handleChange} value="5" />
              <label for="difficulty-a"></label>

              <input type="radio" name="difficulty" id="difficulty-b" onChange={handleChange} value="4" />
              <label for="difficulty-b"></label>

              <input type="radio" name="difficulty" id="difficulty-c" onChange={handleChange} value="3" />
              <label for="difficulty-c"></label>

              <input type="radio" name="difficulty" id="difficulty-d" onChange={handleChange} value="2" />
              <label for="difficulty-d"></label>

              <input type="radio" name="difficulty" id="difficulty-e" onChange={handleChange} value="1" />
              <label for="difficulty-e"></label>
            </div>
          </label>
        </div>
        <div className='formcard'>
          <label>
            Would you take this professor again?
            <div className="radio-buttons">
              <label>
                <input type="radio" name="willTakeTeacherAgain" value={true} onChange={handleChange} />
                Yes
              </label>
              <label>
                <input type="radio" name="willTakeTeacherAgain" value={false} onChange={handleChange} />
                No
              </label>
            </div>
          </label>
        </div>
        <div className='formcard'>
          <label>
            Was the course online?
            <div className="radio-buttons">
              <label>
                <input type="radio" name="isOnline" value={true} onChange={handleChange} />
                Yes
              </label>
              <label>
                <input type="radio" name="isOnline" value={false} onChange={handleChange} />
                No
              </label>
            </div>
          </label>
        </div>
        <div className='formcard'>
          <label>
            Was this class taken for credit?
            <div className="radio-buttons">
              <label>
                <input type="radio" name="tookCredit" value={true} onChange={handleChange} />
                Yes
              </label>
              <label>
                <input type="radio" name="tookCredit" value={false} onChange={handleChange} />
                No
              </label>
            </div>
          </label>
        </div>
        <div className='formcard'>
          <label>
            Did this professor use textbooks?
            <div className="radio-buttons">
              <label>
                <input type="radio" name="usedTextbooks" value={true} onChange={handleChange} />
                Yes
              </label>
              <label>
                <input type="radio" name="usedTextbooks" value={false} onChange={handleChange} />
                No
              </label>
            </div>
          </label>
        </div>
        <div className='formcard'>
          <label>
            Was attendance mandatory?
            <div className="radio-buttons">
              <label>
                <input type="radio" name="attendanceMandatory" value={true} onChange={handleChange} />
                Yes
              </label>
              <label>
                <input type="radio" name="attendanceMandatory" value={false} onChange={handleChange} />
                No
              </label>
            </div>
          </label>
        </div>
        <div className='formcard'>
          <label htmlFor="gradeReceived">Grade Received:</label>
          <select name="gradeReceived" id="gradeReceived" onChange={handleChange} value={formData.gradeReceived}>
            {GRADE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <div className='formcard'>

          <label>
            Review:
            <textarea onChange={handleChange} value={formData.review} placeholder="Write your review in detail please" rows="20" name="review" id="comment_text" cols="40" className="ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"></textarea>
          </label>
        </div>
        <button type="submit" className='btn-3'>Submit</button>
      </form>
    </div>
  );
}

export default TeacherForm;
