import React from 'react';

import { Text, View, Image,StyleSheet } from 'react-native';

 

const CatChat = () => {

  return (

    <View style={styles.container}>

      <Image

        source={{

          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',

        }}

        style={{ width: 200, height: 200 }}

      />

      <Text>Hello, I am your cat!</Text>

    </View>

  );

};


const styles = StyleSheet.create({

  container: {

    paddingLeft:150,
    //paddingTop: 150,

  },

  stretch: {

    width: 60,

    height: 60,

    resizeMode: 'stretch',

  },

});

export default CatChat;