// Dependencies
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Styled Components
import {
  Container, Cover, Image, Title, Caption, CloseView, Wrapper, Logo, Subtitle
} from './styles';

export const SectionScreen = ({ navigation }) => {
  const section = navigation.getParam('section');

  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    // Effect for componentWillUnmount
    return function cleanUp() {
      StatusBar.setBarStyle('dark-content', true);
    };
  }, []);

  const handleCloseSection = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <StatusBar hidden />
      <Cover>
        <Image source={section.image} />
        <Title>{section.title}</Title>
        <Caption>{section.caption}</Caption>
      </Cover>
      <TouchableOpacity
        style={{ position: 'absolute', top: 20, right: 20 }}
        onPress={handleCloseSection}
      >
        <CloseView>
          <Ionicons
            name="ios-close"
            size={36}
            color="#4775f2"
            style={{ marginTop: -1 }}
          />
        </CloseView>
      </TouchableOpacity>
      <Wrapper>
        <Logo source={section.logo} />
        <Subtitle>{section.subtitle}</Subtitle>
      </Wrapper>
    </Container>
  );
};

SectionScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any)
};
