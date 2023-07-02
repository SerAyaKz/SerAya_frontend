import React, { useState, useEffect } from 'react';
import { countries } from '../../constant/index'; // Import the countries data
import './addteacherform.css';

const AddTeacherForm = () => {
  const token = JSON.parse(localStorage.getItem('USER_KEY')).token;

  const [schoolInfo, setSchool] = useState(null);
  const [departmentInfo, setDepartment] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8081/school');
      const school = await response.json();
      setSchool(school);
      const response1 = await fetch('http://localhost:8081/department');
      const department = await response1.json();
      setDepartment(department);
    };

    fetchData();
  }, []);

  const [formData, setFormData] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    school: '',
    department: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://localhost:8081/teacher";
   
    
    const data = {
      id: formData.id,
      first_name: formData.first_name,
      middle_name: formData.middle_name,
      last_name: formData.last_name,
      school: schoolInfo.find((school) => school.id.toString() === formData.school),
    department: departmentInfo.find((department) => department.id.toString() === formData.department),
    };
    
  
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {

        
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='addteacher'>
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Middle Name:
        <input
          type="text"
          name="middle_name"
          value={formData.middle_name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        School:
        <select
          name="school"
          value={formData.school}
          onChange={handleChange}
        >
          <option value="">Select School</option>
          {schoolInfo &&
            schoolInfo.map((school) => (
              <option key={school.id} value={school.id}>
                {school.name}
              </option>
            ))}
        </select>
      </label>
      <br />
      <label>
        Department:
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
        >
          <option value="">Select Department</option>
          {departmentInfo &&
            departmentInfo.map((department) => (
              <option key={department.id} value={department.id}>
                {department.department_name}
              </option>
            ))}
        </select>
      </label>
      <br />
      <button type="submit">Add Teacher</button>
    </form>
    </div>
  );
};

export default AddTeacherForm;



