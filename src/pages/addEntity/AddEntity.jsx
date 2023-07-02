import React from 'react';
import { useParams } from 'react-router-dom';

import { Footer, AddSchoolForm,AddTeacherForm } from '../../containers';
import { Navbar } from '../../components';

import './addEntity.css';

const AddEntity = () => {
  const { entity } = useParams();
  const titleCaseEntity = entity.charAt(0).toUpperCase() + entity.slice(1);

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <div className='addEntity'>
        <div className='container'>
          <span>Add a {titleCaseEntity}</span>
          <p>Please make sure that the {entity} does not already exist.</p>
          {entity === 'teacher' ? <AddTeacherForm /> : <AddSchoolForm />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddEntity;
