// Dependencies
import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// Navigation
import { TabNavigator } from '../TabNavigator';

// Screens
// import { HomeScreen } from '../../screens/HomeScreen';
// import { SectionScreen } from '../../screens/SectionScreen';

// const AppNavigator = createStackNavigator({
//   Home: HomeScreen,
//   Section: SectionScreen
// }, {
//   mode: 'modal',
//   headerMode: 'none'
// });

export const AppNavigatorContainer = createAppContainer(TabNavigator);
