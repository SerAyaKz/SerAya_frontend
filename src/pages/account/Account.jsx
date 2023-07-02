import React from 'react';
import { useParams } from 'react-router-dom';
import { Footer } from '../../containers';
import { Navbar, Profile, MyRatings, Saved } from '../../components';
import './account.css';


const Account = () => {
  const { section } = useParams();
  console.log(section)
  const user = localStorage.getItem('USER_KEY');

  let componentToShow;
  if (section === 'profile') {
    componentToShow = <Profile />;
  } else if (section === 'ratings') {
    componentToShow = <MyRatings />;
  } else if (section === 'saved-teachers') {
    componentToShow = <Saved />;
  }
  console.log(user)
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <div className="addAccount">
        <span>Hey Fire</span>
        {componentToShow}
      </div>
      <Footer />
    </div>
  );
};

export default Account;
