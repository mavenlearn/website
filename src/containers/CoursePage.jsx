import React from 'react';
import preload from '../data.json';
import CourseHeader from '../components/CourseHeader';
import CourseInfo from '../components/CourseInfo';
import Footer from '../components/Footer';


const CoursePage = () => (
  <div>
    <CourseHeader />
    <CourseInfo course={preload.courses[0]} />
    <Footer />
  </div>
);

export default CoursePage;