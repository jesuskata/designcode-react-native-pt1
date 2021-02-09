// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styled Components
import {
  Container, Cover, Image, Logo, Subtitle, Title, Content, Avatar, Caption, Author
} from './styles';

export const Course = ({
  image, logo, subtitle, title, avatar, caption, author
}) => (
  <Container>
    <Cover>
      <Image source={image} />
      <Logo source={logo} resizeMode="contain" />
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
    </Cover>
    <Content>
      <Avatar source={avatar} />
      <Caption>{caption}</Caption>
      <Author>
        Taught by
        {' '}
        {author}
      </Author>
    </Content>
  </Container>
);

Course.propTypes = {
  image: PropTypes.number,
  logo: PropTypes.number,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  avatar: PropTypes.number,
  caption: PropTypes.string,
  author: PropTypes.string
};
