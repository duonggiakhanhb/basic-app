import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Person from "./components/Person";
import {TouchableOpacity} from "react-native-web";

export default function App() {
  const [value, setValue] = React.useState("");
  const [fontColor, setFontColor] = React.useState("#100f0f");

  // high order function
  // parameters
  const handlePress = (value) => () => {
    setValue(value);
  };
  const handlePressFont = (color) => () => {
    setFontColor(color);
  };

  // no parameter
  // const handlePress = () => {
  //   setValue('Tuan')
  // }
  return (
    <View style={styles.container}>
      <TouchableOpacity  onPress={handlePress("Adam")}>
        <Text style={styles.person}>Person</Text>
      </TouchableOpacity>
      <Person value={value} fontColor={fontColor}/>
      <TouchableOpacity style={styles.red} onPress={handlePressFont("red")}/>
      <TouchableOpacity style={styles.blue} onPress={handlePressFont("blue")}/>
      <TouchableOpacity style={ styles.green} onPress={handlePressFont("green")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  person: {
    fontSize: 20,
  },
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    height: 600,
  },
  red: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  blue: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
  green: {
    width: 100,
    height: 100,
    backgroundColor: "green",
  },
});
