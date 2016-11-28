import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/mediaqueries';

const Info = styled.div`
  width: 100%;
  text-align: center;
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
  padding-bottom: 2vh;
`;

const InfoTitleText = (props) => (
  <Info>
    <Title>who is this for</Title>
    <InfoParagraph>{props.text}</InfoParagraph>
  </Info>
);

export default InfoTitleText;