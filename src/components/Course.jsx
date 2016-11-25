import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/mediaqueries';

const Container = styled.div `
  flex: 1;
  text-align: left;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 3%;
  border-bottom: 2em solid #449AD3;
  box-shadow: 0 2px 10px 0 lightgrey;
  position: relative;
  background-color: white;
`;

const CourseText = styled.div `
  padding: 30px;
`;

const CourseTitle = styled.h2 `
  margin-top: 0;
  margin-bottom: 5px;
`;

const CourseNextClass = styled.h3 `
  margin-top:0;
  padding: 0.2vw 0vh;
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


const Course = (props) => (
  <Container>
    <CourseText>
      <CourseTitle>{props.course.title}</CourseTitle>
      <CourseNextClass>Next Class: {props.course.nextClass}</CourseNextClass>
      <CourseDescription className="course-description">{props.course.description}</CourseDescription>
      <a>Learn More ></a>
    </CourseText>
  </Container>
);

export default Course
