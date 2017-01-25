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
  box-shadow: 0 2px 10px 0 #585858;
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
  font-family: 'Raleway', sans-serif;
  font-size: 1.8rem;
  padding: 0vw 0vh;
  color: grey;
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
  margin-top: 1rem;
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

  ${media.phone`
    font-size: 3vw;
    `}
`;

const LeftColumn = styled.div `
  flex: 1 0 0;
  text-align: right;
  margin-right: 1vw;
  margin-top: 4vw;
  margin-bottom: 4vw;

  /* Works on Safari other laptops */
  /*text-align: right;*/
  /*margin-left: 7vw;*/
  /*margin-right: 1vw;*/
  /*margin-top: 4vw;*/
  /*margin-bottom: 4vw;*/
`;

const RightColumn = styled.div `
  flex: 2 0 0;
  margin-left: 1vw;
  margin-right: 3vw;
  margin-top: 4vw;
  margin-bottom: 4vw;

  /* Works on Safari other laptops */
  /*margin-left: 1vw;*/
  /*margin-right: 3vw;*/
  /*margin-top: 4vw;*/
  /*margin-bottom: 4vw;*/
`;


const LongCourse = (props) => {
  let link;
  if (props.course.title === "Apprentice") {
    link = "/apprentice";
  } else if (props.course.title === "Immersive") {
    link = "/immersive";
  } else if (props.course.title === "Workshop") {
    link = "/workshop";
  }

  return (
    <Container>
      <CourseText>
        <LeftColumn>
          <CourseTitle>{props.course.title}</CourseTitle>
          <CourseNextClass>Next Class: {props.course.nextClass}</CourseNextClass>
          <Link to={link}><Button>Learn More</Button></Link>
        </LeftColumn>
        <RightColumn>
          <CourseDescription className="course-description">{props.course.description}</CourseDescription>
        </RightColumn>
      </CourseText>
    </Container>
  );
}

export default LongCourse;
