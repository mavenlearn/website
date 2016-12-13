import React from 'react';
import styled from 'styled-components';
import timeline from '../containers/img/timeline.svg';
import roadmap from '../containers/img/Roadmap.png';


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
  align-items: center;
  justify-content:center;
`;

const Box = styled.div`
  width: 20%;
  height: 20vw;
  margin-top: 7vh;
  margin-bottom: 10vh;
  background-color:${props => props.one ? '#3A3E4A' : props.two ? '#444A5A' : props.three ? '#3A3E4A' : 'rgb(43, 45, 51)'} ;

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
const Img  = styled.img`
  stroke-dasharray: 1000;
  stroke-dashoffset:0;

}`;


const Timeline = () => (
  <Container>
    <Title>Engineer Roadmap</Title>
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
        <BoxTitle>Apprentice 0-20</BoxTitle>
        <BoxList>Basic Javascript</BoxList>
        <BoxList>Debugging</BoxList>
        <BoxList>Problem Solving Strategies</BoxList>
      </Box>
    </TimeLine>
  </Container>
);

export default Timeline;
