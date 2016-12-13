import React from 'react';
import styled from 'styled-components';
import bgImg3 from '../containers/img/bg3.png';
// import Menu from '../components/Menu';
import bgImg from '../containers/img/longBg.jpg';
import gridLogo from '../containers/img/gridAnimated.svg';
import logo from '../containers/img/logo.svg';
import { media } from '../utils/mediaqueries';

const BgContainer = styled.div `
  position: relative;
  overflow: hidden;
  text-align: center;
`;

const Head = styled.div`
  width: 300%;
  background: url(${bgImg}) repeat-x;
  background-size: contain;
  animation: animatedBackground 100s linear infinite;
  position:absolute;
  top: 0;
  bottom: 0;
  left: 0;
`;

const HubbleImage = styled.div `
  position:absolute;
  top:0;
  left:0;
  width: 100%;
  z-index:0;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  ${media.phone`
    top: 11.5vh;
    `}
`;

const Image = styled.img`
  width:100%;
  margin-left:auto;
`;


const Container = styled.div`
  width: 27%;
  margin: 0 auto;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

const ImageLogo = styled.img`
  width: 100%;
  height: auto;
  position: relative;
  z-index:1;
`;

const Logo = styled.img`
width: 19.4%;
left: 40.1vw;
position: absolute;
z-index: 2;
`;


const Title = styled.h1`
  color: white;
  margin-top:0;
  font-family: 'Raleway', sans-serif;
  font-weight: 100;
  font-size:4em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  z-index: 1;
  position: relative;
  ${media.desktop`
    font-size: 4em;
    `}
  ${media.tablet`
    font-size: 1.6em;
    `}
  ${media.phone`
    font-size: 1.2em;
    `}
`;

const Button = styled.a`
  color: #fff;
  width: 20%;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  font-size: 1.5vw;
  letter-spacing: 0.2em;
  margin-bottom: 2em;
  margin-top:1em;
  border: 1px solid #fff;
  text-transform: uppercase;
  padding: 0.5em 2em;
  letter-spacing: 0.3em;
  transition: 1s;
  background: rgba(255,255,255,0);
  position:relative;
  z-index:1;

  &:visited {
    color: #fff;
  }

  &:hover {
    transition: 1s;
    text-decoration: none;
    color: #001532 ;
    background: rgba(255,255,255,10);
    color: black;
  }

`;

let PageHead = () => (
  <div>
    <BgContainer>
      <Head />
      <Container>
        <Logo src={logo}/>
        <ImageLogo src={gridLogo}/>
      </Container>
      <Title>Become a Software Engineer</Title>
      <Button href="https://mavevlearn.typeform.com/to/WdIlPD" target="_blank">Reserve</Button>
      <HubbleImage>
        <Image src={bgImg3} alt="hubble" />
      </HubbleImage>
    </BgContainer>

  </div>
);

export default PageHead;
