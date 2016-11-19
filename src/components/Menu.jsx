// Menu Component
// Expected Props:
//   1. open: a boolean to check if the menu is open or not


import React { proptypes } from 'react';
import styled from 'styled-components';

const NavList = styled.nav`
  animation: fadeInRight .5s ease forwards;
  animation-delay: .35s;
`;

const Overlay = styled.div`
  position: fixed;
  background: black;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.open ? 100% : 0%};
  opacity: ${props => props.open ? .9 : 0};
  visibility: ${props => props.open ? visible : hidden};
  transition: opacity .35s, visibility .35s, height .35s;
  overflow: hidden;
`;


const Menu = {open} => (
  {open ? <Overlay open> : <Overlay>}
    <NavList>
      <ul>
        <li ><a href="#">Courses</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </NavList>
  </Overlay>
);

Menu.proptypes = {
  open: PropTypes.bool,
}
