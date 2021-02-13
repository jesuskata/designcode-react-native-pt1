/* eslint-disable react/prop-types */
// Dependencies
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

// Screens
import { HomeScreen } from '../../screens/HomeScreen';
import { SectionScreen } from '../../screens/SectionScreen';
import { CoursesScreen } from '../../screens/CoursesScreen';
import { ProjectsScreen } from '../../screens/ProjectsScreen';

const activeColor = '#4775f2';
const inactiveColor = '#b8bece';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Section: SectionScreen
}, {
  mode: 'modal',
  headerMode: 'none',
});

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  const { routeName } = navigation.state.routes[navigation.state.index];

  if (routeName === 'Section') {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name="ios-home"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    )
  };
};

const CoursesStack = createStackNavigator({
  Courses: CoursesScreen
}, {
  headerMode: 'none',
});

CoursesStack.navigationOptions = {
  tabBarLabel: 'Courses',
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-albums"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

const ProjectsStack = createStackNavigator({
  Projects: ProjectsScreen
}, {
  headerMode: 'none',
});

ProjectsStack.navigationOptions = {
  tabBarLabel: 'Projects',
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-folder"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

export const TabNavigator = createBottomTabNavigator({
  HomeStack, CoursesStack, ProjectsStack
});
