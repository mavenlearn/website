import React from 'react';
import preload from '../data.json';
import { browserHistory, Link } from 'react-router';
import CourseHeader from '../components/CourseHeader';
import CourseInfo from '../components/CourseInfo';
import Footer from '../components/Footer';
import InfoTitleText from '../components/InfoTitleText';
import InfoBlock from '../components/InfoBlock';
import CourseSyllabus from '../components/CourseSyllabus';
import Coder from '../containers/optimizedImages/coder-1600.jpg';
import Code from '../containers/optimizedImages/code-1600.jpeg';
import headerImage1 from  '../containers/optimizedImages/headerImage-1600.jpg';
import headerImage2 from  '../containers/optimizedImages/headerImage2-1600.jpeg';
import headerImage3 from  '../containers/optimizedImages/headerImage3-1600.jpeg';
import rock from  '../containers/optimizedImages/rock-1600.png';
import Header from '../components/Header';
import Helmet from 'react-helmet';


const CoursePage = () => {
  let img;
  let section;
  let headImg;
  let infoButton;
  let whyButton;
  let whatButton;
  let modal;
  let blockTitle;
  let injectText = '';

  if (browserHistory.getCurrentLocation().pathname === '/javascript101') {
    img = Coder;
    section = preload.courses[0];
    headImg = headerImage1;
    infoButton = 'Enroll';
    whyButton = 'Enroll';
    whatButton = 'Enroll';
    blockTitle = 'why take this course';
    modal = false;
  } else if (browserHistory.getCurrentLocation().pathname === '/immersive') {
    img = Code;
    section = preload.courses[1];
    headImg = headerImage2;
    infoButton = 'Enroll';
    blockTitle = 'why take this course';
    modal = true;
    injectText =  <Link to='/apprentice' className='injectedText'>Apprentice</Link>;
  } else if (browserHistory.getCurrentLocation().pathname === '/workshop') {
    img = rock;
    section = preload.courses[2];
    headImg = headerImage3;
    infoButton = 'Request Workshop';
    whyButton = 'Request Workshop';
    whatButton = 'Request Workshop';
    blockTitle = 'why take this workshop';
    modal = false;
  }
  return (
    <div>
      <Helmet 
        title={section.titleTag} 
        meta={[
          {name: "description", content: section.metaDescription}
        ]}
      />
      <Header />
      <CourseHeader image={headImg} />
      <CourseInfo
        course={section}
        modal={modal}
        button={infoButton}
      />
      <InfoTitleText text={section.who} injectText={injectText}/>
      <InfoBlock
        title={blockTitle}
        description={section.why}
        image={img}
        button={whyButton}
        url={section.url}
      />
      <CourseSyllabus
        button={whatButton}
        course={section}
      />
      <Footer />
    </div>
  );
}

export default CoursePage;
