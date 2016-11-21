import React from 'react';
import styled from 'styled-components';
import Course from './Course';
import preload from '../data.json';

const CoursesContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  width: 94vw;
  margin-top: 10vh;
`;

const Courses = () => (
  <CoursesContainer>
    <Course course={preload.courses[0]} />
    <Course course={preload.courses[2]} />
  </CoursesContainer>
);

export default Courses;