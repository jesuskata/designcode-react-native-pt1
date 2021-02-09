// Dependencies
import React, { useRef, useEffect } from 'react';
import { Animated, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Components
import { MenuItem } from '../MenuItem';

// Styled Components
import {
  AnimatedContainer, Cover, Image, Title, Subtitle, ClosedView, Content
} from './styles';

// Data
import { items } from '../../data';

export const Menu = () => {
  const screenHeight = Dimensions.get('window').height;
  const top = useRef(new Animated.Value(screenHeight)).current;

  useEffect(() => {
    Animated.spring(top, {
      toValue: 0,
      useNativeDriver: false
    }).start();
  }, []);

  const toggleMenu = () => {
    Animated.spring(top, {
      toValue: screenHeight,
      useNativeDriver: false
    }).start();
  };

  return (
    <AnimatedContainer style={{ top }}>
      <Cover>
        <Image source={require('../../../assets/background2.jpg')} />
        <Title>Jesus</Title>
        <Subtitle>Software Developer at Zionsoft</Subtitle>
      </Cover>
      <TouchableOpacity
        onPress={toggleMenu}
        style={{
          position: 'absolute',
          top: 120,
          left: '50%',
          marginLeft: -22,
          zIndex: 1
        }}
      >
        <ClosedView>
          <Ionicons
            name="ios-close"
            size={44}
            color="#546bfb"
          />
        </ClosedView>
      </TouchableOpacity>
      <Content screenHeight={screenHeight}>
        {items.map(item => (
          <MenuItem
            key={item.icon}
            icon={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </Content>
    </AnimatedContainer>
  );
};
