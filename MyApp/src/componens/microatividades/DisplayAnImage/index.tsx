import React from 'react';

import {View, Image, StyleSheet} from 'react-native';

 

const styles = StyleSheet.create({

  container: {

    paddingTop: 50,

  },

  tinyLogo: {

    width: 50,

    height: 50,

  },

  logo: {

    width: 66,

    height: 58,

  },

});

  

const DisplayAnImage = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <Image

        style={styles.tinyLogo}

        source={require('../../../../assets/favicon.png')}

      />

      <Image

        style={styles.tinyLogo}

        source={{

          uri: 'https://reactnative.dev/img/tiny_logo.png',

        }}

      />

      <Image

        style={styles.logo}

        source={{

          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMA'+
          'AAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGj'+
          'e7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGB'+
          'gmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',

        }}

      />

    </View>

  );

};

 

export default DisplayAnImage;