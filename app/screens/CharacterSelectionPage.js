import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import StartBtn from "./StartBtn";
import Header from "./Header";
import CharacterCard from "./CharacterCard";

function CharacterSelectionPage(props) {
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.background}
      blurRadius={10} // Add blurRadius property to make the image more blurry
    >
      {/* Header */}
      <Header title="Character Selection" />

      {/* Character Count */}
      <View style={styles.characterCounter}>
        <Text style={styles.characterCounterTxt}>Character Count:0</Text>
      </View>

      {/* Character Cards */}
      <View style={styles.characterCardContainer}>
        <CharacterCard name={"seer"} />
        <CharacterCard name={"witch"} />
        <CharacterCard name={"hunter"} />
        <CharacterCard name={"knight"} />
        <CharacterCard name={"guard"} />
        <CharacterCard name={"idiot"} />
        <CharacterCard name={"villager"} />
        <CharacterCard name={"white wolf king"} />
        <CharacterCard name={"werewolf"} />
      </View>

      {/* Start Button */}
      <View style={styles.buttonContainer}>
        <StartBtn
          text="Create a Room"
          onPress={() => console.log("Start Game")}
        />
      </View>
    </ImageBackground>
  );
}

export default CharacterSelectionPage;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    padding: 100,
    justifyContent: "flex-end",
    bottom: 10,
    alignSelf: "stretch",
  },
  characterCardContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    flexWrap: "wrap", // allow to move to next line
  },
  characterCounter: {
    flex: 0.1,
    // backgroundColor: "#345995",
    backgroundColor: "#F4D03F",
    borderRadius: 5,
    padding: 5,
    top: 10,
  },
  characterCounterTxt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#273746",
    // color: "#FFFFE0",
  },
});
