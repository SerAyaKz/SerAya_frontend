import React, { useState } from 'react';

import './schoolform.css';

const SchoolForm = ({ user_id, school_id }) => {
  const [formData, setFormData] = useState({
    id: 9,
    reputation: "",
    location: "",
    opportunity: "",
    facility: "",
    internet: "",
    food: "",
    clubs: "",
    social: "",
    happiness: "",
    safety: "",
    review: "",
    user_id: user_id,
    school_id: school_id

  });
  const token = JSON.parse(localStorage.getItem('USER_KEY')).token;

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const url = "http://localhost:8081/schoolRating";
    const data = {
      id: formData.id,
      reputation: formData.reputation,
      location: formData.location,
      opportunity: formData.opportunity,
      facility: formData.facility,
      internet: formData.internet,
      food: formData.food,
      clubs: formData.clubs,
      social: formData.social,
      happiness: formData.happiness,
      safety: formData.safety,
      review: formData.review,
      school_id: formData.school_id,
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
        // Redirect to another page
        window.location.href = `http://localhost:3000/school/${school_id}`;
      })
      .catch((error) => console.log(error));
  };
  




  return (
    <div className='Addschool'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <form onSubmit={handleSubmit}>
        <div className='formcard'>
          <label>
            Reputation:
            <div class="star-rating">
              <input type="radio" name="reputation" id="reputation-a" onChange={handleChange} value="5" />
              <label for="reputation-a"></label>

              <input type="radio" name="reputation" id="reputation-b" onChange={handleChange} value="4" />
              <label for="reputation-b"></label>

              <input type="radio" name="reputation" id="reputation-c" onChange={handleChange} value="3" />
              <label for="reputation-c"></label>

              <input type="radio" name="reputation" id="reputation-d" onChange={handleChange} value="2" />
              <label for="reputation-d"></label>

              <input type="radio" name="reputation" id="reputation-e" onChange={handleChange} value="1" />
              <label for="reputation-e"></label>
            </div>


          </label>
        </div>
        <div className='formcard'>

          <label>
            Location:
            <div class="star-rating">
              <input type="radio" name="location" id="location-a" onChange={handleChange} value="5" />
              <label for="location-a"></label>

              <input type="radio" name="location" id="location-b" onChange={handleChange} value="4" />
              <label for="location-b"></label>

              <input type="radio" name="location" id="location-c" onChange={handleChange} value="3" />
              <label for="location-c"></label>

              <input type="radio" name="location" id="location-d" onChange={handleChange} value="2" />
              <label for="location-d"></label>

              <input type="radio" name="location" id="location-e" onChange={handleChange} value="1" />
              <label for="location-e"></label>
            </div>
          </label>
        </div>
        <div className='formcard'>

          <label>
            Opportunity:
            <div class="star-rating">
              <input type="radio" name="opportunity" id="opportunity-a" onChange={handleChange} value="5" />
              <label for="opportunity-a"></label>

              <input type="radio" name="opportunity" id="opportunity-b" onChange={handleChange} value="4" />
              <label for="opportunity-b"></label>

              <input type="radio" name="opportunity" id="opportunity-c" onChange={handleChange} value="3" />
              <label for="opportunity-c"></label>

              <input type="radio" name="opportunity" id="opportunity-d" onChange={handleChange} value="2" />
              <label for="opportunity-d"></label>

              <input type="radio" name="opportunity" id="opportunity-e" onChange={handleChange} value="1" />
              <label for="opportunity-e"></label>
            </div>
          </label>
        </div>
        <div className='formcard'>

          <label>
            Facility:
            <div class="star-rating">
              <input type="radio" name="facility" id="facility-a" onChange={handleChange} value="5" />
              <label for="facility-a"></label>

              <input type="radio" name="facility" id="facility-b" onChange={handleChange} value="4" />
              <label for="facility-b"></label>

              <input type="radio" name="facility" id="facility-c" onChange={handleChange} value="3" />
              <label for="facility-c"></label>

              <input type="radio" name="facility" id="facility-d" onChange={handleChange} value="2" />
              <label for="facility-d"></label>

              <input type="radio" name="facility" id="facility-e" onChange={handleChange} value="1" />
              <label for="facility-e"></label>
            </div>
          </label>
        </div>
        <div className='formcard'>

          <label>
            Internet:
            <div class="star-rating">
              <input type="radio" name="internet" id="internet-a" onChange={handleChange} value="5" />
              <label for="internet-a"></label>

              <input type="radio" name="internet" id="internet-b" onChange={handleChange} value="4" />
              <label for="internet-b"></label>

              <input type="radio" name="internet" id="internet-c" onChange={handleChange} value="3" />
              <label for="internet-c"></label>

              <input type="radio" name="internet" id="internet-d" onChange={handleChange} value="2" />
              <label for="internet-d"></label>

              <input type="radio" name="internet" id="internet-e" onChange={handleChange} value="1" />
              <label for="internet-e"></label>
            </div>
          </label>
        </div>
        <div className='formcard'>

          <label>
            Food:
            <div class="star-rating">
              <input type="radio" name="food" id="food-a" onChange={handleChange} value="5" />
              <label for="food-a"></label>

              <input type="radio" name="food" id="food-b" onChange={handleChange} value="4" />
              <label for="food-b"></label>

              <input type="radio" name="food" id="food-c" onChange={handleChange} value="3" />
              <label for="food-c"></label>

              <input type="radio" name="food" id="food-d" onChange={handleChange} value="2" />
              <label for="food-d"></label>

              <input type="radio" name="food" id="food-e" onChange={handleChange} value="1" />
              <label for="food-e"></label>
            </div>
          </label>
        </div>
        <div className='formcard'>

          <label>
            Clubs:
            <div class="star-rating">
              <input type="radio" name="clubs" id="clubs-a" onChange={handleChange} value="5" />
              <label for="clubs-a"></label>

              <input type="radio" name="clubs" id="clubs-b" onChange={handleChange} value="4" />
              <label for="clubs-b"></label>

              <input type="radio" name="clubs" id="clubs-c" onChange={handleChange} value="3" />
              <label for="clubs-c"></label>

              <input type="radio" name="clubs" id="clubs-d" onChange={handleChange} value="2" />
              <label for="clubs-d"></label>

              <input type="radio" name="clubs" id="clubs-e" onChange={handleChange} value="1" />
              <label for="clubs-e"></label>
            </div>
          </label>
        </div>
        <div className='formcard'>

          <label>
            Social:
            <div class="star-rating">
              <input type="radio" name="social" id="social-a" onChange={handleChange} value="5" />
              <label for="social-a"></label>

              <input type="radio" name="social" id="social-b" onChange={handleChange} value="4" />
              <label for="social-b"></label>

              <input type="radio" name="social" id="social-c" onChange={handleChange} value="3" />
              <label for="social-c"></label>

              <input type="radio" name="social" id="social-d" onChange={handleChange} value="2" />
              <label for="social-d"></label>

              <input type="radio" name="social" id="social-e" onChange={handleChange} value="1" />
              <label for="social-e"></label>
            </div>
          </label>
        </div>
        <div className='formcard'>

          <label>
            Happiness:
            <div class="star-rating">
              <input type="radio" name="happiness" id="happiness-a" onChange={handleChange} value="5" />
              <label for="happiness-a"></label>

              <input type="radio" name="happiness" id="happiness-b" onChange={handleChange} value="4" />
              <label for="happiness-b"></label>

              <input type="radio" name="happiness" id="happiness-c" onChange={handleChange} value="3" />
              <label for="happiness-c"></label>

              <input type="radio" name="happiness" id="happiness-d" onChange={handleChange} value="2" />
              <label for="happiness-d"></label>

              <input type="radio" name="happiness" id="happiness-e" onChange={handleChange} value="1" />
              <label for="happiness-e"></label>
            </div>
          </label>
        </div>
        <div className='formcard'>

          <label>
            Safety:
            <div class="star-rating">
              <input type="radio" name="safety" id="safety-a" onChange={handleChange} value="5" />
              <label for="safety-a"></label>

              <input type="radio" name="safety" id="safety-b" onChange={handleChange} value="4" />
              <label for="safety-b"></label>

              <input type="radio" name="safety" id="safety-c" onChange={handleChange} value="3" />
              <label for="safety-c"></label>

              <input type="radio" name="safety" id="safety-d" onChange={handleChange} value="2" />
              <label for="safety-d"></label>

              <input type="radio" name="safety" id="safety-e" onChange={handleChange} value="1" />
              <label for="safety-e"></label>
            </div>
          </label>
        </div>
        <div className='formcard'>

          <label>
            Review:
            <textarea onChange={handleChange} value={formData.review} placeholder="Write your review in detail please" rows="20" name="review" id="comment_text" cols="40" class="ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"></textarea>
          </label>
        </div>
        <button type="submit" className='btn-3'>Submit</button>
      </form>
    </div>
  );
}

export default SchoolForm;
