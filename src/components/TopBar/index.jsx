/* eslint-disable react/style-prop-object */
// Dependencies
import React from 'react';
import { StatusBar } from 'expo-status-bar';

// Styled Components
import {
  TitleBar, Avatar, Title, Name
} from './styles';

export const TopBar = () => (
  <TitleBar>
    <Avatar source={require('../../../assets/avatar-default.jpg')} />
    <Title>Welcome back,</Title>
    <Name>Jesus</Name>
    <StatusBar style="auto" />
  </TitleBar>
);
