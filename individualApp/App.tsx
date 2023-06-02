/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.homepage}>
      <ImageBackground resizeMode='cover' style={styles.homepageBG} source={require("./assets/backgroundWhite.jpg")}>
        <Text style={[styles.PSVFont, styles.homepageTitle]}> MATCH{'\n'} TRIVIA</Text>
        <View style={styles.homepageTimer}>
          <Text style={[styles.homepageTimerTitle, styles.PSVFont]}>QUIZ BEGINT OVER</Text>
          <Text style={[styles.homepageTimerCount, styles.PSVFont]}>00:15:12</Text>
        </View>
      </ImageBackground> 
    </SafeAreaView>
  );
}

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
  },

  homepageTimer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  homepageTimerTitle: {
    color: "black",
    fontSize: 24,
    letterSpacing: 1,
  },

  homepageTimerCount: {
    fontSize: 78,
    letterSpacing: 8,
    color: "white",
    paddingHorizontal: 10,
    backgroundColor: "black",
  }
});

export default App;
