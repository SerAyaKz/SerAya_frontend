import React, { useState, useEffect } from 'react';
import './profile.css';

function Profile() {
  const userId = JSON.parse(localStorage.getItem('USER_KEY')).userId;
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const token = JSON.parse(localStorage.getItem('USER_KEY')).token;

  useEffect(() => {
    
    fetch(`http://localhost:8081/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setFirstname(data.firstname);
        setLastname(data.lastname);
        setEmail(data.email);
        setPassword(data.password);
      })
      .catch(error => console.log('Error fetching user data:', error));
  }, []);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  }
  console.log(password)


  const handleSave = (e) => {
    e.preventDefault();
  
    const url = "http://localhost:8081/users/update";
    const data = {
      id: userId,
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    };
  
    
  
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsEditing(false);
      })
      .catch((error) => console.log(error));
  };
  
  return (
    <div className='profile'>
      {isEditing ? (
        <>
          <label>First Name: </label>
          <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
          <label>Last Name: </label>
          <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
          <label>Email: </label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleSave}>Save</button>
          <button onClick={toggleEdit}>Back</button>

        </>
      ) : (
        <>
          <label>First Name: {firstname}</label>
          <label>Last Name: {lastname}</label>
          <label>Email: {email}</label>
          <label>Password: ******</label>
          <button onClick={toggleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Profile;
