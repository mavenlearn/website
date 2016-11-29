import React from 'react';
import preload from '../data.json';
import { browserHistory } from 'react-router';
import CourseHeader from '../components/CourseHeader';
import CourseInfo from '../components/CourseInfo';
import Footer from '../components/Footer';
import InfoTitleText from '../components/InfoTitleText';
import InfoBlock from '../components/InfoBlock';
import CourseSyllabus from '../components/CourseSyllabus';
import Laptop from '../containers/img/computer.jpg';
import Coder from '../containers/img/coder.jpg';
import Code from '../containers/img/code.jpeg';

const CoursePage = () => {
  let img;
  let section;
  if (browserHistory.getCurrentLocation().pathname === '/apprentice') {
    img = Coder;
    section = preload.courses[0];
  } else if (browserHistory.getCurrentLocation().pathname === '/immersive') {
    img = Code;
    section = preload.courses[1];
  } else if (browserHistory.getCurrentLocation().pathname === '/workshop') {
    img = Laptop;
    section = preload.courses[2];
  }
  return (
    <div>
      <CourseHeader />
      <CourseInfo course={section} />
      <InfoTitleText text={section.who} />
      <InfoBlock
        title="why take this course"
        description={preload.infoBlock.description}
        image={img}
        button="Enroll"/>
      <CourseSyllabus course={section} />
      <Footer />
    </div>
  );
}

export default CoursePage;