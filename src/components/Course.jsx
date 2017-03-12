import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/mediaqueries';
import { Link } from 'react-router';

const Container = styled.div `
  flex: 1;
  text-align: left;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 3%;
  box-shadow: 0 2px 10px 0 rgba(88, 88, 88, 0.3);
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
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 0.2vw 0vh;
  ${media.phone`
    display:none
    `}
`;

const CourseDescription = styled.p `
  margin: 0;
  margin-bottom: 10px;
  font-size: 1.7rem;
  font-weight: 100;
  line-height: 3rem;
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
      <Link className="button" to={props.course.title === "JavaScript 101" ? "/javascript101" : "/workshop"}>Learn More </Link>
    </CourseText>
  </Container>
);

export default Course
