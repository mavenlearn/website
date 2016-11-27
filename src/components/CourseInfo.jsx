import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/mediaqueries';
import preload from '../data.json';

const Container = styled.div `
  flex: 1;
  text-align: left;
  margin-right: 4vw;
  margin-left: 4vw;
  margin-bottom: 3%;
  box-shadow: 0 2px 10px 0 lightgrey;
  position: relative;
  background-color: white;
`;

const CourseText = styled.div `
  padding: 30px;
  display: flex;
`;

const CourseTitle = styled.h2 `
  font-weight: bold;
  color: black;
  text-transform: lowercase;
  font-size: 7vw;
  margin-left: 6vw;
  margin-right: 2vw;
  padding-top: 4vw;
`;

const InfoTitle = styled.h3 `
  margin-top:0;
  /*padding: 0.2vw 0vh;*/
  font-size: 1.5vw;
  ${media.phone`
    display:none
    `}
`;

const Info = styled.p `
  text-transform: uppercase;
  /*color: black;*/
  font-size: 3vw;
  font-weight: 100;
`;

const CourseDescription = styled.p `
  margin: 0;
  margin-bottom: 10px;
  ${media.desktop`
    font-size: 1em;
    `}
  ${media.tablet`
    font-size: 1em;
    `}
  ${media.phone`
    display:none
    `}
`;

const Button = styled.div`
  color: black;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  font-size: 1.5vw;
  letter-spacing: 0.2em;
  border: 1px solid black;
  text-transform: uppercase;
  padding: 0.5em 2em;
  letter-spacing: 0.3em;
  transition: 1s;
  background: rgba(255,255,255,0);
  /*position:relative;*/
  z-index:1;
  margin-left: 6vw;
  margin-bottom: 4vw;
  margin-top: 1vw;

  &:hover {
    transition: 1s;
    text-decoration: none;
    background: black;
    color: white;
  }
`;

const LeftColumn = styled.div `
  flex: 2 0 0;
  margin-left: 3vw;
  margin-right: 3vw;
`;

const RightColumn = styled.div `
  flex: 1 0 0;
  margin-left: 3vw;
`;

const Line = styled.hr `
  margin-left: 6vw;
  width: 10%;
  background-color: dimgrey;
  color: dimgrey;
`;


const CourseInfo = (props) => (
  <Container>
    <CourseTitle>description</CourseTitle>
    <CourseText>
      <LeftColumn>
        <CourseDescription className="course-description">{props.course.description}</CourseDescription>
      </LeftColumn>
      <RightColumn>
        <InfoTitle>Upcoming Classes:</InfoTitle>
        <Info>{preload.courses[0].nextClass}</Info>
        <InfoTitle>Price for Tuition:</InfoTitle>
        <Info>{preload.courses[0].price}</Info>
      </RightColumn>
    </CourseText>
    <Line />
    <Button>Enroll</Button>
  </Container>
);

export default CourseInfo;

