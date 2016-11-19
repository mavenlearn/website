import React from 'react';
import bgImg from './img/bg1.png';
import gridLogo from './img/gridLogo.png';
import styled from 'styled-components';
import { media } from '../utils/mediaqueries';

const Head = styled.div`
  background-image: url(${bgImg});
  background-size: 100%;
  background-repeat: no-repeat;
  text-align: center;
  height: 1000px;
`;

const Container = styled.div`
  width: 25%;
  margin: 0 auto;
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
  margin-top: 5vw;
  padding-bottom: 4vw;
  padding-top:4vw;
  padding-right:9vw;
  padding-left:9vw;
  height: auto;
`;
const InfoParagraph = styled.p`
  color: lightgrey;
  font-size: 1.5em;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  letter-spacing: 0.1em;
  margin: 0;
  ${media.tablet`
    font-size: 1.3em;
    `}
  ${media.phone`
    font-size: 1em;
    `}
`;

const Landing = () => (
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
  </Head>
);

export default Landing;
