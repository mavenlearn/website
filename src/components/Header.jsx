import React from 'react';
import styled from 'styled-components';
// import LogoImage from '../containers/img/logoMaven4.png';
// import LogoImage2 from '../containers/img/gridLogoBlack.png';
import LogoImage3 from '../containers/img/logoMaven2.png';
import { Link } from 'react-router';
import ModalComponent from './ModalComponent'
import { Modal } from 'react-bootstrap';

const Container = styled.nav`
  background-color: blue;
  width: 100%;
  position: relative;
`;

const Navigation = styled.nav`
  z-index: 10;
  position: fixed;
  height: 7vh;
  width: 100%;
  text-transform: uppercase;
  background-color: rgba(73,75,87,0.5);
  display: flex;
  align-items: center;
  align-content: center;
`;


const Logo = styled.img`
  width: 3vw;
`;

const Button = styled.a`
  color: black;
  cursor: pointer;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.2em;
  border: 1px solid black;
  text-transform: uppercase;
  padding: 0.5em 2em;
  letter-spacing: 0.3em;
  transition: 1s;
  background: rgba(255,255,255,0);
  z-index:1;
  margin-right: 3vw;

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
        <Navigation>
          <Link className='navLogo' to='/'><Logo src={LogoImage3} width="40px" /></Link>
          <Link className='headLink' to='/courses'>Courses &nbsp;|</Link>
          <Link className='headLink' onClick={this.open}>Contact Us</Link>
          <Button href='https://mavevlearn.typeform.com/to/WdIlPD' target='_blank'>Apply Now</Button>
        </Navigation>
        <Modal show={this.state.showModal} onHide={this.close}>
          <ModalComponent />
        </Modal>
      </Container>
    )
  }
});

export default Header;
