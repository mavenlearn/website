import React from 'react';
import bgImg from './img/bg1.png';
import gridLogo from './img/gridLogo.png';
import { Image, Jumbotron } from 'react-bootstrap';

const Landing = () => (
  <div className="homePage">
    <div className="homePageHeader">
      <img src={bgImg} className="bgimg" alt="bgimg" />
      <Image src={gridLogo} className="gridLogo" alt="gridLogo" responsive />
      <h1 className="mainPhrase">become a software engineer</h1>
      <a className="reserveButton" type="button">reserve</a>
      <div className="introParagraph">
        <p className="courseInfo"> Maven is a coding bootcamp that graduates mid to senior level Software Engineers. 
        We offer a beginners course, Apprentice, that has been designed especially for anyone 
        wanting to take their first steps into Software Engineering. </p>
      </div>
    </div>
  </div>
);

export default Landing;