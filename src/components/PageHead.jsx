import React from 'react';
import styled from 'styled-components';
import bgImg3 from '../containers/img/bg3.png';
import Menu from '../components/Menu';
import bgImg from '../containers/img/longBg.jpg';
import gridLogo from '../containers/img/gridAnimated.svg';
import logo from '../containers/img/logo.svg';
import { media } from '../utils/mediaqueries';

const BgContainer = styled.div `
  position: relative;
`;

const Head = styled.div`
  padding-bottom: 10vw;
  background-image: url(${bgImg});
  background-size: cover;
  text-align: center;
  background-repeat: repeat-x;
  animation: animatedBackground 100s linear infinite;
  height: 95vh;
  ${media.tablet`
      height: 40vh;
    `}
  ${media.phone`
      height: 35vh;
    `}
`;

const HubbleImage = styled.div `
  position:absolute;
  top:0;
  left:0;
  width: 100%;
  height: 95vh;
  z-index:0;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  ${media.tablet`
      height: 40vh;
    `}
  ${media.phone`
      height: 35vh;
    `}
`;

const Image = styled.img`
  width:100%;
  margin-left:auto;
`;


const Container = styled.div`
  width: 25%;
  margin: 0 auto;
  padding-top: 50px;
`;

const ImageLogo = styled.img`
  width: 100%;
  height: auto;
  position: relative;
  z-index:1;
`;

const Logo = styled.img`
width: 19.4%;
top: 22vh;
left: 40.1vw;
position: absolute;
z-index: 2;

${media.desktop`
  top: 15vh;
  `}
${media.tablet`
  top: 12vh;
  `}
${media.phone`
  top: 11.5vh;
  `}
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
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  font-size: 2vw;
  letter-spacing: 0.2em;
  margin-top: 1em;
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
      <Head>
        <Container>
          <Logo src={logo}/>
          <ImageLogo src={gridLogo}/>
        </Container>
        <div>
          <Title>Become a Software Engineer</Title>
          <Button href="https://mavevlearn.typeform.com/to/WdIlPD" target="_blank">Reserve</Button>
        </div>
      </Head>
    </BgContainer>
    <HubbleImage>
      <Image src={bgImg3} alt="hubble" />
    </HubbleImage>
  </div>
);

export default PageHead;



