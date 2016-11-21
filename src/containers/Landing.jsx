import React from 'react';
import bgImg2 from './img/bg2.png';
import bgImg3 from './img/bg3.png';
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

const HubbleImage = styled.div `
  position:absolute;
  top:0;
  left:0;
  width: 100%;
  height: 90vh;
  z-index:0;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  ${media.tablet`
      height: 40vh;
    `}
  ${media.phone`
      height: 35vh;
    `}
`;

const Image = styled.img`
  width:100%;
  margin-left:auto;
`;

const Crop = styled.div`
  background-image: url(${bgImg2});
  background-size: 100%;
  height: 25vh;
  background-repeat: no-repeat;

`;

const Landing = () => (
  <div>
    <PageHead />
    <HubbleImage>
      <Image src={bgImg3} alt="hubble" />
    </HubbleImage>
    <InfoText text = {preload.infoText} />
    <Crop />
    <Courses>
      <Course course={preload.courses[0]} />
      <Course course={preload.courses[2]} />
    </Courses>
    <Footer />
  </div>
);

export default Landing;
