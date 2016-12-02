import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';

const Head = styled.div `
  background-image: url(${props => props.image});
  background-size: cover;
  height: 95vh;
  position: absolute;
  width: 100%;
  top: -40vh;
`;

const CourseHeader = (props) => (
  <div>
    <Menu black/>
    <Head image={props.image}>
    </Head>
  </div>
);

export default CourseHeader;