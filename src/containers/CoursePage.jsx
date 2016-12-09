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
import headerImage1 from  '../containers/img/headerImage.jpg';
import headerImage2 from  '../containers/img/headerImage2.jpeg';
import headerImage3 from  '../containers/img/headerImage3.jpeg';
import rock from  '../containers/img/rock.png';
import Header from '../components/Header';


const CoursePage = () => {
  let img;
  let section;
  let headImg;
  let button;
  let modal;
  if (browserHistory.getCurrentLocation().pathname === '/apprentice') {
    img = Coder;
    section = preload.courses[0];
    headImg = headerImage1;
    button = true;
    modal = false;
  } else if (browserHistory.getCurrentLocation().pathname === '/immersive') {
    img = Code;
    section = preload.courses[1];
    headImg = headerImage2;
    button = false;
    modal = true;
  } else if (browserHistory.getCurrentLocation().pathname === '/workshop') {
    img = rock;
    section = preload.courses[2];
    headImg = headerImage3;
    button = false;
    modal = false;
  }
  return (
    <div>
      <Header />
      <CourseHeader image={headImg} />
      <CourseInfo course={section} modal={modal}/>
      <InfoTitleText text={section.who} />
      <InfoBlock
        title="why take this course"
        description={section.why}
        image={img}
        button={button ? 'Enroll' : false}
        url={section.url}/>
      <CourseSyllabus button={button} course={section} />
      <Footer />
    </div>
  );
}

export default CoursePage;