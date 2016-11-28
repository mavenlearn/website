import React from 'react';
import headerImage from  '../containers/img/headerImage.jpg';
import Menu from './Menu';
import styled from 'styled-components';

const Head = styled.div `
  background-image: url(${headerImage});
  background-size: cover;
  height: 95vh;
  position: absolute;
  width: 100%;
  top: -40vh;
`;

const CourseHeader = () => (
  <div>
    <Menu black/>
    <Head>
    </Head>
  </div>
);

export default CourseHeader;