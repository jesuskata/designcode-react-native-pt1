// Dependencies
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// Redux Actions
import { fetchUserDataAction } from '../../store/actions/fetchUserData.action';

// Styled Components
import { Image } from './styles';

export const Avatar = ({ photo }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDataAction());
  }, []);

  return (
    <Image source={{ uri: photo }} />
  );
};

Avatar.propTypes = {
  photo: PropTypes.string
};
