import React, { useEffect, useState } from "react";
import { ListTeacher } from "../../components";
import "./saved.css";

const Saved = () => {
  const userId = JSON.parse(localStorage.getItem("USER_KEY")).userId;
  const [teachers, setTeachers] = useState(null);
  const token = JSON.parse(localStorage.getItem("USER_KEY")).token;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8081/savedTeacher/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const teacher = await response.json();
      setTeachers(teacher);
    };

    fetchData();
  }, [userId]);

  return (
    <div className="saved">
      {teachers && (
        <ul>
          {teachers.map((teacher) => (
            <li key={teacher.id}>
              {teacher && <ListTeacher teacher={teacher} />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Saved;
