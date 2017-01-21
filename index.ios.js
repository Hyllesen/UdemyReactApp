/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';
import Header from './src/components/Header.js';
import AlbumList from './src/components/AlbumList';

const UdemyApp = () => (
  <View>
  <Header title='Albums' />
  <AlbumList />
  </View>
);

AppRegistry.registerComponent('UdemyApp', () => UdemyApp);
