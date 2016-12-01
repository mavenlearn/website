import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/mediaqueries';
import { Link } from 'react-router';

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
  transition: all 0.3 ease;
  border: 1px;

  ${media.tablet`
    width: 5vw;
    `}
  ${media.phone`
    width: 6vw;
    left: 4vw;
    top: 4vh;
    `}

  &.hidden {
    display: none;
  }
  &:hover {
    opacity:0.6;
  }
`;

const Line1 = styled.span`
  background: ${props => props.black ? 'black' : 'white'};
  border:none;
  height: 2px;
  width: 100%;
  position: absolute;
  top:0;
  left:0;
  transition: all 0.3 ease;
  transform: translateY(11px) translateX(0) rotate(-55deg);
  &.active {
    transform: translateY(20px) rotate(45deg);
  }
`;

const Line2 = styled.span`
  background: ${props => props.black ? 'black' : 'white'};
  border:none;
  height: 2px;
  width: 100%;
  position: absolute;
  top:20px;
  left:0;
  transition: all 0.3 ease;
  transform: translateY(11px) translateX(0) rotate(-55deg);
  &.active {
    transform: rotate(-45deg);
  }
`;

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    }

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick () {
    this.setState({clicked: !this.state.clicked});
  }

  render () {
    return (
      <div>
        <MenuContainer className={this.state.clicked ? "hidden" : "notHidden"} onClick={this.handleMenuClick}>
          <Line1 black={this.props.black} />
          <Line2 black={this.props.black} />
        </MenuContainer>
       {this.state.clicked &&
        <Overlay open>
          <MenuContainer onClick={this.handleMenuClick}>
            <Line1 className="active"/>
            <Line2 className="active"/>
          </MenuContainer>
          <NavList>
            <List>
              <ListItem><Link to="/" className="menu">Home</Link></ListItem>
              <ListItem><Link to="/courses" className="menu">Courses</Link></ListItem>
              <ListItem><ListLink>Blog</ListLink></ListItem>
              <ListItem><ListLink>FAQ</ListLink></ListItem>
              <ListItem><ListLink>Contact Us</ListLink></ListItem>
            </List>
          </NavList>
        </Overlay>}
      </div>
    )
  }

};

export default Menu;
