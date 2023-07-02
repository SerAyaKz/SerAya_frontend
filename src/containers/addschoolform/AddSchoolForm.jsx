import React, { useState } from 'react';
import { countries } from '../../constant/index'; // Import the countries data
import './addschoolform.css';
const AddSchoolForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    state: '',
    city: '',
    website: '',
    email: '',
  });
  const token = JSON.parse(localStorage.getItem('USER_KEY')).token;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCountryChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      country: value,
      state: '', // Reset state when country changes
    }));
  };

  const renderCountryOptions = () => {
    return countries.map((country, index) => (
      <option key={index} value={country.country}>
        {country.country}
      </option>
    ));
  };

  const renderStateOptions = () => {
    const selectedCountry = countries.find(
      (country) => country.country === formData.country
    );
    if (selectedCountry) {
      return selectedCountry.stateProvince.map((state, index) => (
        <option key={index} value={state}>
          {state}
        </option>
      ));
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const url = "http://localhost:8081/school";
    const data = {
      id: formData.id,
      name: formData.name,
      country: formData.country,
      state: formData.state,
      city: formData.city,
      website: formData.website,
      email: formData.email,
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
        
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='addschoolForm'>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Country:
        <select
          name="country"
          value={formData.country}
          onChange={handleCountryChange}
        >
          <option value="">Select a country</option>
          {renderCountryOptions()}
        </select>
      </label>
      <br />
      <label>
        State:
        <select name="state" value={formData.state} onChange={handleChange}>
          <option value="">Select a state</option>
          {renderStateOptions()}
        </select>
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Website:
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default AddSchoolForm;
