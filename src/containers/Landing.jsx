import React from 'react';
import bgImg3 from './img/bg3.png';
import preload from '../data.json';
import styled from 'styled-components';
import Footer from '../components/Footer';
import InfoText from '../components/InfoText';
import PageHead from '../components/PageHead';
import Courses from '../components/Courses';
import { media } from '../utils/mediaqueries';


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

const Landing = () => (
  <div>
    <PageHead />
    <HubbleImage>
      <Image src={bgImg3} alt="hubble" />
    </HubbleImage>
    <InfoText text = {preload.infoText} />
    <Courses />
    <Footer />
  </div>
);

export default Landing;
