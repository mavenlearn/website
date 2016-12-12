import React from 'react';
import styled from 'styled-components';
// import Course from './Course';
// import Menu from './Menu';
import LongCourse from './LongCourse';
// import preload from '../data.json';
// import { media } from '../utils/mediaqueries';
import firstCourse from '../containers/img/firstCourse.jpeg';
import secondCourse from '../containers/img/secondCourse.jpeg';
import thirdCourse from '../containers/img/thirdCourse.jpg';

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
  background-size: cover;

  &.first {
    background-image: url(${firstCourse});
    padding-bottom: 25vh;
  }
  &.second {
    background-image: url(${secondCourse});
  }
  &.third {
    background-image: url(${thirdCourse});
  }

  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.h2 `
  padding-top: 5vh;
  color: white;
  margin-bottom: auto;
`;

const LongCourseSection = (props) => {
  let image;
  if (props.first) {
    image = 'first';
  } else if (props.second) {
    image = 'second';
  } else if (props.third) {
    image = 'third';
  }

  return (
    <Background className={image} >
      {props.first && <Text>Courses</Text>}
      <CoursesContainer>
        <LongCourse course={props.data} />
      </CoursesContainer>
    </Background>
  );
};

export default LongCourseSection;
