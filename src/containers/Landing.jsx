import React from 'react';
import preload from '../data.json';
import Footer from '../components/Footer';
import InfoText from '../components/InfoText';
import PageHead from '../components/PageHead';
import CourseSection from '../components/CourseSection';
import InfoBlock from '../components/InfoBlock';
import Timeline from '../components/Timeline';

const Landing = () => (
  <div>
    <PageHead />
    <InfoText text={preload.infoText} />
    <InfoBlock
      title={preload.infoBlock.title}
      description={preload.infoBlock.description}
      button="learn more"
      right/>
    <Timeline/>
    <CourseSection />
    <Footer />
  </div>
);

export default Landing;
