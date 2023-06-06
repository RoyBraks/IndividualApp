import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

const Timer = () =>  {
  const countDownTime = 3600
  const [time, setTime] = useState(
    countDownTime
  )

  useEffect(() =>
    {
      const interval = setInterval(() => {
        setTime(time => time - 1)
      }, 1000);
      return () => clearInterval(interval);
    }
  )

  const formatTime = (time) => {
    const hour = Math.floor(time/3600)
    const minute = Math.floor(time/60) % 60
    const second = time % 60
    return hour.toString().padStart(2,0) + ":" + minute.toString().padStart(2, 0) + ":" + second.toString().padStart(2,0)
  }

  return (
    <View style={styles.homepageTimer}>
      <Text style={[styles.homepageTimerTitle, styles.PSVFont]}>QUIZ BEGINT OVER</Text>
      <Text style={[styles.homepageTimerCount, styles.PSVFont]}>{formatTime(time)}</Text>
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
    fontSize: 78,
    letterSpacing: 8,
    color: "white",
    paddingHorizontal: 10,
    backgroundColor: "black",
  }
});


