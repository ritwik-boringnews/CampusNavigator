/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import InitialNavigator from './navigators/InitialNavigator';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';

export default function App() {
  return <InitialNavigator />;
}
