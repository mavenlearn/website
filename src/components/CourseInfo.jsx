import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/mediaqueries';
import { Modal } from 'react-bootstrap';
import LogoImage3 from '../containers/img/logoMaven2.png';

const Container = styled.div `
  flex: 1;
  text-align: left;
  margin-right: 4vw;
  margin-left: 4vw;
  margin-bottom: 3%
  margin-top: 45vh;
  box-shadow: 0 2px 10px 0 rgba(88, 88, 88, 0.23);
  position: relative;
  background-color: white;
`;

const CourseText = styled.div `
  padding: 30px;
  display: flex;
  font-size: 1.3rem;
  font-weight: 100;
  line-height: 3rem;
`;

const CourseTitle = styled.h2 `
  font-family: 'ChronicleHairline', Georgia, serif;
  letter-spacing: normal;
  font-style: italic;
  color: #424242;
  text-transform: lowercase;
  font-size: 7vw;
  margin-left: 6vw;
  margin-right: 2vw;
  padding-top: 4vw;
`;

const InfoTitle = styled.h3 `
  margin-top:0;
  /*padding: 0.2vw 0vh;*/
  font-size: 1.5vw;
  ${media.phone`
    display:none
    `}
`;

const Info = styled.p `
  text-transform: uppercase;
  /*color: black;*/
  font-size: 3vw;
  font-weight: 100;
`;

const CourseDescription = styled.p `
  margin: 0;
  margin-bottom: 10px;
  ${media.desktop`
    font-size: 1em;
    `}
  ${media.tablet`
    font-size: 1em;
    `}
  ${media.phone`
    display:none
    `}
`;

const Button = styled.a`
  color: black;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  font-size: 1.5vw;
  letter-spacing: 0.2em;
  border: 1px solid black;
  text-transform: uppercase;
  padding: 0.5em 2em;
  letter-spacing: 0.3em;
  transition: 1s;
  background: rgba(255,255,255,0);
  /*position:relative;*/
  z-index:1;
  margin-left: 6vw;
  margin-bottom: 4vw;
  margin-top: 1vw;

  &:visited {
    color: black;
  }

  &:hover {
    transition: 1s;
    text-decoration: none;
    background: black;
    color: white;
  }

`;

const LeftColumn = styled.div `
  flex: 2 0 0;
  margin-left: 3vw;
  margin-right: 3vw;
`;

const RightColumn = styled.div `
  flex: 1 0 0;
  margin-left: 3vw;
`;

const Line = styled.hr `
  margin-left: 6vw;
  width: 10%;
  background-color: grey;
  color: grey;
`;

const ModalTitle = styled.h2 `
  text-align: center;
  font-size: 4em;
`;

const ModalLogo = styled.img`
  height: 5vh;
`;

const Section = styled.div `
  margin: 5vw;
  text-align: center;
`;

const SectionInfo = styled.p `
  color: black;
`;

const CourseInfo = React.createClass({
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
    const { title, description, nextClass, price, url } = this.props.course;
    const { modal, button } = this.props;
    return (
      <Container>
        <CourseTitle>{title}</CourseTitle>
        <CourseText>
          <LeftColumn>
            <CourseDescription className="course-description">{description}</CourseDescription>
          </LeftColumn>
          <RightColumn>
            <InfoTitle>Upcoming Classes:</InfoTitle>
            <Info>{nextClass}</Info>
            <InfoTitle>Price for Tuition:</InfoTitle>
            <Info>{price}</Info>
          </RightColumn>
        </CourseText>
        <Line />
        <Button onClick={modal ? this.open : false} href={url} target="_blank">{button}</Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <ModalTitle>Immersive</ModalTitle>
          </Modal.Header>
          <Modal.Body>
            <Section>
              <SectionInfo>Our Immersive offerring will start in summer 2017</SectionInfo>
              <SectionInfo>Enrollment will be open soon</SectionInfo>
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

export default CourseInfo;
