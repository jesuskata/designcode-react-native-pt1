// Dependencies
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, SafeAreaView, Animated, Easing, StatusBar, TouchableOpacity
} from 'react-native';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';

// Components
import { Card } from '../../components/Card';
import { Logo } from '../../components/Logo';
import { TopBar } from '../../components/TopBar';
import { Course } from '../../components/Course';
import { Menu } from '../../components/Menu';

// Styled Components
import {
  RootView, AnimatedContainer, Subtitle, Message, CardsContainer
} from './styles';

// Data
import { logos, courses } from '../../data';

// Apollo Client Queries
import { CardsQuery } from '../../apollo/queries';

export const HomeScreen = ({ navigation }) => {
  const isOpen = useSelector(state => state.isOpen.isOpen);
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  const { loading, error, data } = useQuery(CardsQuery);

  useEffect(() => {
    toggleMenu();
  }, [isOpen]);

  const toggleMenu = () => {
    if (isOpen) {
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: false
      }).start();
      Animated.spring(opacity, {
        toValue: 0.5,
        useNativeDriver: false
      }).start();

      StatusBar.setBarStyle('light-content', true);
    } else {
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: false
      }).start();
      Animated.spring(opacity, {
        toValue: 1,
        useNativeDriver: false
      }).start();

      StatusBar.setBarStyle('dark-content', true);
    }
  };

  const handleNavigation = (card) => {
    navigation.push('Section', {
      section: card
    });
  };

  return (
    <RootView>
      <Menu />
      <AnimatedContainer
        style={{
          transform: [{ scale }],
          opacity
        }}
      >
        <SafeAreaView>
          <ScrollView>
            <TopBar />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ padding: 20, paddingLeft: 12, paddingTop: 30 }}
            >
              {logos.map(logo => (
                <Logo
                  key={logo.image}
                  image={logo.image}
                  text={logo.text}
                />
              ))}
            </ScrollView>
            <Subtitle>Continue Learning</Subtitle>
            <ScrollView horizontal style={{ paddingBottom: 30 }} showsHorizontalScrollIndicator={false}>
              {loading ? (
                <Message>Loading...</Message>
              ) : data ? (
                <CardsContainer>
                  {data.cardsCollection.items.map(item => (
                    <TouchableOpacity
                      key={item.caption}
                      onPress={() => handleNavigation(item)}
                    >
                      <Card
                        image={item.image.url}
                        title={item.title}
                        logo={item.logo.url}
                        caption={item.caption}
                        subtitle={item.subtitle}
                        content={item.content}
                      />
                    </TouchableOpacity>
                  ))}
                </CardsContainer>
              ) : error ? <Message>Error!</Message> : null}
            </ScrollView>
            <Subtitle>Popular Courses</Subtitle>
            <ScrollView>
              {courses.map(course => (
                <Course
                  key={course.image}
                  image={course.image}
                  logo={course.logo}
                  subtitle={course.subtitle}
                  title={course.title}
                  avatar={course.avatar}
                  caption={course.caption}
                  author={course.author}
                />
              ))}
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </AnimatedContainer>
    </RootView>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any)
};
