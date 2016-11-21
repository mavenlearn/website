import React from 'react';
import bgImg from './img/longBg.jpg';
import bgImg2 from './img/bg2.png';
import bgImg3 from './img/bg3.png';
import gridLogo from './img/gridLogo.png';
import preload from '../data.json';
import styled from 'styled-components';
import Course from '../components/Course';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import InfoText from '../components/InfoText';
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

const BgContainer = styled.div`
  position: relative;
`;
const Head = styled.div`
  padding-bottom: 10vw;
  background-image: url(${bgImg});
  background-size: cover;
  text-align: center;
  background-repeat: repeat-x;
  animation: animatedBackground 100s linear infinite;
`;

const HubbleImage = styled.div `
  position:absolute;
  top:0;
  left:0;
  width: 100%;
  z-index:0;
`;

const Image = styled.img`
  width:100%;
`;

const Container = styled.div`
  width: 25%;
  margin: 0 auto;
  padding-top: 50px;
`;

const ImageLogo = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h1`
  color: white;
  margin-top:0;
  font-family: 'Raleway', sans-serif;
  font-weight: 100;
  font-size:4em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  z-index: 1;
  position: relative;
  ${media.desktop`
    font-size: 4em;
    `}
  ${media.tablet`
    font-size: 1.6em;
    `}
  ${media.phone`
    font-size: 1.2em;
    `}
`;

const Button = styled.div`
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  font-size: 2vw;
  letter-spacing: 0.2em;
  margin-top: 1em;
  border: 0.1em solid #fff;
  text-transform: uppercase;
  padding: 0.5em 2em;
  letter-spacing: 0.3em;
  transition: 1s;
  background: rgba(255,255,255,0);
  position:relative;
  z-index:1;

  &:hover {
    transition: 1s;
    text-decoration: none;
    background: rgba(255,255,255,10);
  }

`;

const Crop = styled.div`
  background-image: url(${bgImg2});
  background-size: 100%;
  height: 25vh;
  background-repeat: no-repeat;

`;

const Landing = () => (
  <div>
    <BgContainer>
      <Head>
        <Menu/>
        <Container>
          <ImageLogo src={gridLogo}/>
        </Container>
        <div>
          <Title>Become a Software Engineer</Title>
          <Button>Reserve</Button>
        </div>
      </Head>
    </BgContainer>
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
