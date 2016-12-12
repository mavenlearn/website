import React from 'react';
import styled from 'styled-components';
// import LogoImage from '../containers/img/logoMaven4.png';
// import LogoImage2 from '../containers/img/gridLogoBlack.png';
import LogoImage3 from '../containers/img/logoMaven2.png';
import { Link } from 'react-router';
import Modal from './Modal'

const Container = styled.nav`
  z-index: 10;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  padding: 8px 8px;
  text-transform: uppercase;
  align-items: center;
  padding-top: 3vh;
  background-color: #494B57;
`;

const Logo = styled.img`
  height: 3vh;
`;

const Button = styled.a`
  color: black;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  /*font-size: 1.5vw;*/
  font-size: 1rem;
  letter-spacing: 0.2em;
  border: 1px solid black;
  text-transform: uppercase;
  padding: 0.5em 2em;
  letter-spacing: 0.3em;
  transition: 1s;
  background: rgba(255,255,255,0);
  position:relative;
  z-index:1;

  &:visited {
    color: white;
  }

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

const ListItem = styled.li`
  display: inline-block;
  margin: 0 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const List = styled.ul`
  margin-left: auto;
`;

const Header = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    return (
      <Container>
        <Link to='/'><Logo src={LogoImage3}></Logo></Link>
        <List>
          <ListItem><Link className='headLink' to='/courses'>Courses</Link></ListItem>
          <ListItem><Link className='headLink' onClick={this.open}>Contact Us</Link></ListItem>
          <ListItem><Button href='https://mavevlearn.typeform.com/to/WdIlPD' target='_blank'>Apply Now</Button></ListItem>
        </List>
        <Modal show={this.state.showModal} onHide={this.close}/>
      </Container>
    )
  }
});

export default Header;
