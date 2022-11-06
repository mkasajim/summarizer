import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ToastAndroid, Image, TouchableHighlight, TouchableNativeFeedback, Button, Alert, StatusBar } from 'react-native';


import ImagePicker from 'react-native-image-crop-picker';

export default function App({navigation}) {

  const [image, setImage] = useState('');

  return (
    <View style={styles.container}>
      
      <View style={styles.buttonContainer}>
      <TouchableNativeFeedback onPress={()=>  ImagePicker.openCamera({
          cropping: true,
          includeBase64: true,
          freeStyleCropEnabled: true,
          compressImageQuality: 0.5,
          
        }).then(image => {
          ToastAndroid.show('Photo taken', ToastAndroid.SHORT);
          // console.log(image);
          // setImage(image.path);
          //ToastAndroid.show(image.path, ToastAndroid.SHORT);
          navigation.navigate('Ocr', {image: image.path});
        })
      
      } >
        <View style={styles.btn}>
        <Text style={styles.btnText}>Select from camera</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={
        () => ImagePicker.openPicker({
          cropping: true,
          includeBase64: true,
          freeStyleCropEnabled: true,
          compressImageQuality: 0.5,
          
        }).then(image => {
          ToastAndroid.show('Photo choosen', ToastAndroid.SHORT);
          // console.log(image);
          //setImage(image.path);
          //ToastAndroid.show(image, ToastAndroid.SHORT);
          navigation.navigate('Ocr', {image: image.path});
        })
        
      }>
        <View style={styles.btn}>
        <Text style={styles.btnText}>Choose from gallarey</Text>
        </View>
      </TouchableNativeFeedback>
      </View>
    </View>
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
