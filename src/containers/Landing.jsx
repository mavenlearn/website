import React from 'react';
import bgImg from './img/bg1.png';
import gridLogo from './img/gridLogo.png';

const Landing = () => (
  <div className="headContainer">
    <div className="headerContent">
      <div>
        <img src={gridLogo} className="gridLogo" alt="gridLogo" />
      </div>
      <div>
        <h1 className="mainPhrase">become a software engineer</h1>
        <a className="reserveButton" type="button">reserve</a>
      </div>
    </div>
    <div className="introParagraph">
      <p className="courseInfo"> Maven is a coding bootcamp that graduates mid to senior level Software Engineers.
      We offer a beginners course, Apprentice, that has been designed especially for anyone
      wanting to take their first steps into Software Engineering. </p>
    </div>
  </div>
);

export default Landing;
