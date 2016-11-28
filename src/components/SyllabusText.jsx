import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/mediaqueries';

const Info = styled.div`
  width: 100%;
  text-align: left;
  height: auto;
`;

const InfoParagraph = styled.p`
  color: grey;
  font-size: 1.2em;
  font-family: 'Raleway', sans-serif;
  font-weight: 200;
  margin: 0;
  margin-bottom: 4vh;
  ${media.tablet`
    font-size: 1.3em;
    `}
  ${media.phone`
    font-size: 1em;
    `}
`;

const Title = styled.h3`
  color: black;
  margin: 0;
`;

const SyllabusText = (props) => (
  <Info>
    <Title>{props.title}</Title>
    <InfoParagraph>{props.text}</InfoParagraph>
  </Info>
);

export default SyllabusText;