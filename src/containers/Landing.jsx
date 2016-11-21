import React from 'react';
import preload from '../data.json';
import Footer from '../components/Footer';
import InfoText from '../components/InfoText';
import PageHead from '../components/PageHead';
import Courses from '../components/Courses';

const Landing = () => (
  <div>
    <PageHead />
    <InfoText text = {preload.infoText} />
    <Courses />
    <Footer />
  </div>
);

export default Landing;
