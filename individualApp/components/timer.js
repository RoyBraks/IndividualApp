import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Vibration,
  Button,
  Pressable,
  Alert
} from 'react-native';

function Timer({ navigateToCamera }) {

  const formatTime = (time) => {
    const hour = Math.floor(time/3600)
    const minute = Math.floor(time/60) % 60
    const second = time % 60
    return hour.toString().padStart(2,0) + ":" + minute.toString().padStart(2, 0) + ":" + second.toString().padStart(2,0)
  }

  const countDownTime = 2
  const [time, setTime] = useState(
    countDownTime
  )

  const [timerText, setTimerText] = useState(
    formatTime(time) 
  )

  const [timerStyling, setTimerStyle] = useState(
    styles.homepageTimerCount
  )
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };
  
  // Trigger impact feedback
  useEffect(() =>
    {
      if (time <= 0) {
        setTimerStyle(timerStyling => styles.TimerRed)
        setTimerText(timerText => "Click me")
      } else {
        setTimerStyle(timerStyling => styles.homepageTimerCount)
        setTimerText(timerText => formatTime(time))
        const interval = setInterval(() => {
          setTime(time => time - 1)
          if (time <= 10) {
            Vibration.vibrate(200)
          }
          else {
            Vibration.vibrate(100)
          }
          
        }, 1000);
        return () => clearInterval(interval);
      }   
    }, [time]
  )

  if (timerText == "Click me") {
    return (
      <View style={styles.homepageTimer}>
        <Text style={[styles.homepageTimerTitle, styles.PSVFont]}>QUIZ BEGINT OVER</Text>
        <Pressable onPress={() => navigateToCamera()}>
          <Text style={[timerStyling, styles.PSVFont]}>{timerText}</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <View style={styles.homepageTimer}>
      <Text style={[styles.homepageTimerTitle, styles.PSVFont]}>QUIZ BEGINT OVER</Text>
      <Text style={[timerStyling, styles.PSVFont]}>{timerText}</Text>
    </View>
  )
}
export default Timer

const styles = StyleSheet.create({
  PSVFont: {
    fontFamily: "PSVCondensed-Bold",
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
    fontSize: 54,
    letterSpacing: 6,
    color: "white",
    paddingHorizontal: 10,
    backgroundColor: "black",
  },
  
  TimerRed: {
    fontSize: 54,
    letterSpacing: 6,
    color: "white",
    paddingHorizontal: 10,
    backgroundColor: "#ED1C24",
  }
});


