import React from 'react';
import styled from 'styled-components';
import LogoImage3 from '../containers/img/logoMaven2.png';
import { Modal } from 'react-bootstrap';

const ModalContainer = styled.div`

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
  text-decoration: none;
  color: rgb(73,75,87);
`;

const ModalTitle = styled.h2 `
  text-align: center;
  font-size: 3em;
`;

const Section = styled.div `
  margin-bottom: 5vh;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h4 `
`;

const SectionInfo = styled.p `
  color: grey;
  font-size: 1.5rem;
`;

const ModalLogo = styled.img`
  height: 5vh;
`;

const ModalComponent = () => {
  return (
    <ModalContainer>
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
    </ModalContainer>
  );
};

export default ModalComponent;
