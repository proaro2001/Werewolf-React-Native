import React from "react";
import { ImageBackground, StyleSheet, View, Button, Text } from "react-native";
import StartBtn from "./StartBtn";

function Welcome( {navigation}) {
  return (
    <View style={styles.imgContainer}>
      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={styles.background}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{"Werewolf"}</Text>
        </View>
        {/* You can add additional components here that make up your page */}
        <View style={styles.buttonContainer}>
          <StartBtn
            text="Start Game"
            onPress={() => {
              console.log("Start Game");
              navigation.navigate("CharacterSelectionPage");
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    justifyContent: "center",
  },
  background: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    justifyContent: "flex-start",
    paddingTop: "25%",
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#FFD700",
    textAlign: "center",
    fontFamily: "Chalkduster",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 10, height: -5 },
    textShadowRadius: 5,
  },
  buttonContainer: {
    flex: 1,
    padding: 100,
    justifyContent: "flex-end",
    bottom: 10,
  },
});
