import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Footer } from '../../containers';
import { Navbar, ListTeacher } from '../../components';

import './searchteacher.css';

const SearchTeacher = () => {
  let userId = null;

  if (localStorage.getItem('USER_KEY')) {
    userId = JSON.parse(localStorage.getItem('USER_KEY')).userId;
  }
  const [teachers, setTeachers] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const { school_id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8081/teachers/${school_id}`);
      const school = await response.json();
      setTeachers(school);
    };

    fetchData();
  }, [school_id]);

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
    
  };

  const filteredTeachers = selectedDepartment ? teachers.filter((teacher) => teacher.department.id === parseInt(selectedDepartment)) : teachers;
  const uniqueDepartments = Array.from(new Set(teachers?.map(item => item.department.id))); // Get unique department IDs

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <div className="start">
        <br></br>
        {teachers && <h1>{teachers.length} professors <span>at <b>{teachers[0].school.name}</b></span></h1>}
        <br></br>
        <div className='select'>
          <label>Select Department:</label>
          <select id="departmentSelect" value={selectedDepartment} onChange={handleDepartmentChange}>
            <option value="">Select Department</option>
            {uniqueDepartments.map(departmentId => {
              const department = teachers.find(teacher => teacher.department.id === departmentId);
              return (
                <option key={department.department.id} value={department.department.id}>
                  {department.department.department_name}
                </option>
              );
            })}
          </select>
        </div>
        {filteredTeachers && (
          <ul>
            {filteredTeachers.map(teacher => (
              <li key={teacher.id}>{teacher && <ListTeacher teacher={teacher} />}</li>
            ))}
          </ul>
        )}
       {userId && ( <div class="AddProf">
          <h2>Don't see the professor you're looking for? </h2>
          <a> <Link to={'/add/professor'}>Add a Professor</Link> </a>
        </div>)} 
      </div>
      <Footer />
    </div>
  );
};

export default SearchTeacher;
