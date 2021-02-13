// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

// Styled Components
import { Container, Text } from './styles';

export const SectionScreen = ({ navigation }) => {
  const handleCloseSection = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Text>Section Screen</Text>
      <Button title="Close" onPress={handleCloseSection} />
    </Container>
  );
};

SectionScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any)
};
