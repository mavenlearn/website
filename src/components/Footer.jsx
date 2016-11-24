/* https://codepen.io/Deadlymuffin/pen/hGiqo */
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div `
  margin: 5vw;
`;

const FooterIcons = styled.div `
  text-align: center;
`;

const Facebook = styled.i `
  padding:10px 14px;
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
`;

const List = styled.ul`
  padding-left: 1vw;
`;


const Footer = () => (
 <FooterContainer>
    <FooterIcons>
      <List>
          <SocialIcon><IconLink href="https://www.facebook.com/MavenLearn/" target="_blank"> <Facebook className="fa fa-facebook"></Facebook></IconLink></SocialIcon>
          <SocialIcon><IconLink href="https://twitter.com/mavenlearn" target="_blank"> <Twitter className="fa fa-twitter"></Twitter></IconLink></SocialIcon>
          <SocialIcon><IconLink href="https://www.linkedin.com/company/10846926?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A10846926%2Cidx%3A2-1-2%2CtarId%3A1476821275536%2Ctas%3Aboolean%20academ" target="_blank"> <Linkedin className="fa fa-linkedin"></Linkedin></IconLink></SocialIcon>
      </List>
  </FooterIcons>
</FooterContainer>
);

export default Footer;
