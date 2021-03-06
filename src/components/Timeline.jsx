import React from 'react';
import styled from 'styled-components';
import roadmap from '../containers/img/Roadmap.png';
import { media } from '../utils/mediaqueries';


const Container = styled.div`
  background-image: url(${roadmap});
  background-size: cover;
  width:100%;
  text-align: center;
`;

const Title = styled.h2`
  padding-top: 6vh;
  color: white;
`;

const TimeLine = styled.div`
  width:100%;
  display: flex;
  justify-content:center;
  ${media.phone`
    flex-direction: column;
    align-items: center;
    `}
`;

const Box = styled.div`
  width: 20%;
  flex-wrap: wrap;
  height: 20vw;
  margin-top: 7vh;
  margin-bottom: 10vh;
  background-color:${props => props.one ? '#3A3E4A' : props.two ? '#444A5A' : props.three ? '#3A3E4A' : 'rgb(43, 45, 51)'} ;
  ${''/* order: ${props => props.one ? 1 : props.two ? 2 : props.three ? 3 : 0};*/}
  ${media.phone`
    height: 30vh;
    width: 50%;
    margin-top: 2vh;
    margin-bottom: 2vh;
    `}
`;

const BoxTitle = styled.p`
  text-transform: uppercase;
  color: rgba(225,225,225,0.5);
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  font-weight: 100;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: rgba(0,0,0,0.1);
`;
const BoxList = styled.p`
  color: rgba(225,225,225,0.5);
  padding-left: 1.5rem;
  font-weight: 100;
  font-size: 1.3rem;
  text-align: left;
`;


const Timeline = () => (
  <Container>
    <Title>Maven Roadmap</Title>
    <TimeLine>
      <Box one>
        <BoxTitle>Apprentice 0-20</BoxTitle>
        <BoxList>Basic Javascript</BoxList>
        <BoxList>Debugging</BoxList>
        <BoxList>Problem Solving Strategies</BoxList>
      </Box>
      <Box two>
        <BoxTitle>Immersive 20-100</BoxTitle>
        <BoxList>Full-Stack Javascript</BoxList>
        <BoxList>Servers + Databases</BoxList>
        <BoxList>Frameworks</BoxList>
        <BoxList>Best Practices</BoxList>
      </Box>
      <Box three>
        <BoxTitle>Master 100-120</BoxTitle>
        <BoxList>Machine Learning</BoxList>
        <BoxList>Augmented/Virtual Reality</BoxList>
        <BoxList>Advanced System architecture</BoxList>
      </Box>
    </TimeLine>
  </Container>
);

export default Timeline;
