// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styled Components
import {
  Container, Cover, Image, Title,
  Content, Logo, TextWrapper, Caption, Subtitle
} from './styles';

export const Card = ({
  image, title, logo, caption, subtitle
}) => (
  <Container>
    <Cover>
      <Image source={{ uri: image }} />
      <Title>{title}</Title>
    </Cover>
    <Content>
      <Logo source={{ uri: logo }} />
      <TextWrapper>
        <Caption>{caption}</Caption>
        <Subtitle>{subtitle}</Subtitle>
      </TextWrapper>
    </Content>
  </Container>
);

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  logo: PropTypes.string,
  caption: PropTypes.string,
  subtitle: PropTypes.string
};
