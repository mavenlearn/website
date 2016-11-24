import React from 'react';
import styled from 'styled-components';
import timeline from '../containers/img/timeline.svg';


const Container = styled.div`
  width:100%;
  text-align: center;
`;

const TimeLine = styled.div`
  width:100%;
  text-align:center;
  width: 72%;
  padding: 100px;
  margin: auto;
  text-align: center;
`;
const Img  = styled.img`
  stroke-dasharray: 1000;
  stroke-dashoffset:0;
  
}`;
const Title = styled.h2`
`;

const Timeline = () => (
  <Container>
    <Title>Engineer Roadmap</Title>
    <TimeLine>
      <Img src={timeline} />
    </TimeLine>
  </Container>
);

export default Timeline;
