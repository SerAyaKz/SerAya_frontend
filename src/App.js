import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, School, SearchTeacher, AddSchoolRating, Search, Teacher, AddTeacherRating, AddEntity, Registration, Account } from './pages';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/school/:school_id" element={<School />} />
      <Route path="/search/school/:object" element={<Search entity={"school"} />} />
      <Route path="/search/teacher/:object" element={<Search entity={"professor"} />} />
      <Route path="/add/school-rating/:school_id" element={<AddSchoolRating />} />
      <Route path="/add/:entity" element={<AddEntity />} />
      <Route path="/professor/:teacher_id" element={<Teacher />} />
      <Route path="/add/professor-rating/:teacher_id" element={<AddTeacherRating />} />
      <Route path="/search/teachers/:school_id" element={<SearchTeacher />} />
      <Route path="/account" element={<Registration />} />
      <Route path="/account/:section" element={<Account />} />
      <Route path="/account/:section" element={<Account />} />
      <Route path="/account/:section" element={<Account />} />

    </Routes>
  </BrowserRouter>
);

export default App;
