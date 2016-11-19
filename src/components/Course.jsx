import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/mediaqueries';

const Container = styled.div `
  flex: 1;
  text-align: left;
  margin-right: 20px;
  margin-left: 20px;
  padding-bottom: 19.8%;
  margin-bottom: 3%;
  border-bottom: 2em solid #337ab7;
  box-shadow: 0 0 10px lightgrey;
  position: relative;
`;

const CourseText = styled.div `
  display: block;
  float: left;
  width: 70%;
  padding: 30px;
`;

const CourseTitle = styled.h3 `
  margin-top: 0;
  margin-bottom: 5px;
  color: lightgrey;
  text-transform: uppercase;
`;

const CourseNextClass = styled.h4 `
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 1em;
  color: #337ab7;
  ${media.phone`
    display:none
    `}
`;

const CourseDescription = styled.h4 `
  margin: 0;
  font-size: 1em;
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
