// Dependencies
import React from 'react';

// Styled Components
import {
  Container, Cover, Image, Title,
  Content, Logo, TextWrapper, Caption, Subtitle
} from './styles';

export const Card = () => (
  <Container>
    <Cover>
      <Image source={require('../../../assets/background2.jpg')} />
      <Title>Styled Components</Title>
    </Cover>
    <Content>
      <Logo source={require('../../../assets/logo-react.png')} />
      <TextWrapper>
        <Caption>React Native</Caption>
        <Subtitle>5 of 12 Sections</Subtitle>
      </TextWrapper>
    </Content>
  </Container>
);
