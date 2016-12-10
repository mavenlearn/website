import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/mediaqueries';
import SyllabusText from './SyllabusText';

const Info = styled.div`
  width: 100%;
  background: #F7F7F7;
  text-align: left;
  /*margin-top: 10vw;*/
  padding: 4vw 9vw;
  height: auto;
`;

const InfoParagraph = styled.p`
  color: grey;
  font-size: 1.2em;
  font-family: 'Raleway', sans-serif;
  font-weight: 200;
  letter-spacing: 0.1em;
  line-height: 2em;
  margin: 0;
  ${media.tablet`
    font-size: 1.3em;
    `}
  ${media.phone`
    font-size: 1em;
    `}
`;

const Title = styled.h2`
  text-transform: uppercase;
  padding-bottom: 4vh;
`;

const Container = styled.div`
  margin-right: 15vw;
  margin-left: 10vw;
`;

const Button = styled.a`
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
  /*position:relative;*/
  z-index:1;
  display: table;
  margin: 0 auto;
  margin-bottom: 2vw;
  margin-top: 4vw;

  &:visited {
    color: black;
  }

  &:hover {
    transition: 1s;
    text-decoration: none;
    background: black;
    color: white;
  }

`;

const CourseSyllabus = (props) => (
  <Info>
    <Container>
      <Title>what you will learn</Title>
      {props.course.what
        .map(subject => (
          <SyllabusText title={subject.title} text={subject.description} />
        ))
      }
    </Container>
    {props.button && <Button href={props.course.url} target="_blank">{props.button}</Button>}
  </Info>
);

export default CourseSyllabus;

