// Index.ios.js - place code in here for IOS!!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View, Image } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Image
    style={styles.headerImageStyle}
    source={require('./src/images/NASA-COOL-LOGO.png')}
    />
    <AlbumList />
  </View>
);

const styles = {
  headerImageStyle: {
    height: 50,
    width: null
  }
}

// Render it to the device
AppRegistry.registerComponent('NASA-App', () => App);
