import React from "react";
import { Image, StyleSheet } from "react-native";
import characters from "../../config/characters";

function CharacterCard(props) {
  return (
    <Image
      // source={require("../../assets/cards/seer.jpg")}
      source={characters.seer.image}
      style={styles.icon}
    />
  );
}

export default CharacterCard;

const styles = StyleSheet.create({
  icon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
    margin: 10,
  },
});
