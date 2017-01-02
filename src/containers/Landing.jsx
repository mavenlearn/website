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
import Helmet from 'react-helmet';

const Landing = () => (
  <div>
    <Helmet 
      title={preload.homePage.titleTag} 
      meta={[
        {name: "description", content: preload.homePage.metaDescription}
      ]}
    />
    <Header />
    <PageHead />
    <InfoText text={preload.homePage.infoText} />
    <InfoBlock
      title={preload.homePage.infoBlock.title}
      description={preload.homePage.infoBlock.description}
      image={Laptop}
      right 
    />
    <Timeline />
    <CourseSection />
    <Footer />
  </div>
);

export default Landing;
