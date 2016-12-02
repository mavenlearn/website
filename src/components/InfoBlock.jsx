// Menu Component
// Expected Props:
//   1. Title
//   2. left or right justified
//   3. Image
//   4. Learn more button link

import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/mediaqueries';
import Laptop from '../containers/img/computer.jpg';

const Block = styled.div`
  width: 100%;
  padding: ${props => props.left ? '4vw 9vw 0vw 0vw' : '4vw 0vw 0vw 0vw'};
  height: auto;
  display:flex;
  align-items: row;
`;
const Title = styled.h2`
${media.tablet`
  font-size:2em;
  `}
${media.phone`
  font-size:1.7em;
  `}
`;
const Text = styled.div`
  width: 50%;
  text-align: left;
  padding: ${props => props.left ? '2vw 6vw 2vw 0vw' : '2vw 0vw 2vw 5vw'};
  ${media.phone`
    width: 100%;
    padding: 1vw 6vw;
    margin-bottom: 2vh;
    text-align: center;
    `}
`;

const Image = styled.img`
  align-self: ${props => props.left ? 'left' : 'right'};
  ${props => props.left ? 'margin-right' : 'margin-left'}: auto;
  ${media.phone`
    display: none;
    `}
  width: 45%;
  height: 100%;
  margin-bottom: 10vh;
`;


const Paragraph = styled.p`
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

const LearnMore = styled.button`
  border: 1px solid #449ad3;
  background: #449ad3;
  color: white;
  padding: 15px 30px;
  border-radius: 6px;
  margin-top: 5vh;
  text-transform: uppercase;
  transition: padding .5s ease;
  letter-spacing:0.2em;

  &:hover {
    transition: all .5s ease;
    padding: 17px 34px;
  }

`;

const InfoBlock = (props) => (
  <div>
    {props.right ?
      <Block>
        <Text right>
          { props.title && <Title>{props.title}</Title> }
          <Paragraph>{props.description}</Paragraph>
          { props.button && <LearnMore>{props.button}</LearnMore>  }
        </Text>
        <Image src={props.image} right />
      </Block> :
      <Block>
        <Image src={props.image} left />
        <Text left>
          { props.title && <Title>{props.title}</Title> }
          <Paragraph>{props.description}</Paragraph>
          { props.button && <LearnMore>{props.button}</LearnMore> }
        </Text>
      </Block>}
  </div>
);

export default InfoBlock;
