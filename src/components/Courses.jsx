import React from 'react';
import styled from 'styled-components';
import Course from './Course';
import preload from '../data.json';
import { media } from '../utils/mediaqueries';

const CoursesContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  width: 94vw;
  margin-top: 4vh;
`;

const Background = styled.div `
  text-align: center;
  background-color: #F7F7F7;
  height: 48vh;
  margin-bottom: 15vh;
  ${media.tablet`
    height: auto;
    padding-bottom: 5vh;
    margin-bottom: 4vh;
    `}
  ${media.phone`
    height: auto;
    padding-bottom: 4vh;
    margin-bottom: 2vh;
    `}
`;

const Text = styled.h2 `
  padding-top: 5vh;
`;

const Courses = () => (
  <Background>
    <Text>Courses</Text>
    <CoursesContainer>
      <Course course={preload.courses[0]} />
      <Course course={preload.courses[2]} />
    </CoursesContainer>
  </Background>
);

export default Courses;
