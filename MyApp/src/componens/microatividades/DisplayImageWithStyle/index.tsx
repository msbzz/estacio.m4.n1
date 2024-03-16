import React from 'react';

import {View, Image, StyleSheet} from 'react-native';

 

const styles = StyleSheet.create({

  container: {

    paddingLeft:100,
    paddingTop: 150,

  },

  stretch: {

    width: 60,

    height: 60,

    resizeMode: 'stretch',

  },

});

 

const DisplayAnImageWithStyle = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <Image

        style={styles.stretch}

        source={require('../../../../assets/favicon.png')}
 

      />

    </View>

  );

};

 

export default DisplayAnImageWithStyle;