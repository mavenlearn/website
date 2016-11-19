// Menu Component
// Expected Props:
//   1. Title
//   2. left or right justified
//   3. Image
//   4. Learn more button link

// if there is a Title, render the component with the title
//
// if there is a learn-more-link render a button to that link


import React { proptypes } from 'react';
import styled from 'styled-components';

const Block = styled.div`
`;

const Paragraph = styled.p`

`;

const Title = styled.h2`

`;
const LearnMore = styled.p`

`;
const Image = styled.img`

`;

const InfoBlock = {title, left, right, image, button} => (
  <Block>
    <Title />
    <Paragraph />
    <LearnMore />
    <Image />
  </Block>
);

InfoBlock.proptypes = {
  title: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  image: PropTypes.string,
  button: PropTypes.bool,
}
