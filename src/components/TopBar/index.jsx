/* eslint-disable react/style-prop-object */
// Dependencies
import React from 'react';
import { StatusBar } from 'expo-status-bar';
// import { Ionicons } from '@expo/vector-icons';

// Components
import { NotificationIcon } from '../Icons';

// Styled Components
import {
  TitleBar, Avatar, Title, Name
} from './styles';

export const TopBar = () => (
  <TitleBar>
    <Avatar source={require('../../../assets/avatar-default.jpg')} />
    <Title>Welcome back,</Title>
    <Name>Jesus</Name>
    <NotificationIcon
      style={{
        position: 'absolute',
        right: 20,
        top: 5
      }}
    />
    <StatusBar style="auto" />
  </TitleBar>
);
