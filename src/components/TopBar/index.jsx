/* eslint-disable react/style-prop-object */
// Dependencies
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';

// Redux Actions
import { toggleMenuAction } from '../../store/actions/toggleMenu.action';

// Components
import { NotificationIcon } from '../Icons';

// Styled Components
import {
  TitleBar, Avatar, TitleWrapper, Title, Name
} from './styles';

export const TopBar = () => {
  const dispatch = useDispatch();
  const openMenu = () => {
    dispatch(toggleMenuAction(true));
  };

  return (
    <TitleBar>
      <TouchableOpacity onPress={openMenu}>
        <Avatar source={require('../../../assets/avatar-default.jpg')} />
      </TouchableOpacity>
      <TitleWrapper>
        <Title>Welcome back,</Title>
        <Name>Jesus</Name>
      </TitleWrapper>
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
};
