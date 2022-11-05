import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ToastAndroid, Image, TouchableHighlight, TouchableNativeFeedback, Button, Alert, StatusBar } from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';



const takePhotofromCamera = () => {
  ToastAndroid.show('Take Photo from Camera', ToastAndroid.SHORT);
  ImagePicker.openCamera({
    // width: 300,
    // height: 400,
    cropping: true,
    includeBase64: true,
    
  }).then(image => {
    console.log(image);
    // setImage(image.path);
  });
}
const choosePhotofromGallery = () => {
  ToastAndroid.show('Choose Photo from Gallery', ToastAndroid.SHORT);
  ImagePicker.openPicker({
    // width: 300,
    // height: 400,
    cropping: true,
    includeBase64: true,
    
  }).then(image => {
    console.log(image);
    // setImage(image.path);
  });
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'dodgerblue'} />
      
      <View style={styles.buttonContainer}>
      <TouchableNativeFeedback onPress={takePhotofromCamera} >
        <View style={styles.btn}>
        <Text style={styles.btnText}>Select from camera</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={choosePhotofromGallery}>
        <View style={styles.btn}>
        <Text style={styles.btnText}>Choose from gallarey</Text>
        </View>
      </TouchableNativeFeedback>
      </View>
    </SafeAreaView>
  );
}
const buttonStyle = StyleSheet.create({
  button: {
  width: '20%',
  height: 'auto',
  }
})
const myStyles = {backgroundColor: 'dodgerblue'}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  bgimage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  btn: {
    backgroundColor: 'dodgerblue',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: 'dodgerblue',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  registerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
