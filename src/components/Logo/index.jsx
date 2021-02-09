// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styled Components
import { Container, Image, Text } from './styles';

export const Logo = ({ image, text }) => (
  <Container>
    <Image source={image} resizeMode="contain" />
    <Text>{text}</Text>
  </Container>
);

Logo.propTypes = {
  image: PropTypes.number,
  text: PropTypes.string
};
