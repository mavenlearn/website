import React from 'react';
import styled from 'styled-components';
import LogoImage from '../containers/img/logoMaven4.png';
import LogoImage2 from '../containers/img/gridLogoBlack.png';
import LogoImage3 from '../containers/img/logoMaven2.png';
import { Link } from 'react-router';
import { Modal } from 'react-bootstrap';

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
  margin-left: 2vw;
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

const SocialList = styled.ul`
  padding: 0;
`;

const Facebook = styled.i `
  padding:10px 14px;
  padding-left: 0;
  transition: .5s;
  background-color: white;

  &:hover {
    background-color: #3d5b99;
    color: white;
  }
`;

const Twitter = styled.i `
  padding:10px 14px;
  transition: .5s;
  background-color: white;

  &:hover {
    background-color: #00aced;
    color: white;
  }
`;

const Linkedin = styled.i `
  padding:10px 14px;
  transition: .5s;
  background-color: white;

  &:hover {
    background-color: #0073a4;
    color: white;
  }
`;

const SocialIcon = styled.li `
  vertical-align: top;
  display: inline;
  height: 100px;
`;

const IconLink = styled.a `
  color: lightgrey;
  text-decoration: none;
  color: black;
`;

const ModalTitle = styled.h2 `
  text-align: center;
  font-size: 4em;
`;

const Section = styled.div `
  margin-bottom: 5vh;
  margin-left: 3vw;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2 `
  font-size: 2.5em;
`;

const SectionInfo = styled.p `
  color: black;
`;

const ModalLogo = styled.img`
  height: 5vh;
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

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <ModalTitle>Contact Us</ModalTitle>
          </Modal.Header>
          <Modal.Body>
            <Section>
              <SectionTitle>email</SectionTitle>
              <SectionInfo>hello@mavenlearn.com</SectionInfo>
            </Section>
            <Section>
              <SectionTitle>phone</SectionTitle>
              <SectionInfo>+34 635 176 956</SectionInfo>
            </Section>
            <Section>
              <SectionTitle>location</SectionTitle>
              <SectionInfo>Ramblas 40-42&nbsp;08002,&nbsp;Barcelona,&nbsp;Reial Coworking</SectionInfo>
            </Section>
            <Section>
              <SectionTitle className='social'>social</SectionTitle>
              <SocialList>
                <SocialIcon><IconLink href="https://www.facebook.com/MavenLearn/" target="_blank"> <Facebook className="fa fa-facebook"></Facebook></IconLink></SocialIcon>
                <SocialIcon><IconLink href="https://twitter.com/maven_learn" target="_blank"> <Twitter className="fa fa-twitter"></Twitter></IconLink></SocialIcon>
                <SocialIcon><IconLink href="https://www.linkedin.com/company/maven-learn?report%2Esuccess=KJ_KkFGTDCfMt-A7wV3Fn9Yvgwr02Kd6AZHGx4bQCDiP6-2rfP2oxyVoEQiPrcAQ7Bf" target="_blank"> <Linkedin className="fa fa-linkedin"></Linkedin></IconLink></SocialIcon>
              </SocialList>
            </Section>
          </Modal.Body>
          <Modal.Footer>
            <ModalLogo src={LogoImage3}></ModalLogo>
          </Modal.Footer>
        </Modal>
      </Container>
    )  
  }
});

export default Header;


