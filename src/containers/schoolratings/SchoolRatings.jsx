import React, { useState, useEffect } from 'react';

import './schoolratings.css';
import { safety, social, reputation, opportunity, internet, happiness, food, facility, clubs, location } from './imports.js';

const SchoolRatings = ({ schoolRating }) => {


  const getColumnAverage = (columnName) => {
    const sum = schoolRating.reduce((acc, schoolRating) => acc + schoolRating[columnName], 0);
    const average = sum / schoolRating.length;
    return average;
  }

  const overallAverage = (getColumnAverage("safety") + getColumnAverage("social") + getColumnAverage("reputation") + getColumnAverage("opportunity") + getColumnAverage("internet") + getColumnAverage("happiness") + getColumnAverage("food") + getColumnAverage("facility") + getColumnAverage("clubs") + getColumnAverage("location")
  ) / (10);

  return (
    <div className="school-ratings-container">
      <div className="overall-rating-container">
        <div className="overall-rating">
          <div className="rating-wrapper">
            <div className="rating-number">{overallAverage.toFixed(2)}</div>
            <div className="helper-text">Overall Quality</div>
          </div>
        </div>
      </div>
      <div className="school-summary-wrapper">
        <div className="school-summary-container">
          <div className="category-grade">
            <img src={happiness} alt="Happiness" className="category-icon" />
            <div className="category-title">Happiness</div>
            <div className="colored-square"
              style={{
                backgroundColor:
                  getColumnAverage("happiness").toFixed(2) > 4
                    ? "green"
                    : getColumnAverage("happiness").toFixed(2) > 3
                      ? "yellow"
                      : "red"
              }}>
              {getColumnAverage("happiness").toFixed(2)}
            </div>          </div>
          <div className="category-grade">
            <img src={reputation} alt="Reputation" className="category-icon" />
            <div className="category-title">Reputation</div>
            <div className="colored-square"
              style={{
                backgroundColor:
                  getColumnAverage("reputation").toFixed(2) > 4
                    ? "green"
                    : getColumnAverage("reputation").toFixed(2) > 3
                      ? "yellow"
                      : "red"
              }}>
              {getColumnAverage("reputation").toFixed(2)}
            </div>          </div>
          <div className="category-grade">
            <img src={facility} alt="Facilities" className="category-icon" />
            <div className="category-title">Facilities</div>
            <div className="colored-square"
              style={{
                backgroundColor:
                  getColumnAverage("facility").toFixed(2) > 4
                    ? "green"
                    : getColumnAverage("facility").toFixed(2) > 3
                      ? "yellow"
                      : "red"
              }}>
              {getColumnAverage("facility").toFixed(2)}
            </div>          </div>
          <div className="category-grade">
            <img src={opportunity} alt="Opportunities" className="category-icon" />
            <div className="category-title">Opportunities</div>
            <div className="colored-square"
              style={{
                backgroundColor:
                  getColumnAverage("opportunity").toFixed(2) > 4
                    ? "green"
                    : getColumnAverage("opportunity").toFixed(2) > 3
                      ? "yellow"
                      : "red"
              }}>
              {getColumnAverage("opportunity").toFixed(2)}
            </div>          </div>
          <div className="category-grade">
            <img src={safety} alt="Safety" className="category-icon" />
            <div className="category-title">Safety</div>
            <div className="colored-square"
              style={{
                backgroundColor:
                  getColumnAverage("safety").toFixed(2) > 4
                    ? "green"
                    : getColumnAverage("safety").toFixed(2) > 3
                      ? "yellow"
                      : "red"
              }}>
              {getColumnAverage("safety").toFixed(2)}
            </div>          </div>
          <div className="category-grade">
            <img src={location} alt="Location" className="category-icon" />
            <div className="category-title">Location</div>
            <div className="colored-square"
              style={{
                backgroundColor:
                  getColumnAverage("location").toFixed(2) > 4
                    ? "green"
                    : getColumnAverage("location").toFixed(2) > 3
                      ? "yellow"
                      : "red"
              }}>
              {getColumnAverage("location").toFixed(2)}
            </div>          </div>
          <div className="category-grade">
            <img src={internet} alt="Internet" className="category-icon" />
            <div className="category-title">Internet</div>
            <div className="colored-square"
              style={{
                backgroundColor:
                  getColumnAverage("internet").toFixed(2) > 4
                    ? "green"
                    : getColumnAverage("internet").toFixed(2) > 3
                      ? "yellow"
                      : "red"
              }}>
              {getColumnAverage("internet").toFixed(2)}
            </div>          </div>
          <div className="category-grade">
            <img src={food} alt="Food" className="category-icon" />
            <div className="category-title">Food</div>
            <div className="colored-square"
              style={{
                backgroundColor:
                  getColumnAverage("food").toFixed(2) > 4
                    ? "green"
                    : getColumnAverage("food").toFixed(2) > 3
                      ? "yellow"
                      : "red"
              }}>
              {getColumnAverage("food").toFixed(2)}
            </div>          </div>

          <div className="category-grade">
            <img src={clubs} alt="Clubs" className="category-icon" />
            <div className="category-title">Clubs</div>
            <div className="colored-square"
              style={{
                backgroundColor:
                  getColumnAverage("clubs").toFixed(2) > 4
                    ? "green"
                    : getColumnAverage("clubs").toFixed(2) > 3
                      ? "yellow"
                      : "red"
              }}>
              {getColumnAverage("clubs").toFixed(2)}
            </div>          </div>
          <div className="category-grade">
            <img src={social} alt="Social" className="category-icon" />
            <div className="category-title">Social</div>
            <div className="colored-square"
              style={{
                backgroundColor:
                  getColumnAverage("social").toFixed(2) > 4
                    ? "green"
                    : getColumnAverage("social").toFixed(2) > 3
                      ? "yellow"
                      : "red"
              }}>
              {getColumnAverage("social").toFixed(2)}
            </div>          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolRatings;
