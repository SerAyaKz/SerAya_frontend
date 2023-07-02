import React from "react";
import "./listitem.css";


const ListItem = ({ rating }) => {
  const overall = (rating.reputation + rating.location + rating.opportunity + rating.facility + rating.internet + rating.food + rating.clubs + rating.social + rating.happiness + rating.safety) / 10;
  function renderRatingSliders(ratings) {
    const sliderLabels = {
      clubs: "Clubs",
      facility: "Facility",
      food: "Food",
      happiness: "Happiness",
      internet: "Internet",
      location: "Location",
      opportunity: "Opportunity",
      reputation: "Reputation",
      safety: "Safety",
      social: "Social",
    };

    return Object.entries(ratings).map(([ratingKey, ratingValue]) => {
      if (sliderLabels[ratingKey]) {
        let sliderBoxClass = "grey";
        if (ratingValue > 3) {
          sliderBoxClass = "green";
        } else if (ratingValue > 2) {
          sliderBoxClass = "yellow";
        } else {
          sliderBoxClass = "red";
        }
        const boxes = [];
        for (let i = 1; i <= 5; i++) {
          boxes.push(
            <div
              className={`slider-box-${i <= ratingValue ? sliderBoxClass : "grey"}`}
              key={i}
            />
          );
        }
        return (
          <div className="display-slider" key={ratingKey}>
            <div className="display-slider-label">{sliderLabels[ratingKey]}</div>
            <div className="slider-box-container">{boxes}</div>
          </div>
        );
      }
      return null;
    });
  }
  return (
    <div class="comment-box">
      <div class="box-top">
        <div class="Profile">
          <div class="overall">
            <span>Overall</span>

            <strong style={{ backgroundColor: overall >= 4 ? 'green' : overall > 3 ? 'yellow' : 'red' }}>{overall}</strong>
          </div>
          <div class="Name">
            <strong style={{ backgroundColor: overall > 4 ? 'green' : overall > 3 ? 'yellow' : 'red' }}>
              {overall > 4 ? '😎 Awesome' : overall > 3 ? '😐 Average' : '😖 Awful'}
            </strong>
            <span>{rating?.createdDate}</span>
          </div>
        </div>
      </div>
      <div class="comment">
        <p>
          {rating.review}
        </p>
      </div>
      <div className="school-rating-summary">
        {renderRatingSliders(rating)}
      </div>


    </div>
  );
};

export default ListItem;
