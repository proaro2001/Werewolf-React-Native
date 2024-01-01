import React from "react";
import MyBtn from "./MyBtn";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

function Header({ title, test, rightText, rightOnPress, rightStyle }) {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <MyBtn text="<" onPress={() => console.log("Return to Previous Page")} />
      <Text style={styles.title}>{"角色選擇"}</Text>
      {/* <View style={styles.buttonEmpty} /> */}
      <MyBtn
        text={rightText}
        onPress={() => console.log("Next Page")}
        buttonStyle={styles.buttonEmpty}
      />
    </SafeAreaView>
  );
}

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row", // Align children in a row
    alignItems: "center", // Center children vertically
    justifyContent: "space-between", // Distribute children evenly
    backgroundColor: "black", //  FFD700
    opacity: 0.8,
  },
  title: {
    flex: 1,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonEmpty: {
    backgroundColor: null,
  },
});