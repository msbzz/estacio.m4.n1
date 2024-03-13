import React, { useState } from 'react';

import { Text, TextInput, View,StyleSheet } from 'react-native';

 

const Cat = () => {
  
  const [name,SetName] = useState('')

  //const name = 'Maru';

  return (

    <View style={styles.container}>

      <Text>digite seu nome...</Text>

      <TextInput onChangeText={(texto)=>(SetName(texto))} 

        style={{

          height: 40,

          borderColor: 'gray',

          borderWidth: 1,

        }}

       // defaultValue="Name me!"

      />


      <Text style={{paddingTop:20}}>Hello, I am {name}</Text>

    </View>

  );

};

const styles = StyleSheet.create({

  container: {

    paddingLeft:10,
    paddingTop: 120,

  },

 

});

export default Cat;