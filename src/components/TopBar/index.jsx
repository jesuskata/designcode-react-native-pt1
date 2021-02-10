/* eslint-disable react/style-prop-object */
// Dependencies
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';

// Redux Actions
import { toggleMenuAction } from '../../store/actions/toggleMenu.action';

// Components
import { NotificationIcon } from '../Icons';
import { Avatar } from '../Avatar';

// Styled Components
import {
  TitleBar, TitleWrapper, Title, Name
} from './styles';

export const TopBar = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.userData);
  const openMenu = () => {
    dispatch(toggleMenuAction(true));
  };

  return (
    <TitleBar>
      <TouchableOpacity onPress={openMenu}>
        <Avatar photo={data.photo} />
      </TouchableOpacity>
      <TitleWrapper>
        <Title>Welcome back,</Title>
        <Name>{data.name}</Name>
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
