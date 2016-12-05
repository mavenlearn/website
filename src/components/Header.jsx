import React from 'react';
import styled from 'styled-components';
import LogoImage from '../containers/img/logoMaven4.png';
import LogoImage2 from '../containers/img/gridLogoBlack.png';
import LogoImage3 from '../containers/img/logoMaven2.png';
import { Link } from 'react-router';

const Container = styled.nav`
  z-index: 10;
  position: fixed;
  display: flex;
  /*justify-content: space-between;*/
  /*text-align: right;*/
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  background-color: #fafafa;
  padding: 8px 30px;
  text-transform: uppercase;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.25);
  background-color: white;
  opacity: 0.7;
  background-color: rgba(0,0,0,.7);
`;

const Logo = styled.img`
  height: 4vh;
  /*height: 15vh;*/
`;

const Button = styled.a`
  color: black;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  /*font-size: 1.5vw;*/
  font-size: 1vw;
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

    background: white;
    color: black;
  }

  color: white;
  border: 1px solid white;
`;

const Header = () => (
  <Container className='nav'>
    <Link className='headLogo' to='/'><Logo src={LogoImage3}></Logo></Link>
    <ul className='navList'>
      <li><Link className='headLink' to='/courses'>Courses</Link></li>
      <li><Link className='headLink' to='/apprentice'>Apprentice</Link></li>
      <li><Link className='headLink' to='/immersive'>Immersive</Link></li>
      <li><Link className='headLink' to='/workshop'>Workshop</Link></li>
      <li><Button href='https://mavevlearn.typeform.com/to/WdIlPD' target='_blank'>Apply Now</Button></li>
    </ul>
  </Container>
);

export default Header;


