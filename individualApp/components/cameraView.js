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
  Alert
} from 'react-native';
import { CameraScreen } from 'react-native-camera-kit';

const CameraView = () => {

  return (
    <CameraScreen

    	  actions={{ leftCaptureRetakeButtonText: 'Abandon' }}
        onBottomButtonPressed={(event) => this.onBottomButtonPressed(event)}
  
        hideControls={false} // (default false) optional, hides camera controls
        showCapturedImageCount={false} // (default false) optional, show count for photos taken during that capture session
        cameraRatioOverlay // optional
        allowCaptureRetake={false} // (default false) optional, ask for picture validation

        scanBarcode={true}
        onReadCode={(event) => Alert.alert('QR code found')} // optional
        showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
        laserColor='red' // (default red) optional, color of laser in scanner frame
        frameColor='white' // (default white) optional, color of border of scanner frame
    />
  )

}

export default CameraView