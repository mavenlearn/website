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
`;

const TimeLine = styled.div`
  width:100%;
  text-align:center;
  width: 72%;
  padding: 150px;
  margin: auto;
  text-align: center;
`;
const Img  = styled.img`
  stroke-dasharray: 1000;
  stroke-dashoffset:0;

}`;


const Timeline = () => (
  <Container>
    <Title>Engineer Roadmap</Title>
    <TimeLine>
      <Img src={timeline} />
    </TimeLine>
  </Container>
);

export default Timeline;
