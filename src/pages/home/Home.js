import React from 'react';

import { Footer , Header} from '../../containers';
import {  Navbar } from '../../components';

import './home.css';

const Home = () => (
  <div className="App">
    <div className="gradient__bg">
    <Navbar />
    <Header />
    </div>
    <Footer />
  </div>
);

export default Home;
