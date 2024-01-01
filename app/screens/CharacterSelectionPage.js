import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Button,
  Text,
  SafeAreaView,
} from "react-native";
import StartBtn from "./StartBtn";
// import ReturnBtn from "./returnBtn";
import ReturnBtn from "./ReturnBtn";

function CharacterSelectionPage(props) {
  return (
    // <View style={styles.imgContainer}>
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.background}
      blurRadius={10} // Add blurRadius property to make the image more blurry
    >
      <SafeAreaView>
        <ReturnBtn
          text="<"
          onPress={() => console.log("Return to Previous Page")}
        />
      </SafeAreaView>

      <View style={styles.buttonContainer}>
        <StartBtn
          text="Create a Room"
          onPress={() => console.log("Start Game")}
        />
      </View>
    </ImageBackground>
    // </View>
  );
}

export default CharacterSelectionPage;

const styles = StyleSheet.create({
  //   imgContainer: {
  //     flex: 1,
  //     justifyContent: "center",
  //   },
  background: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    padding: 100,
    justifyContent: "flex-end",
    bottom: 10,
  },
});
