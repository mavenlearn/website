import React from 'react';
import Footer from '../components/Footer';
import LongCourseSection from '../components/LongCourseSection';
import preload from '../data.json';
import Header from '../components/Header';

const Courses = () => (
  <div>
    <Header />
    <LongCourseSection first data={preload.courses[0]} />
    <LongCourseSection second data={preload.courses[1]} />
    <LongCourseSection third data={preload.courses[2]} />
    <Footer />
  </div>
);

export default Courses;