// Dependencies
import React from 'react';

// Components
import { Card } from './src/components/Card';
import { TopBar } from './src/components/TopBar';

// Styled Components
import { Container, Subtitle } from './styles';

export default function App() {
  return (
    <Container>
      <TopBar />
      <Subtitle>Continue Learning</Subtitle>
      <Card />
    </Container>
  );
}
