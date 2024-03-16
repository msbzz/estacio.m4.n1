import React from 'react';
import {Image, ScrollView, Text,StyleSheet} from 'react-native';
const logo = {

    uri: 'https://reactnative.dev/img/tiny_logo.png',
  
    width: 64,
  
    height: 64,
  
  };
  
   
  
  const SVComponent  = ({ navigation }) => (
  
    <ScrollView>
  
      <Text style={{fontSize: 50}}>Scroll me plz</Text>
  
      <Image source={logo} />
  
      <Image source={logo} />
  
      <Image source={logo} />
  
      <Image source={logo} />
  
      <Image source={logo} />
  
      <Text style={{fontSize: 50}}>If you like</Text>
  
      <Image source={logo} />
  
      <Image source={logo} />
  
      <Image source={logo} />
  
      <Image source={logo} />
  
      <Image source={logo} />
  
      <Text style={styles.text}>Scrolling down</Text>
  
      <Image source={logo} />
  
      <Image source={logo} />
  
      <Image source={logo} />
  
      <Image source={logo} />
  
      <Image source={logo} />
  
      <Text style={styles.text}>What's the best</Text>
  
      <Image source={logo} />
  
      <Image source={logo} />
  
      <Image source={logo} />
  
      <Image source={logo} />
  
      <Image source={logo} />
  
      <Text style={styles.text}>Framework around?</Text>
  
      <Image source={logo} />
  
      <Image source={logo} />
  
      <Image source={logo} />
  
      <Image source={logo} />
  
      <Image source={logo} />
  
      <Text style={{fontSize: 80}}>React Native</Text>
  
    </ScrollView>
  
  );
  
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF",
    },
    text: {
      textAlign: "center",
      color: "#000",
      marginBottom: 5,
      fontSize: 30,
      
    },
  });
  
  export default SVComponent;