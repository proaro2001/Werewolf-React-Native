/**
 * Future implementation:
 * image for the button instead of text
 */

import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

function MyBtn({ text, onPress, buttonStyle, textStyle }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, buttonStyle]}>
        <Text style={[styles.buttonTxt, textStyle]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default MyBtn;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFD700",
    borderRadius: 20,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: "2%",
  },
  buttonTxt: {
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});
