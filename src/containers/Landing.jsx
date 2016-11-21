import React from 'react';
import preload from '../data.json';
import styled from 'styled-components';
import Course from '../components/Course';
import Footer from '../components/Footer';
import InfoText from '../components/InfoText';
import PageHead from '../components/PageHead';
import { media } from '../utils/mediaqueries';


const Courses = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  width: 94vw;
  margin-top: 10vh;
`;


const Landing = () => (
  <div>
    <PageHead />
    <InfoText text = {preload.infoText} />
    <Courses>
      <Course course={preload.courses[0]} />
      <Course course={preload.courses[2]} />
    </Courses>
    <Footer />
  </div>
);

export default Landing;
