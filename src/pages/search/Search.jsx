import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Footer } from '../../containers';
import { Navbar } from '../../components';
import './search.css';

const Search = ({ entity }) => {
  let userId = null;

  if (localStorage.getItem('USER_KEY')) {
    userId = JSON.parse(localStorage.getItem('USER_KEY')).userId;
  }
  const { object } = useParams();
  const addPath = entity === 'school' ? '/add/school' : '/add/teacher';

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <div class="no-results">
          <div class="space">
          </div>
          <h2>No {entity} with "{object}" in its name.</h2>
          <h3>Use the search bar above and check the spelling or try an alternate spelling</h3>
          {userId && (<div class="add-cta-wrapper">
            <p>Don't see the {entity} you're looking for?</p>
            <Link to={addPath}>
              <button >Add a {entity}</button>
            </Link>
          </div>)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
