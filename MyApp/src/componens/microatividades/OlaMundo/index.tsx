import React from "react";
import { View, Text, StyleSheet } from "react-native";

function OlaMundo({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ola Mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    textAlign: "center",
    color: "#DAA520",
    marginBottom: 5,
    fontSize: 20,
  },
});

export default OlaMundo;
