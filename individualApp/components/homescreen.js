/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Timer from "./timer";

const Homescreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.homepage}>
      <ImageBackground resizeMode='cover' style={styles.homepageBG} source={require("../assets/backgroundWhite.jpg")}>
        <Text style={[styles.PSVFont, styles.homepageTitle]}> MATCH{'\n'} TRIVIA</Text>
        <Timer navigateToCamera={() => navigation.navigate('Camera')} />
      </ImageBackground> 
    </SafeAreaView>
  );
}

export default Homescreen
const styles = StyleSheet.create({
  PSVFont: {
    fontFamily: "PSVCondensed-Bold",
  },
  homepage: {
    flex: 1,
  },

  homepageBG: {
    flex: 1,
    padding: 35
  },

  homepageTitle: {
    fontSize: 28,
    color: "white",
    backgroundColor: "black",
    alignSelf: "flex-start",
  }
});
