/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createAppContainer, createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './view/HomeScreen'
import DetailsScreen from './view/DetailsScreen'
import UserScreen from './view/UserScreen'
import SignInScreen from './view/SignInScreen'
import AuthLoadingScreen from './view/AuthLoadingScreen'

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    User: UserScreen,
  }
)

const BottomTabStack = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Details: { screen: DetailsScreen },
  }
)

const LoginStack = createStackNavigator(
  {
    Login: SignInScreen
  }
)

const RootStack = createStackNavigator(
  {
    Main: BottomTabStack,
    Login: LoginStack,
    AuthLoading: AuthLoadingScreen
  },
  {
    headerMode: 'none',
    initialRouteName: 'AuthLoading'
  }
)

const AppContainer = createAppContainer(RootStack)

class App extends React.Component {
  render() {
    return <AppContainer />
  }
}

export default App
