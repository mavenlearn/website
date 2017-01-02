import React from 'react';
import Footer from '../components/Footer';
import LongCourseSection from '../components/LongCourseSection';
import preload from '../data.json';
import Header from '../components/Header';
import DocumentTitle from 'react-document-title';
import Helmet from 'react-helmet';

const Courses = () => (
  <div>
    <Helmet 
      title={preload.coursesPage.titleTag} 
      meta={[
        {name: "description", content: preload.coursesPage.metaDescription}
      ]}
    />
    <Header />
    <LongCourseSection first data={preload.courses[0]} />
    <LongCourseSection second data={preload.courses[1]} />
    <LongCourseSection third data={preload.courses[2]} />
    <Footer />
  </div>
);

export default Courses;