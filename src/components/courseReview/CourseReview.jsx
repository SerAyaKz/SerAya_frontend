import React from 'react';
import './courseReview.css';

const CourseReview = ({ teacherRating }) => {

  const { difficulty, quality } = teacherRating;
  const smallerValue = Math.min(difficulty, quality);
  function getRating() {
    
  
    if (smallerValue > 4) {
      return '😎 Awesome';
    } else if (smallerValue > 3) {
      return '😐 Average';
    } else {
      return '😖 Awful';
    }
  };


  return (
    <div class="Rating">
      <div class="RatingBody">

        <div class="RatingValues">
          <div class="RatingContainer">
            <div class="StyledCardNumRating">
              <div class="CardNumRatingHeader">Quality</div>
              <div class={`CardNumRatingNumber${teacherRating?.quality.toFixed(1) > 4 ? 'green' : teacherRating?.quality.toFixed(1) > 3 ? 'yellow' : 'red'}`}>
{teacherRating?.quality.toFixed(1)}</div>
            </div>
          </div>
          <div class="RatingContainer">
            <div class="StyledCardNumRating">
              <div class="CardNumRatingHeader">Difficulty</div>
              <div class={`CardNumRatingNumber${teacherRating?.difficulty.toFixed(1) > 4 ? 'green' : teacherRating?.difficulty.toFixed(1) > 3 ? 'yellow' : 'red'}`}>
{teacherRating?.difficulty.toFixed(1)}</div>
            </div>
          </div>
        </div>
        <div class="RatingInfo">
          <div class="StyledHeader">
            <div class="ClassInfoWrapper">
              <div class="StyledClass">{teacherRating?.course_code}</div>
              <div class={`StyledEmotionLabel${smallerValue > 4 ? 'green' : smallerValue > 3 ? 'yellow' : 'red'}`}>{getRating()}</div>

            </div>
            <div class="StyledTimeStamp">{teacherRating?.created_date}</div>
          </div>
          <div class="StyledCourseMeta">
           
              <div class="StyledMetaItem">Textbook: <span>{teacherRating?.usedTextbooks ? 'YES' : 'NO'}</span></div>
          
              <div class="StyledMetaItem">Is Online: <span>{teacherRating?.isOnline ? 'YES' : 'NO'}</span></div>
           
              <div class="StyledMetaItem">Will Take Teacher Again: <span>{teacherRating?.willTakeTeacherAgain ? 'YES' : 'NO'}</span></div>
           
              <div class="StyledMetaItem">Took Credit: <span>{teacherRating?.tookCredit ? 'YES' : 'NO'}</span></div>
          
              <div class="StyledMetaItem">Attendance Mandatory: <span>{teacherRating?.attendanceMandatory ? 'YES' : 'NO'}</span></div>
          </div>
          <div class="StyledComments">{teacherRating?.review}</div>
          <div class="StyledRatingFooter">


          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseReview;
