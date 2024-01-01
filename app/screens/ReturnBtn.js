/**
 * Future implementation:
 * image for the button instead of text
 */

import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

function ReturnBtn({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonTxt}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ReturnBtn;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFD700",
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 10,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "2%",

    // // shadow for the button
    // shadowColor: "black",
    // shadowOffset: {
    //   width: 0,
    //   height: 10,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.5,
    // elevation: 5,
  },
  buttonTxt: {
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});
