import React from 'react';
import gridLogo from './img/gridLogo.png';
import Course from '../components/Course';
import preload from '../data.json';
import styled from 'styled-components';

const Courses = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

const Landing = () => (
  <Courses>
    <Course course={preload.courses[0]} />
    <Course course={preload.courses[2]} />
  </Courses>
);

export default Landing;
