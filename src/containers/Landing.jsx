import React from 'react';
import preload from '../data.json';
import Footer from '../components/Footer';
import InfoText from '../components/InfoText';
import PageHead from '../components/PageHead';
import CourseSection from '../components/CourseSection';
import InfoBlock from '../components/InfoBlock';
import Timeline from '../components/Timeline';
import Laptop from '../containers/img/computer.jpg';
import Header from '../components/Header';

const Landing = () => (
  <div>
    <Header />
    <PageHead />
    <InfoText text={preload.infoText} />
    <InfoBlock
      title={preload.infoBlock.title}
      description={preload.infoBlock.description}
      image={Laptop}
      button="learn more"
      right/>
    <Timeline />
    <CourseSection />
    <Footer />
  </div>
);

export default Landing;
