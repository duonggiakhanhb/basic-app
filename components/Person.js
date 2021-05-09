import React from "react";

import { Text, View, StyleSheet } from "react-native";

const Person = (props) => {
  return (
    <View>
      <Text style={[styles.person, {color: props.fontColor}]}>{props.value}</Text>
    </View>
  );
};

export default Person;

const styles = StyleSheet.create({
  person: {
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 35,
  },
});
