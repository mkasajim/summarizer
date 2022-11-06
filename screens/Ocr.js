import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'

const Ocr = ({navigation, route}) => {
  
  return (
    
    <View style={styles.container}>
      {/* <Image source={{uri: imgPath}} style={styles.imgContainer} /> */}
      {/* <Text style={styles.text}>Params: {route.params.image}</Text> */}
      <Image
        style={styles.tinyLogo}
        source={{
          uri: route.params.image,
        }}
      />
      {/* <Text style={styles.text}>Params: {route.params.image}</Text> */}
    </View>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: '80%',
    height: 400,
    resizeMode: 'contain',
  },
  img: {
    width: '80%',
    height: 'auto',
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Ocr
