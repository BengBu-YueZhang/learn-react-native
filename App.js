/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './view/HomeScreen'
import DetailsScreen from './view/DetailsScreen'
import ListScreen from './view/ListScreen'
import UserScreen from './view/UserScreen'
import OtherScreen from './view/OtherScreen'


const StackA = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
)

StackA.navigationOptions = ({ navigation }) => {
  // DetailsViews隐藏tab
  const routeName = navigation.state.routes[navigation.state.index].routeName
  let tabBarVisible = true
  if (routeName === 'Details') {
    tabBarVisible = false
  }
  return {
    tabBarVisible
  }
}

const AppNavigator = createBottomTabNavigator(
  {
    A: StackA,
    B: ListScreen
  },
  {
    initialRouteName: 'B'
  }
)

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return <AppContainer />
  }
}

export default App
