import React from 'react';
import preload from '../data.json';
import CourseHeader from '../components/CourseHeader';
import CourseInfo from '../components/CourseInfo';
import Footer from '../components/Footer';
import InfoTitleText from '../components/InfoTitleText';
import InfoBlock from '../components/InfoBlock';
import CourseSyllabus from '../components/CourseSyllabus';
import Laptop from '../containers/img/computer.jpg';

const CoursePage = () => (
  <div>
    <CourseHeader />
    <CourseInfo course={preload.courses[0]} />
    <InfoTitleText text={preload.courses[0].who} />
    <InfoBlock
      title="why take this course"
      description={preload.infoBlock.description}
      image={Laptop}
      button="Enroll"/>
    <CourseSyllabus />
    <Footer />
  </div>
);

export default CoursePage;