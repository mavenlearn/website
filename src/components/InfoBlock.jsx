// Menu Component
// Expected Props:
//   1. Title
//   2. left or right justified
//   3. Image
//   4. Learn more button link

import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/mediaqueries';
// import Laptop from '../containers/img/computer.jpg';

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
  margin-bottom: 0vh;

  &.rock {
    margin-top: 30vh;
  }
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
  margin-bottom: 4vw;
  margin-top: 5vh;

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

const InfoBlock = (props) => (
  <div>
    {props.right ?
      <Block className="animated fadeInUp">
        <Text right>
          { props.title && <Title>{props.title}</Title> }
          <Paragraph>{props.description}</Paragraph>
          { props.button && <Button>{props.button}</Button>  }
        </Text>
        <Image src={props.image} right />
      </Block> :
      <Block className="animated fadeInUp">
        <Image src={props.image} left className={props.image === '/static/media/rock.e023367a.png' ? 'rock' : 'nothing'}/>
        <Text left>
          { props.title && <Title>{props.title}</Title> }
          <Paragraph>{props.description}</Paragraph>
          { props.button && <Button href={props.url} target="_blank">{props.button}</Button> }
        </Text>
      </Block>}
  </div>
);

export default InfoBlock;
