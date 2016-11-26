import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/mediaqueries';

const Container = styled.div `
  flex: 1;
  text-align: left;
  margin-right: 20px;
  margin-left: 20px;
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
  margin-top: 0;
  margin-bottom: 5px;
`;

const CourseNextClass = styled.h3 `
  margin-top:0;
  padding: 0.2vw 0vh;
  color: black;
  ${media.phone`
    display:none
    `}
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
  position:relative;
  z-index:1;

  &:hover {
    transition: 1s;
    text-decoration: none;
    background: black;
    color: white;
  }
`;

const LeftColumn = styled.div `
  text-align: right;
  margin-left: 7vw;
  margin-right: 1vw;
  margin-top: 5vw;
  margin-bottom: 5vw;
`;

const RightColumn = styled.div `
  margin-left: 1vw;
  margin-right: 3vw;
  margin-top: 5vw;
  margin-bottom: 5vw;
`;


const LongCourse = (props) => (
  <Container>
    <CourseText>
      <LeftColumn>
        <CourseTitle>{props.course.title}</CourseTitle>
        <CourseNextClass>Next Class: {props.course.nextClass}</CourseNextClass>
        <Button>Learn More</Button>
      </LeftColumn>
      <RightColumn>
        <CourseDescription className="course-description">{props.course.description}</CourseDescription>
      </RightColumn>
    </CourseText>
  </Container>
);

export default LongCourse;

