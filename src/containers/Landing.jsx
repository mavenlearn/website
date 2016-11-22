import React from 'react';
import preload from '../data.json';
import Footer from '../components/Footer';
import InfoText from '../components/InfoText';
import PageHead from '../components/PageHead';
import Courses from '../components/Courses';
import InfoBlock from '../components/InfoBlock';

const Landing = () => (
  <div>
    <PageHead />
    <InfoText text = {preload.infoText} />
    <InfoBlock
      title={preload.infoBlock.title}
      description= {preload.infoBlock.description}
      button="learn more"
      right/>
    <Courses />
    <Footer />
  </div>
);

export default Landing;
