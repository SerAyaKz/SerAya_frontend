import React from "react";
import "./listteacher.css";
import { Link   } from 'react-router-dom';

const ListTeacher = ({ teacher }) => {
  console.log(teacher);

  // Destructure the teacher object
  const { id , first_name, last_name, middle_name, department, school } = teacher;
  const teacher_id=id;
  return (
    <div class="teacherRatingbox">
      <div class="box-top">
        <div class="teacherRating">
        <h1><Link to={`/professor/${teacher_id}`}>{`${first_name} ${middle_name} ${last_name}`}</Link>  </h1>
          
            <p>{department.department_name}</p>
            <p>{school.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ListTeacher;
