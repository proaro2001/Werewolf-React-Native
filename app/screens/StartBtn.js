import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

function startBtn({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonTxt}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default startBtn;

const styles = StyleSheet.create({
  button: {
    // width: "80%",
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#FFD700",
  },
  buttonTxt: {
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});
