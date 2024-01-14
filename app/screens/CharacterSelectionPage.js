import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  FlatList,
} from "react-native";
import StartBtn from "./StartBtn";
import Header from "./Header";
import CharacterCard from "./CharacterCard";

function CharacterSelectionPage({props, navigation}) {
  const characterlist = [
    "seer",
    "witch",
    "hunter",
    "knight",
    "guard",
    "idiot",
    "villager",
    "white wolf king",
    "werewolf",
  ];

  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.background}
      blurRadius={10} // Add blurRadius property to make the image more blurry
    >
      {/* Header */}
      <Header title="Character Selection" leftOnPress={navigation.goBack}/>

      {/* Character Count */}
      <View style={styles.characterCounter}>
        <Text style={styles.characterCounterTxt}>Character Count:0</Text>
      </View>

      {/* Character Cards */}
      <View style={styles.characterCardContainer}>
        <FlatList
          data={characterlist}
          renderItem={({ item }) => <CharacterCard name={item} />}
          contentContainerStyle={{ 
            flexDirection: "row", 
            flexWrap: "wrap",
            justifyContent: "space-around",
            // justifyContent: "space-evenly",
            // justifyContent: "space-between",
          }}
        />
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
  characterCardContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    flexWrap: "wrap", // allow to move to next line
    // backgroundColor: "green", // uncomment this one to see the effect
  },
  characterCounter: {
    // flex: 0.1,
    height: 40,
    backgroundColor: "#F4D03F",
    borderRadius: 5,
    padding: 5,
    top: 10,
    alignSelf: "center",
    justifyContent: "center",
  },
  characterCounterTxt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#273746",
    // color: "#FFFFE0",
  },
  buttonContainer: {
    flex: 0.1,
    padding: 10,
    justifyContent: "flex-end",
    bottom: 50,
    alignSelf: "stretch",
    // backgroundColor: "black",
  },
});
