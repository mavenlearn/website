// Menu Component
// Expected Props:
//   1. open: a boolean to check if the menu is open or not

import React from 'react';
import linesMenu from '../containers/img/linesMenu.svg'
import styled from 'styled-components';
import { media } from '../utils/mediaqueries';

const NavList = styled.nav`
  animation: fadeInRight .5s ease forwards;
  position: relative;
  height: 70%;
  top: 17%;
  font-size:3rem;
`;

const List = styled.ul`
  list-style-type: none;
  font-family: 'Raleway', sans-serif;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: white;
`;

const ListItem = styled.li`
  margin-top:10px;
`;

const ListLink = styled.a`
  color:lightblue;
  padding: 10px;
  margin-top: 10px;
  transition: all .5 ease;

  &:hover {
    transition: all .5 ease;
    color: white;
    border: 1px solid white;
  }

  &:visited {
    color:white;
  }
`;

const Overlay = styled.div`
  position: fixed;
  background: black;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.open ? '100%' : '0%'};
  opacity: ${props => props.open ? .9 : 0};
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  overflow: hidden;
  z-index: 1000;
`;

const MenuContainer = styled.div`
  width: 5vw;
  height: 6vw;
  position: absolute;
  top: 5vh;
  left: 3vw;
  cursor: pointer;
  z-index: 100;
  transition: all .3s ease;
  border: 1px

  ${media.tablet`
    width: 5vw;
    `}
  ${media.phone`
    width: 6vw;
    left: 4vw;
    top: 4vh;
    `}
  &:hover {
    opacity:0.6;
  }
  &:active {
    opacity:0;
    transform: translateY(11px) translateX(11px) rotate(0);
  }
`;

const Line1 = styled.span`
  background:white;
  border:none;
  height: 2px;
  width: 100%;
  position: absolute;
  top:0;
  left:0;
  transform: translateY(11px) translateX(0) rotate(-55deg);
`;

const Line2 = styled.span`
  background:white;
  border:none;
  height: 2px;
  width: 100%;
  position: absolute;
  top:20px;
  left:0;
  transition: all .3 ease;
  transform: translateY(11px) translateX(0) rotate(-55deg);
`;

const Menu = (props) => (
  <div>
    <MenuContainer>
      <Line1/>
      <Line2/>
    </MenuContainer>
  {props.open ?
    <Overlay open>
      <NavList>
        <List>
          <ListItem ><ListLink href="#">Courses</ListLink></ListItem>
          <ListItem><ListLink href="#">Blog</ListLink></ListItem>
          <ListItem><ListLink href="#">FAQ</ListLink></ListItem>
          <ListItem><ListLink href="#">Contact Us</ListLink></ListItem>
        </List>
      </NavList>
    </Overlay> :
    <Overlay>
      <NavList>
        <ul>
          <li ><a href="#">Courses</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </NavList>
    </Overlay>}
</div>
);

export default Menu;
