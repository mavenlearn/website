import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
  border-radius: 4px;
  text-align: left;
  width: 50%;
  margin-right: 20px;
  margin-left: 20px;
  height: 0;
  padding-bottom: 19.8%;
  margin-bottom: 3%;
  border-bottom: 2em solid #337ab7;
  box-shadow: 0 0 10px grey;
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
  font-size: 13px;
  color: #337ab7;
`;

const CourseDescription = styled.h4 `
  margin: 0;
  font-size: 13px;
  margin-bottom: 10px;
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



/*.course {
  border-radius: 4px;
  text-align: left;
  width: 30%;
  height: 0;
  padding-bottom: 19.8%;
  margin-bottom: 3%;
  border-bottom: 2em solid #337ab7;
  box-shadow: 0 0 10px black;
}

.course-text {
  display: block;
  float: left;
  width: 70%;
  padding: 30px;
}

.course-title {
  margin-top: 0;
  margin-bottom: 5px;
  color: lightgrey;
  text-transform: uppercase;
}

.course-nextClass {
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 13px;
  color: #337ab7;
}

.course-description {
  margin: 0;
  font-size: 13px;
  margin-bottom: 10px;
}
*/