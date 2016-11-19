import React from 'react';
import bgImg from './img/bg1.png';
import bgImg2 from './img/bg2.png';
import gridLogo from './img/gridLogo.png';
import Course from '../components/Course';
import preload from '../data.json';
import styled from 'styled-components';
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

const Head = styled.div`
  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;

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

  &:hover {
    transition: 1s;
    text-decoration: none;
    background: rgba(255,255,255,10);
  }

`;

const Info = styled.div`
  width: 100%;
  background: white;
  text-align: center;
  margin-top: 10vw;
  padding: 4vw 9vw;
  height: auto;
`;

const InfoParagraph = styled.p`
  color: grey;
  font-size: 1.2em;
  font-family: 'Raleway', sans-serif;
  font-weight: 200;
  letter-spacing: 0.1em;
  line-height: 2em;
  margin: 0;
  ${media.tablet`
    font-size: 1.3em;
    `}
  ${media.phone`
    font-size: 1em;
    `}
`;

const Crop = styled.div`
  background-image: url(${bgImg2});
  background-size: 100%;
  height: 25vh;
  background-repeat: no-repeat;

`;

const Landing = () => (
  <div>
    <Head>
      <Container>
        <ImageLogo src={gridLogo}/>
      </Container>
      <div>
        <Title>Become a Software Engineer</Title>
        <Button>Reserve</Button>
      </div>
      <Info>
        <InfoParagraph>Maven is a coding bootcamp that graduates mid to senior level Software Engineers. We offer a beginners course "Apprentice" that has been designed especially for anyone wanting to take their first steps into software engineering. The course explores the keys areas to learn JavaScript, it takes you from not knowing how to program to a well versed JavaScript developer.</InfoParagraph>
      </Info>
      <Crop />
    </Head>

    <Courses>
      <Course course={preload.courses[0]} />
      <Course course={preload.courses[2]} />
    </Courses>
  </div>
);

export default Landing;
