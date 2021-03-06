// Dependencies
import styled from 'styled-components';
import { Animated } from 'react-native';

export const RootView = styled.View`
  background: black;
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const AnimatedContainer = Animated.createAnimatedComponent(Container);

export const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

export const Message = styled.Text`
  margin: 20px;
  color: #b8bece;
  font-size: 15px;
  font-weight: 500;
`;

export const CardsContainer = styled.View`
  flex-direction: row;
`;
